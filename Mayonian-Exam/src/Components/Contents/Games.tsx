import React, { useState, useEffect }  from "react";
import { GameCard } from "./GameCard";
import { MockGameList } from "../../API/fetchData";
import { GameType } from "../../lib/MockData";
import { status } from "../../lib";
import { Loader } from "../Loader";

export const Games: React.FC = () => {

    const [games, setGames] = useState<GameType[] | []>([])
    const [status, setStatus] = useState<status>("idle")

    const fetchData = async () => {
        try {
            setStatus("loading"); 
            const result = await MockGameList(true); 
            if(result.data) setGames(result.data); 
            else setGames([])
            
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setStatus("idle"); 
        }
    }

    useEffect(() =>{
        fetchData();
    },[])

    if(status === "loading"){
        return(
                <Loader/>
        )
    }
    if(games.length === 0){
        return(
                <div className="flex justify-center items-center pt-20"> Please check your internet connection</div>
        )
    } 
    return(
        <div className="flex-grow overflow-y-scroll">
              <div className="flex flex-wrap gap-2 h-[340px]">
                {games.map((game) => {
                    const {id} = game
                    return(
                       <GameCard key={id} gameData={game}/>
                    )
                })} 
            </div>
    
        </div>
          
        
    )
}