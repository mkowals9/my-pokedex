export async function mapToPokemon(pokemon) {
    const response = await fetch(pokemon.url)
    const pokemonInfo = await response.json()
    console.log("info ", pokemonInfo)
    return {
        name: pokemon.name,
        types: pokemonInfo.types.reduce(((types,type)=>[...types,type.type.name]),[]),
        abilities: pokemonInfo.abilities.reduce(((abilities,ability)=>[...abilities,ability.ability.name]),[]),
        weight: pokemonInfo.weight,
        height: pokemonInfo.height
    }
}


