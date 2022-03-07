import { connect } from "react-redux";

const MyPokemonList = (props) => {

    const getPokemon = async () => {

    }

    return(
        <>
        
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