import React from 'react'

function TriviaScreen({qIdx, questions}) {

    const {question, category} = questions[qIdx];

    return (
        <div>
            <h2>Category: {category}</h2>
            <p>{question}</p>
        </div>
    )
}

export default TriviaScreen
