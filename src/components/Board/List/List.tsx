import React, { useState } from 'react'
import { AddCardTab } from './AddCardTab'
import { Card, CardProps } from './Card/Card'

export interface ListProps {
    name: string
}

export const List = ({ name }: ListProps) => {
    const [cards, setCards] = useState<Array<CardProps>>([])

    const handleAddCard = (cardName: string) => {
        setCards([...cards, { name: cardName }])
    }

    return (
        <div className="h-full w-[244px]">
            <div className="flex p-2">
                <p className="text-sm font-medium">{name}</p>
            </div>
            <div className="mx-2">
                {cards.map((card: CardProps) => (
                    <Card name={card.name} />
                ))}
                <AddCardTab handleAddCard={handleAddCard} />
            </div>
        </div>
    )
}
