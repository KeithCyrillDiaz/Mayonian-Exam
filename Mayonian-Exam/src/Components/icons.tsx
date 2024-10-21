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
        <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" viewBox="0 0 24 24"><g fill="none" stroke="#888888" strokeWidth="1.5"><path d="M19 20H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2Z"/><path fill="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16.5 14a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1"/><path d="M18 7V5.603a2 2 0 0 0-2.515-1.932l-11 2.933A2 2 0 0 0 3 8.537V9"/></g></svg>
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


export const YellowStarIcon: React.FC= () => {
    return (
        <svg className="w-7 h-auto" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1_100)">
        <g clip-path="url(#clip1_1_100)">
        <path d="M15.2784 5.60319C15.624 5.65754 15.7968 5.79643 15.7968 6.01986C15.7968 6.15271 15.7166 6.29764 15.5561 6.45464L12.1962 9.66116L12.9922 14.1901C12.9984 14.2324 13.0015 14.2928 13.0015 14.3713C13.0015 14.4981 12.9691 14.6053 12.9043 14.6928C12.8395 14.7804 12.7454 14.8242 12.622 14.8242C12.5048 14.8242 12.3814 14.788 12.2518 14.7155L8.0959 12.5778L3.94001 14.7155C3.80426 14.788 3.68085 14.8242 3.56978 14.8242C3.4402 14.8242 3.34301 14.7804 3.27822 14.6928C3.21343 14.6053 3.18103 14.4981 3.18103 14.3713C3.18103 14.3351 3.1872 14.2747 3.19955 14.1901L3.99555 9.66116L0.626416 6.45464C0.472152 6.2916 0.39502 6.14667 0.39502 6.01986C0.39502 5.79643 0.567796 5.65754 0.913348 5.60319L5.55979 4.94196L7.64236 0.820595C7.7596 0.573011 7.91078 0.449219 8.0959 0.449219C8.28101 0.449219 8.43219 0.573011 8.54943 0.820595L10.632 4.94196L15.2784 5.60319Z" fill="#FFD703"/>
        </g>
        </g>
        <defs>
        <clipPath id="clip0_1_100">
        <rect width="15.4018" height="14.375" fill="white" transform="translate(0.730957 0.445312)"/>
        </clipPath>
        <clipPath id="clip1_1_100">
        <rect width="15.4018" height="14.375" fill="white" transform="translate(0.730957 0.445312)"/>
        </clipPath>
        </defs>
        </svg>

    )
}


export const ClearStarIcon: React.FC= () => {
    return (
        <svg className="w-7 h-auto" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1_113)">
        <g clip-path="url(#clip1_1_113)">
        <path d="M11.9213 13.0669L11.2549 9.25355L14.0872 6.56334L10.1812 6.00174L8.43185 2.54161L6.68249 6.00174L2.77651 6.56334L5.60881 9.25355L4.93313 13.0669L8.43185 11.2644L11.9213 13.0669ZM15.6144 5.60319C15.96 5.65754 16.1327 5.79643 16.1327 6.01986C16.1327 6.15271 16.0525 6.29764 15.8921 6.45464L12.5322 9.66116L13.3282 14.1901C13.3344 14.2324 13.3375 14.2928 13.3375 14.3713C13.3375 14.6732 13.211 14.8242 12.958 14.8242C12.8407 14.8242 12.7173 14.788 12.5877 14.7155L8.43185 12.5778L4.27596 14.7155C4.14021 14.788 4.01679 14.8242 3.90572 14.8242C3.77614 14.8242 3.67896 14.7804 3.61416 14.6928C3.54937 14.6053 3.51698 14.4981 3.51698 14.3713C3.51698 14.3351 3.52315 14.2747 3.53549 14.1901L4.33149 9.66116L0.962354 6.45464C0.808089 6.2916 0.730957 6.14667 0.730957 6.01986C0.730957 5.79643 0.903733 5.65754 1.24929 5.60319L5.89574 4.94196L7.97831 0.820595C8.09555 0.573011 8.24673 0.449219 8.43185 0.449219C8.61697 0.449219 8.76815 0.573011 8.88539 0.820595L10.968 4.94196L15.6144 5.60319Z" fill="white"/>
        </g>
        </g>
        <defs>
        <clipPath id="clip0_1_113">
        <rect width="15.4018" height="14.375" fill="white" transform="translate(0.730957 0.445312)"/>
        </clipPath>
        <clipPath id="clip1_1_113">
        <rect width="15.4018" height="14.375" fill="white" transform="translate(0.730957 0.445312)"/>
        </clipPath>
        </defs>
        </svg>        

    )
}