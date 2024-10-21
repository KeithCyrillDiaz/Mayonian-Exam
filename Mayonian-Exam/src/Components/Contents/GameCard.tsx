import React from "react";
import { GameType } from "../../lib/MockData";
import { ClearStarIcon, YellowStarIcon } from "../icons";
import { useDispatch, useSelector } from "react-redux";
import { setFavorite } from "../../redux/gameSlice";
import { RootState } from "../../redux/store";

type GameCardProps ={
    gameData: GameType;
}

const StarBanner: React.FC<{id: number}> = ({id}) => {
    const dispatch = useDispatch()
    //to search the updated data
    const favorite = useSelector((state: RootState) => 
        state.game.games.find(game => game.id === id)?.favorite
    );

    return(
        <>
            <button 
            onClick={() => dispatch(setFavorite({ id: id, favorite: !favorite }))}
            className="flex items-center justify-center absolute right-0 z-10">
                {favorite ? (
                    <YellowStarIcon/>
                ) : (
                    <ClearStarIcon/>
                )}
            </button>
            <div className="h-7 bg-transparentBlack absolute w-full rotate-[35deg] left-[40px] opacity-50"/>

        </>
    )
}


export const GameCard: React.FC<GameCardProps> = ({gameData}) => {
    const {url, id} = gameData
    return(
          <div 
            className="relative overflow-hidden">
                <StarBanner id={id}/>
                <img 
                    src={url} 
                    alt="Background"
                    className="h-auto w-full max-w-[115px] rounded-[17px]"
                />
            </div>
    )
}