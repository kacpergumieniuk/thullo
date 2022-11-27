import React, { useState } from 'react'

interface AddListTabProps {
    handleAddList: (name: string) => void
}

export const AddListTab = ({ handleAddList }: AddListTabProps) => {
    const [listName, setListName] = useState<string>('')

    const handleClickAddButton = () => {
        if (listName != '') {
            handleAddList(listName)
            setListName('')
        }
    }

    return (
        <div className="flex h-[32px] w-[244px] justify-between rounded-lg bg-[#DAE4FD] px-3 text-xs text-[#2F80ED]">
            <input
                placeholder="Add another list"
                value={listName}
                className="w-full bg-[#DAE4FD] outline-none placeholder:text-[#2F80ED]"
                onChange={(e) => setListName(e.target.value)}
            />
            <button onClick={handleClickAddButton}>+</button>
        </div>
    )
}
