import { connect } from "react-redux";
import { useState } from "react";
import { mapToPokemon } from "../models/Pokemon";

const MyPokemonList = (props) => {

    const [pokemonList, setPokemonList] = useState([])
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
          if(baseData.length) {setPokemonList(baseData)}  
        }
    }

    const getInfo = async () => {
        let lista = pokemonList.map(element =>  mapToPokemon(element))
        lista = await Promise.all(lista)
        console.log("lets see ", lista)
    }

    const getAll = () => {
      show()
      getInfo()
    }

    return(
        <>
        <button onClick={() => getAll()}> Kliknij! </button>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
      pokemonList: state.pokemonList,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {};
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(MyPokemonList);