import React, { useState, useEffect } from 'react';
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

function EndScreen({results, questions, onReset}) {
    const [score, setScore] = useState(0);

    useEffect(() => {
        let currentScore = 0;
        results.forEach((result, i) => {
            //compare user answers against correct answers
            if(result.a === questions[i].correct_answer){
                currentScore++
            }
        });
        setScore(currentScore)
    },[questions, results])
    
    return (
        <div className="py-8 px-4">
            <div className="mb-8">
                <h4 className="uppercase text-xl font-semibold">You Scored</h4>
                <h2 className="font-semibold text-3xl text-green-500">{score} / {questions.length}</h2>
            </div>
            <section>
                <ul>
                    {results.map((result, i) => (
                        <li key={i} className="mb-6">
                            <div className="flex border border-solid items-center justify-evenly p-2">
                                {(result.a === questions[i].correct_answer) ? <AiOutlineCheck/> : <AiOutlineClose/>}
                                <h3 className="w-4/5" dangerouslySetInnerHTML={{ __html: result.q}}/>
                            </div>
                            <span className="text-xs text-gray-400">Your Answer: {result.a}</span>
                        </li>
                    ))}
                </ul>
            </section>
            <button
                className="menu-btn m-10 uppercase"
                onClick={onReset}
            >
                play again
            </button>
        </div>
    )
}

export default EndScreen
