import React, {Dispatch, SetStateAction, useState} from "react";
import { Button } from "../Button";
import { ButtonLabels } from "../../lib/types";

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
    const [focus, setFocus] = useState<ButtonLabels | null>(null)
    return(
        <div className="flex flex-row justify-between">
            {UpperButtons.map((label) => (
               <React.Fragment key={label}>
                    <Button 
                        onClick={() => {
                            if(focus === label) {
                                setCategory(null)
                                setFocus(null)
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

    const [focus, setFocus] = useState<ButtonLabels | string>("")

    return(
        <div className="absolute bottom-0 w-[94%]  mr-2 bg-white pt-2">
               <div className="flex flex-row justify-between">
                    {BottomButtons.map((label) => (
                    <Button onClick={() => setFocus(label)} 
                    focus={focus === label} 
                    key={label} label={label} 
                    BottomCategories
                    className="h-9 w-9"/>
                    ))}
                </div>
        </div>
 
    )
}