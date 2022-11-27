import { list } from 'postcss'
import React, { useEffect, useState } from 'react'
import { AddListTab } from './AddListTab'
import { List, ListProps } from './List/List'
export const Board = () => {
    const [lists, setLists] = useState<Array<ListProps>>([])

    const handleAddList = (listName: string) => {
        setLists([...lists, { name: listName }])
    }
    return (
        <div className="mx-3 mt-4 flex h-screen rounded-md bg-slate-100 py-6 px-4">
            {lists.map((list) => (
                <List name={list.name} />
            ))}
            <AddListTab handleAddList={handleAddList} />
        </div>
    )
}
