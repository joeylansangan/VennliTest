import React from 'react'

function EndScreen({results, questions, onReset}) {

    return (
        <div>
            <h2>End game</h2>
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
