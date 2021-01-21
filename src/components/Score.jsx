import React from 'react';


const Score = ({ correct, incorrect, seconds}) => {    

  

    return (
        <div className="flex justify-around">
            <div className="text-xl md:text-2xl">Correct: <span className="text-green-500">{correct}</span></div>
            <div className="text-xl md:text-2xl">Incorrect: <span className="text-red-500">{incorrect}</span></div>
            <div className="text-xl md:text-2xl">Time: <span className="font-bold">{seconds}s</span></div>
        </div>
    )
}

export default Score