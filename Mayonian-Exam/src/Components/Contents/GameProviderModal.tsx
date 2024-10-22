import React from "react";
import { CloseIcon, GameProviderIcon } from "../icons";
import { GameProviderLogo, GameProviderLogos } from "../../lib/constants";
import { useDispatch } from "react-redux";

import { setProviderGames } from "../../redux/gameSlice";


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

const GameProviderCard: React.FC<{data: GameProviderLogo, onClick: () => void;}> = ({data, onClick}) => {
    const {logoUrl, title} = data
    const dispatch = useDispatch()

    const handleFetchGamesBaseOnProvider = () => {
        dispatch(setProviderGames(title))
    }

    return(
        <button 
        onClick={() => {
            onClick() 
            handleFetchGamesBaseOnProvider()
        }}
        className="bg bg-defaultOffWhite rounded-[7px] w-[170px] items-center justify-center flex">
            <img
            src={logoUrl}
            className=" w-[100px] h-auto"
            />
        </button>
    )
}


const RenderGameProviders:React.FC<{onClick: () => void;}> = ({onClick}) => {

    return (
        <div className="flex flex-wrap gap-4 items-center justify-center py-4 overflow-y-scroll h-[300px]">
            {GameProviderLogos.map((item, index) => (
                <GameProviderCard key={index} data={item} onClick={onClick}/>
            ))}
        </div>
    )
}



export const GameProviderModal:React.FC<{onClick: () => void; inOutAnimation?: boolean}> = ({
    onClick,
    inOutAnimation
}) => {
    return(
       <div className={`${inOutAnimation ? "exit-to-bottom":"slide-in-from-bottom"} absolute bottom-0 h-[50vh] bg-white z-20 w-full ml-[-16px]`}
       >
        <Header onClick={onClick}/>
        <RenderGameProviders onClick = {onClick}/>
       </div>
    )
}