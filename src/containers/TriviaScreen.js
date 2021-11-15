import React from 'react'

function TriviaScreen({qIdx, questions, handleAnswer}) {

    const {question, category} = questions[qIdx];

    return (
        <div>
            <h2>Category: {category}</h2>
            <h4 dangerouslySetInnerHTML={{ __html: question}}/>
            <div>
                <input 
                    onClick={e => handleAnswer(e.target.value)} 
                    type='button' 
                    value="True"/>
                <input 
                    onClick={e => handleAnswer(e.target.value)} 
                    type='button' 
                    value="False"/>
            </div>
        </div>
    )
}

export default TriviaScreen
