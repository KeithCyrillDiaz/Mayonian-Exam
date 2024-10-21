import React from "react";


export const Loader: React.FC<{className?: string}> = ({className}) => {
    return(
            <div className={`${className} animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-defaultBlue absolute top-[65%] left-[45%]`}/>
    )
}