import React from "react";


const Line: React.FC = () => {
    return (
        <div className="bg-defaultBlue w-6 h-1"/>
    )
}


export const MenuIcon: React.FC = () => {
    return(
        <div className="flex flex-col gap-y-1">
            {Array.from({ length: 3 }).map((_, index) => (
                <Line key={index}/>
            ))}
        </div>
    )
}

export const UserIcon: React.FC = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 mx-[-7px]" viewBox="0 0 24 24"><path fill="#00A6FF" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"/></svg>
    )
}


export const WalletIcon: React.FC = () => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" viewBox="0 0 24 24"><g fill="none" stroke="#888888" stroke-width="1.5"><path d="M19 20H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2Z"/><path fill="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.5 14a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1"/><path d="M18 7V5.603a2 2 0 0 0-2.515-1.932l-11 2.933A2 2 0 0 0 3 8.537V9"/></g></svg>
    )
}

export const WalletWithAmount: React.FC<{amount: number}> = ({amount}) => {
    return(
        <div className="flex flex-row items-end gap-x-2">
              <WalletIcon/>
                <span className="text-defaultBlue text-[20px] font-bold ">  
                 ${amount.toString()}   
                </span>
        </div>
     
    )
}

export const DividerIcon: React.FC = () => {
    return(
        <div className="relative w-[2px] h-9">
            <div className="absolute inset-0 bg-gradient-to-b from-white via-[#00A6FF] to-white border-l border-transparent" />
            <div className="relative h-full w-full" />
        </div>
    )
}

export const BellIcon: React.FC = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 ml-[-4px]" viewBox="0 0 24 24"><path fill="#FFD600" d="M21 19v1H3v-1l2-2v-6c0-3.1 2.03-5.83 5-6.71V4a2 2 0 0 1 2-2a2 2 0 0 1 2 2v.29c2.97.88 5 3.61 5 6.71v6zm-7 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2"/></svg>
    )
}