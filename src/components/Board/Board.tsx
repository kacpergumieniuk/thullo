import { list } from 'postcss'
import React, { useEffect, useState } from 'react'
import { AddListTab } from './AddListTab'
import { List, ListProps } from './List/List'
import { DndContext, closestCenter, DragEndEvent } from '@dnd-kit/core'
import { v4 as uuidv4 } from 'uuid'
import { CardProps } from './List/Card/Card'

export const Board = () => {
    const [lists, setLists] = useState<Array<ListProps>>([])

    const handleAddList = (listName: string) => {
        setLists([...lists, { name: listName, id: uuidv4(), cards: [] }])
    }

    const handleAddCard = (listId: string, name: string) => {
        const targetList = lists.find((list) => list.id === listId)
        if (targetList) {
            targetList.cards.push({ name: name, id: uuidv4() })
            setLists(
                lists.map((list) => {
                    return list.id === listId ? targetList : list
                })
            )
        }
    }

    useEffect(() => {
        console.log(lists)
    }, [lists])

    /*  const handleDragEnd = (e: DragEndEvent) => {
        const { active, over } = e
        if (active.id !== over!.id) {
            const activeObj = cards.filter((card) => card.id === active.id)
            const overObj = cards.filter((card) => card.id === over!.id)
            if (activeObj[0]?.listId === overObj[0]?.listId) {
                const cardsWithinThisList = cards.filter(
                    (card) => card.listId === activeObj[0]?.listId
                )
                console.log(cardsWithinThisList)
                const activeIndex = cardsWithinThisList.indexOf(activeObj[0]!)
                const overIndex = cardsWithinThisList.indexOf(overObj[0]!)
                console.log(activeIndex, overIndex)
            }
        }
    } */

    return (
        <DndContext
            collisionDetection={closestCenter}
            /* onDragEnd={handleDragEnd} */
        >
            <div className="mx-3 mt-4 flex h-screen rounded-md bg-slate-100 py-6 px-4">
                {lists.map((list) => (
                    <List
                        name={list.name}
                        key={list.id}
                        id={list.id}
                        cards={list.cards}
                        lists={lists}
                        handleAddCard={handleAddCard}
                    />
                ))}
                <AddListTab handleAddList={handleAddList} />
            </div>
        </DndContext>
    )
}
