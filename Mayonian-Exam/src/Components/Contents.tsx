import React, {useState} from "react";
import { BottomCategories, UpperCategories } from "./Contents/Categories";
import { Games } from "./Contents/Games";
import { ButtonLabels } from "../lib/types";
import { SearchBar} from "./Contents/Search";
import { useFetchGamesRedux } from "../hooks/useFetchGamesRedux";



export const Contents: React.FC = () => {

    const {games, status} = useFetchGamesRedux()
    const [category, setCategory] = useState<ButtonLabels | null>(null)

    return(
        <>
            <UpperCategories setCategory = {setCategory}/>
             {category === "SEARCH" &&
              <SearchBar />
            }
               <Games gamesList = {games} status={status} searchVisibile={category === "SEARCH"}/>
        
            <BottomCategories/>
        </>
        

    )
}