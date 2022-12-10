import React, { useEffect, useState } from 'react'

interface AddCardTabProps {
    handleAddCard: (name: string) => void
}

export const AddCardTab = ({ handleAddCard }: AddCardTabProps) => {
    const [cardName, setCardName] = useState<string>('')

    const handleClickAddButton = () => {
        handleAddCard(cardName)
        setCardName('')
    }

    useEffect(() => {
        console.log(cardName)
    }, [cardName])

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
