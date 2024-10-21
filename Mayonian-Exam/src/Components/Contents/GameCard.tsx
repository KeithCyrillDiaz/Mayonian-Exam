import React from "react";
import { GameType } from "../../lib/MockData";
import { ClearStarIcon, YellowStarIcon } from "../icons";

type GameCardProps ={
    gameData: GameType;
}

const StarBanner: React.FC<{favorite?: boolean}> = ({favorite}) => {
    return(
        <>
            <div className="flex items-center justify-center absolute right-0 z-10">
                {favorite ? (
                    <YellowStarIcon/>
                ) : (
                    <ClearStarIcon/>
                )}
            </div>
            <div className="h-7 bg-transparentBlack absolute w-full rotate-[35deg] left-[40px] opacity-50"/>

        </>
    )
}


export const GameCard: React.FC<GameCardProps> = ({gameData}) => {
    const {url, favorite} = gameData
    return(
        <div 
        className="relative overflow-hidden">
            <StarBanner favorite={favorite}/>
            <img 
                src={url} 
                alt="Background"
                className="h-auto w-full max-w-[115px] rounded-[17px]"
            />
        </div>
    )
}