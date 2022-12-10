import React from 'react'

export interface CardProps {
    name: string
}

export const Card = ({ name }: CardProps) => {
    return (
        <div className="my-3 min-h-[100px] rounded-md bg-white py-2 px-3 text-[16px] shadow-sm">
            <p>{name}</p>
        </div>
    )
}
