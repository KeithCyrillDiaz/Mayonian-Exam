import React, { useState } from "react";
import { GameProviderIcon } from "../icons";
import { filterGames } from "../../redux/gameSlice";
import { useDispatch } from "react-redux";
import { GameProviderModal } from "./GameProviderModal";



const GameProviderButton: React.FC<{onClick: () => void;}> = ({onClick}) => {
    return (
        <button onClick={onClick} className="px-1 border border-defaultGray rounded-[7px] items-center flex justify-center">
            <GameProviderIcon/>
        </button>
    )
}

export const SearchBar: React.FC = ()=> {
    
    const dispatch = useDispatch()
    const [showGameProvider, setShowGameProvider] = useState<boolean>(false)
    const [isOutAnimation, setIsOutAnimation] = useState<boolean>(false)

    const delayHookUpdate = async () => {
        setIsOutAnimation(true)
        setTimeout(() => {
           setShowGameProvider(false)
           setIsOutAnimation(false)
        }, 400);
    }

    return(
        <div className="w-full flex flex-row gap-x-2 py-2">
            {showGameProvider && 
                <GameProviderModal onClick={() => delayHookUpdate()} inOutAnimation={isOutAnimation}/>
            }
             <input
                type="text" // Type of input
                placeholder="Search..." // Placeholder text
                className="border-2 rounded p-2 w-full" // Optional: Add some styling
                onChange={(event) => dispatch(filterGames(event.target.value))}
            />
         <GameProviderButton onClick={() => setShowGameProvider(!showGameProvider)}/>
        </div>

    )
}
