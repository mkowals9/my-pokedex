const initState = {
    pokemonList: {}
}

const rootReducer = ( state = initState, action ) => {
    switch(action.type){
        case 'ADD_POKEMON_LIST':
            return { ...state,
            pokemonList: action.pokemonList
        }
        default:
            return state;
    }
}

export default rootReducer