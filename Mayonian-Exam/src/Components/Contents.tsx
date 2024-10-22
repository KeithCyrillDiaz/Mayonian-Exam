import React, {useState, useEffect} from "react";
import { BottomCategories, UpperCategories } from "./Contents/Categories";
import { Games } from "./Contents/Games";
import { ButtonLabels } from "../lib/types";
import { SearchBar} from "./Contents/Search";
import { useFetchGamesRedux } from "../hooks/useFetchGamesRedux";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setGames } from "../redux/gameSlice";



export const Contents: React.FC = () => {

    const {games, status, dispatch} = useFetchGamesRedux()
    const [category, setCategory] = useState<ButtonLabels | null>(null)

    const allGames = useSelector((state: RootState) => state.game.games)
    useEffect(() => {
       if(category !== "SEARCH")  dispatch(setGames(allGames))
    },[category])

    return(
        <div className="flex flex-col">
            <UpperCategories setCategory = {setCategory}/>
             {category === "SEARCH" &&
              <SearchBar />
            }
               <Games gamesList = {games} status={status} searchVisibile={category === "SEARCH"}/>
        
            <BottomCategories/>
        </div>
        

    )
}