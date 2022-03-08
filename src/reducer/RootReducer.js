const initState = {
    pokemonList: []
}

const rootReducer = ( state = initState, action ) => {
    switch(action.type){
        case 'ADD_NEW_POKEMONS':
            {
                let oldList = state.pokemonList
                let toAddPage = { index: oldList.length, pokemons: action.newPokemonList }
                oldList.push(toAddPage)
                return { ...state,
                    pokemonList: oldList
            }
            
        }
        default:
            return state;
    }
}

export default rootReducer