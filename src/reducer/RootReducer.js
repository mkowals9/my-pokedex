const initState = {
    pokemonList: []
}

const rootReducer = ( state = initState, action ) => {
    switch(action.type){
        case 'ADD_NEW_POKEMONS':
            {
                let oldList = state.pokemonList
                return { ...state,
                    pokemonList: [...action.newPokemonList, ...oldList]
            }
            
        }
        default:
            return state;
    }
}

export default rootReducer