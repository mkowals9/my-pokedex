import { connect } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { mapToPokemon } from "../models/Pokemon";
import Pokeball from '../images/poke_ball_icon.svg'
import {SinglePokemon} from "./SinglePokemon";

const MyPokemonList = (props) => {

    const pokemonList = useRef(null)
    const [currentUrl, setCurrentUrl] = useState(`https://pokeapi.co/api/v2/pokemon/`)
    const [endOfData, setEndOfData] = useState(false)
    const [generatorInstance] = useState(fetchPokemons(currentUrl))
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    async function* fetchPokemons(initialUrl) { 
      let url = initialUrl 
      while (url !== null) { 
        let response = {};
        try{
          response = await fetch(url);
        } 
        catch { setError(true)}
        const body = await response.json();
        url = body.next;
        yield body.results
        setCurrentUrl(url)  
      }
    }
    
    const getPokemonsBasicInfo = async () => {
        let baseData = []
        if(!endOfData){
          baseData = await generatorInstance.next()
          pokemonList.current = baseData.value
        }
    }

    const getMoreDetailsAboutPokemons = async () => {
      let currentPokemonList = pokemonList.current
      if(!endOfData && currentPokemonList){
        let lista = currentPokemonList.map(element => mapToPokemon(element))
        lista = await Promise.all(lista)
        pokemonList.current = lista
        props.setPokemonList(pokemonList.current)
      }
        setLoading(false)
    }

    const getPokemons = async () => {
      setLoading(true)
      await getPokemonsBasicInfo()
      await getMoreDetailsAboutPokemons()
    }

    useEffect(() => {
      getPokemons()
    }, []);

    if(loading && props.pokemonList.length === 0){
      return (        
        <div>
          <img className="w-10 animate-spin" src={Pokeball} alt="Pokeball"/>
        </div>   
      )
    }

    if(error){
      return(<>
        <lable>Error occured while fetching data.</lable>
      </>)
    }

    return(
        <div className=" flex flex-col items-center">
          { currentUrl === null ? (<label className="text-gray-500">There isn't any more Pokémons. </label>) : (<></>) }
          <div className="flex flex-row justify-center"> 
            <img className={`w-10${loading ? ' animate-spin' : ''}`} src={Pokeball} alt="Pokeball" onClick={() => getPokemons()}/> </div>          
          <div>
                {
                  props.pokemonList.length > 0 ? (props.pokemonList).map((element, index) => 
                    (<SinglePokemon key={index} item={element}/>)) : (<></>)
                }
          </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      pokemonList: state.pokemonList,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      setPokemonList: (newPokemonList) => {
          dispatch({type: "ADD_NEW_POKEMONS", newPokemonList: newPokemonList})
      }
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(MyPokemonList);