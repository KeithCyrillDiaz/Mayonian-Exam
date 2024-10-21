import React from 'react'


export const Container: React.FC<{children: React.ReactNode}> = ({children}) => {
    return (
        <div className='px-4 py-2'>{children}</div>
    )
}