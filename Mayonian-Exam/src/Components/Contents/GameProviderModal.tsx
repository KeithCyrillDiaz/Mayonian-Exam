import React from "react";
import { CloseIcon, GameProviderIcon } from "../icons";


const Header: React.FC<{onClick: () => void;}> = ({onClick}) => {
    return(
        <div className="flex flex-row bg-defaultBlue w-full px-4 py-2 justify-between">
            <div className="flex flex-row items-center gap-x-4">
                <GameProviderIcon color="white"/>
                <span className="text-white font-poppins font-light">Game Provider</span>
                <span className="text-white font-poppins font-light border rounded-[17px] px-3">119</span>
            </div>
            <button onClick={onClick}>
                <CloseIcon/>
            </button>
         


        </div>
    )
}



export const GameProviderModal:React.FC<{onClick: () => void; inOutAnimation?: boolean}> = ({
    onClick,
    inOutAnimation
}) => {
    return(
       <div className={`${inOutAnimation ? "exit-to-bottom":"slide-in-from-bottom"} absolute h-[100vh] bg-white z-20 w-full ml-[-16px]`}
       >
        <Header onClick={onClick}/>
       </div>
    )
}