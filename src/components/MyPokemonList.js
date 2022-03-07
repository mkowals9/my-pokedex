import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { mapToPokemon } from "../models/Pokemon";

const MyPokemonList = (props) => {

    const [pokemonList, setPokemonList] = useState([])

    async function* fetchPokemons() {
        let url = `https://pokeapi.co/api/v2/pokemon/`;
        while (url) {
          const response = await fetch(url);
          const body = await response.json();
          let nextPage = response.headers.get('Link')
          url = nextPage?.[1];
      
          for(let object of body.results) {
            yield object;
          }
        }
      }
    
    const show = async () => {
        let drugaLista = []
        for await (const commit of fetchPokemons()) {
            console.log("kuku ", commit)
            drugaLista.push(commit)
        }

        drugaLista.map(element => mapToPokemon(element))
        console.log("druga lista ", drugaLista)
        setPokemonList(drugaLista)    
    }

    const getInfo = async () => {
        let lista = pokemonList.map(element =>  mapToPokemon(element))
        lista = await Promise.all(lista)
        console.log("lets see ", lista)
    }

    return(
        <>
        <button onClick={() => show()}> Kliknij! </button>
        <button onClick={() => getInfo()}> Kliknij po 2! </button>
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