import React, { useState, useEffect } from 'react';

function EndScreen({results, questions, onReset}) {
    const [score, setScore] = useState(0);

    //calculate score on first render/mount
    useEffect(() => {
        let currentScore = 0;
        results.forEach((result, i) => {
            //compare user answers against correct answers
            if(result.a === questions[i].correct_answer){
                currentScore++
            }
        });
        setScore(currentScore)
    },[])
    
    return (
        <div>
            <div>
                <h4>You Scored</h4>
                <h2>{score} / {questions.length}</h2>
            </div>
            <section>
                <ul>
                    {results.map((result, i) => (
                        <li key={i}>
                           <h3 dangerouslySetInnerHTML={{ __html: result.q}}/>
                           <span>Your Answer: {result.a}</span>
                        </li>
                    ))}
                </ul>
            </section>
            <button
                onClick={onReset}
            >
                play again
            </button>
        </div>
    )
}

export default EndScreen
