const initState = {
    pokemonList: {}
}

const rootReducer = ( state = initState, action ) => {
    switch(action.type){
        case 'ADD_NEW_POKEMONS':
            return { ...state,
            pokemonList: state.pokemonList.push(action.pokemonList) 
        }
        default:
            return state;
    }
}

export default rootReducer