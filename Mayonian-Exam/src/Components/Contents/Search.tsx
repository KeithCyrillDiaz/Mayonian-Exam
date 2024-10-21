import React from "react";
import { GameProviderIcon } from "../icons";
import { filterGames } from "../../redux/gameSlice";
import { useDispatch } from "react-redux";



const GameProviderButton: React.FC = () => {
    return (
        <div className="px-1 border border-defaultGray rounded-[7px] items-center flex justify-center">
            <GameProviderIcon/>
        </div>
    )
}

export const SearchBar: React.FC = ()=> {
    const dispatch = useDispatch()
    return(
        <div className="w-full flex flex-row gap-x-2 py-2">
             <input
                type="text" // Type of input
                placeholder="Search..." // Placeholder text
                className="border-2 rounded p-2 w-full" // Optional: Add some styling
                onChange={(event) => dispatch(filterGames(event.target.value))}
            />
         <GameProviderButton/>
        </div>

    )
}
