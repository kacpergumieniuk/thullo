import React from 'react'

export interface ListProps {
    name: string
}

export const List = ({ name }: ListProps) => {
    return <div className="h-full w-[244px] border">{name}</div>
}
