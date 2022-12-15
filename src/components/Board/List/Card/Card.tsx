import { UniqueIdentifier } from '@dnd-kit/core'
import React from 'react'
import { CSS } from '@dnd-kit/utilities'
import { useSortable } from '@dnd-kit/sortable'

export interface CardProps {
    name: string
    id: string
}

export const Card = ({ name, id }: CardProps) => {
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({ id: id })

    const style = { transform: CSS.Transform.toString(transform), transition }
    return (
        <div
            className="my-3 min-h-[100px] rounded-md bg-white py-2 px-3 text-[16px] shadow-sm"
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
        >
            <p>{name}</p>
        </div>
    )
}
