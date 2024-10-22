import React, {Dispatch, SetStateAction, useState} from "react";
import { Button } from "../Button";
import { ButtonLabels } from "../../lib/types";
import { useDispatch, useSelector } from "react-redux";
import { getFavorites, setGames} from "../../redux/gameSlice";
import { RootState } from "../../redux/store";

export const UpperCategories: React.FC<{setCategory: Dispatch<SetStateAction<ButtonLabels | null>>}> = ({
    setCategory
}) => {

    const UpperButtons: ButtonLabels[] = [
        "SEARCH",
        "START",
        "NEW",
        "SLOTS",
        "LIVE",
        "JACKPOTS"
    ]
    const [focus, setFocus] = useState<ButtonLabels>("START")
    return(
        <div className="flex flex-row justify-between">
            {UpperButtons.map((label) => (
               <React.Fragment key={label}>
                    <Button 
                        onClick={() => {
                            if(focus === label) {
                                setCategory("START")
                                setFocus("START")
                                return
                            }
                            setFocus(label)
                            setCategory(label)
                        }} 
                        focus={focus === label} 
                        label={label} 
                        className="h-9 w-9"
                    />
                    {label === "SEARCH" && (
                        <div className="w-[1px] h-10 bg-defaultGray"/>
                    )}
                </React.Fragment>
            ))}
        </div>
 
    )
}



export const BottomCategories: React.FC = () => {

    const BottomButtons: ButtonLabels[] = [
        "SPORTS",
        "FAVORITES",
        "INVITE",
        "CASINO LIVE",
        "CASHIER"
    ]

    const [focus, setFocus] = useState<ButtonLabels>("CASINO LIVE")
    const dispatch = useDispatch()

    const allGames = useSelector((state: RootState) => state.game.games)
    
    const filterGames = () => {
        dispatch(getFavorites()); 
    };

    const fetchAllGames = () => {
        dispatch(setGames(allGames))
    };

    return(
            <div className="flex flex-row absolute space-x-[3vh] bottom-0 bg-white pt-4 z-30">
                    {BottomButtons.map((label) => (
                    <Button onClick={() => {
                        setFocus(label)
                        if(label === "FAVORITES") filterGames()
                        if(label === "CASINO LIVE") fetchAllGames()
                    }} 
                    focus={focus === label} 
                    key={label} label={label} 
                    BottomCategories
                    className="h-9 w-9"/>
                    ))}
                </div>
    )
}