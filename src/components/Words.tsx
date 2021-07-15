import React from 'react'
import "../App.css"

interface props{
    selectedWord: string;
    correctLetters: string[];
}

const Words = ({ selectedWord, correctLetters }: props) => {
    return (
        <>
            <div className="word" >
                {selectedWord
                    .split('')
                    .map((letter, i) => {
                        return(
                            <span className='letter' key={i}>
                                {correctLetters.includes(letter) ? letter : ''}
                            </span>
                        )
                    })}
            </div>
        </>
    )
}

export default Words
