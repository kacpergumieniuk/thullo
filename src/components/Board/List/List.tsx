import React, { useState } from 'react'
import { AddCardTab } from './AddCardTab'
import { Card, CardProps } from './Card/Card'
import {
    arrayMove,
    rectSortingStrategy,
    rectSwappingStrategy,
    SortableContext,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import { v4 as uuidv4 } from 'uuid'
import { UniqueIdentifier } from '@dnd-kit/core'

export interface ListProps {
    name: string
    id: string
    handleAddCard?: (name: string, listId: string) => void
    cards: CardProps[]
    lists?: ListProps[]
}

export const List = ({ name, id, cards, handleAddCard, lists }: ListProps) => {
    const currentList = lists?.find((list) => list.id === id)

    return (
        <SortableContext items={cards!} strategy={verticalListSortingStrategy}>
            <div className="h-full w-[244px]">
                <div className="flex p-2">
                    <p className="text-sm font-medium">{name}</p>
                </div>
                <div className="mx-2">
                    {cards.map((card) => (
                        <Card name={card.name} key={card.id} id={card.id} />
                    ))}
                    <AddCardTab handleAddCard={handleAddCard!} listId={id} />
                </div>
            </div>
        </SortableContext>
    )
}
