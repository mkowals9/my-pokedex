import { useState } from "react";
import "../styles/lightMode.css"

export const SinglePokemon = (props) => {

    const [showMoreInfo, setShowMoreInfo] = useState(false);

    return(
        <div className="pokemon-element" onClick={() => setShowMoreInfo(!showMoreInfo)}>
            <label>Name: {props.item.name}</label>
            <label>Types: {props.item.types}</label>
            <label>Abilities: {props.item.abilities}</label>
            {showMoreInfo ? (<label>Weight: {props.item.weight}</label>) : (<></>)}
            {showMoreInfo ? (<label>Height: {props.item.height}</label>) : (<></>)}
        </div>
    )

}