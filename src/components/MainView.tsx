import React from 'react'
import { Board } from './Board/Board'
import { Navbar } from './Navbar/Navbar'

export const MainView = () => {
    return (
        <div className="h-full w-full">
            <Navbar />
            <Board />
        </div>
    )
}
