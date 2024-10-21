import React from "react";
import { BottomCategories, UpperCategories } from "./Contents/Categories";
import { Games } from "./Contents/Games";



export const Contents: React.FC = () => {
    return(
        <>
            <UpperCategories/>
            <Games/>
            <BottomCategories/>
        </>
        

    )
}