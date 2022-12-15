import React, { useEffect, useState } from 'react'

interface AddCardTabProps {
    handleAddCard: (name: string, listId: string) => void
    listId: string
}

export const AddCardTab = ({ handleAddCard, listId }: AddCardTabProps) => {
    const [cardName, setCardName] = useState<string>('')

    const handleClickAddButton = () => {
        handleAddCard(listId, cardName)
        setCardName('')
    }

    const buttonDisabled = cardName.trim() === ''
    return (
        <div className="flex h-[32px] justify-between rounded-lg bg-[#DAE4FD] px-3 text-xs text-[#2F80ED]">
            <input
                placeholder="Add another card"
                value={cardName}
                className="w-full bg-[#DAE4FD] outline-none placeholder:text-[#2F80ED]"
                onChange={(e) => setCardName(e.target.value)}
            />
            <button onClick={handleClickAddButton} disabled={buttonDisabled}>
                +
            </button>
        </div>
    )
}
