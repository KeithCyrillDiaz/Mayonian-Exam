import React from 'react'
import { DividerIcon, MenuIcon, UserIcon, WalletWithAmount } from './icons'
import { Logo } from './Logo'

export const Header: React.FC = () => {
    return(
        <div className='flex flex-row justify-between'>
            <div className='flex flex-row items-center gap-x-4'>
                <MenuIcon/>
                <Logo/>
            </div>
            <div className='flex flex-row items-center gap-x-3 '>
                <WalletWithAmount amount={1990.6}/>
                <DividerIcon/>
                <UserIcon/>
            </div>
        </div>
    )
}