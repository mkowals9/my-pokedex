import { useState } from "react";
import "../styles/lightMode.css"

export const SinglePokemon = (props) => {

    const [showMoreInfo, setShowMoreInfo] = useState(false);

    return(
        <div className="flex flex-row bg-red-300 dark:bg-red-600 m-3 p-3 rounded-md justify-between items-center shadow-md transition ease-in-out hover:scale-105" onClick={() => setShowMoreInfo(!showMoreInfo)}>
            <div className="flex flex-col text-sm" >
                <label className="font-semibold text-red-900 dark:text-black capitalize text-2xl">{props.item.name}</label>
                <div className="flex flex-row space-x-3">
                    <label>Types: </label>
                    <div className="flex flex-row">
                    {props.item.types.join(", ")}
                    </div>
                </div>
                <label>Abilities: {props.item.abilities.join(", ")}</label>
                {showMoreInfo && (
                    <>
                        <label>Weight: {props.item.weight}</label>
                        <label>Height: {props.item.height}</label>
                    </>)}
            </div>
            <div className="bg-red-200 dark:bg-red-400 w-1/5 p-1 rounded-md shadow">
                <img className="w-full p-1" src={props.item.sprite} alt=" "/>
            </div>
        </div>
    )

}