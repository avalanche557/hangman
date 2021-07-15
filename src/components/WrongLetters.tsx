import React from 'react'
import '../App.css'

interface props {
    wrongLetters: string[]
}

function WrongLetters({wrongLetters}: props) {
    return (
        <>
            <div className="wrong-letters-container">
                <div>
                    {wrongLetters.length > 0 && <p>Wrong</p>}
                    {wrongLetters
                        .map((letter, i) =>  <span key={i}>{letter}, </span>)
                        //.reduce((prev, curr) => prev === null ? [curr] : [prev, " ,", curr], null)
                    }
                </div>
            </div>
        </>
    )
}

export default WrongLetters
