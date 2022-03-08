import { connect } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { mapToPokemon } from "../models/Pokemon";
import Pokeball from '../images/poke_ball_icon.svg'

const MyPokemonList = (props) => {

    const pokemonList = useRef(null)
    const [currentUrl, setCurrentUrl] = useState(`https://pokeapi.co/api/v2/pokemon/`)
    const [endOfData, setEndOfData] = useState(false)

    async function* fetchPokemons() {
        let url = currentUrl;
        if(url !== null){
          const response = await fetch(url);
          const body = await response.json();
          url = body.next;
          for(let object of body.results) {
            yield object;
          }
          setCurrentUrl(url)
        }
        else{
            setEndOfData(true)
        }
      }
    
    const show = async () => {
        let baseData = []
        if(!endOfData){
          for await (const commit of fetchPokemons()) {
            baseData.push(commit)
          }
          if(baseData.length) {pokemonList.current = baseData}  
        }
    }

    const getInfo = async () => {
      let currentPokemonList = pokemonList.current
      if(!endOfData && currentPokemonList.length){
        let lista = currentPokemonList.map(element =>  mapToPokemon(element))
        lista = await Promise.all(lista)
        pokemonList.current = lista
        props.setPokemonList(pokemonList.current)
      }
    }

    const getAll = async () => {
      await show()
      await getInfo()
    }

    useEffect(() => {
      getAll()
    }, );

    return(
        <>
          <img className="pokeball-logo" src={Pokeball} alt="Pokeball" onClick={() => getAll()}/>
        </>
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