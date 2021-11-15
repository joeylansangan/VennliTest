import React from 'react';
import { BiCategoryAlt } from "react-icons/bi";

function TriviaScreen({qIdx, questions, handleAnswer}) {

    const {question, category} = questions[qIdx];

    return (
        <div className="flex flex-col items-center justify-center">
                        
            <div className="flex items-center text-gray-400 pt-4">
                <BiCategoryAlt />
                <h3 className="text-xl">{category}</h3>
            </div>
            <div className="flex items-center mb-8 mt-2">
                <h2 className="text-2xl font-semibold">Question {qIdx + 1} &nbsp;</h2>
                <h4 className="text-gray-400 text-xl">/ &nbsp; {questions.length}</h4>
            </div>
                
            <div className="sm:w-3/5 w-4/5 border border-solid p-10">
                <h4 dangerouslySetInnerHTML={{ __html: question}}/>
                <div className="mt-8 flex flex-col space-y-4 bg-dark-light">
                    <input 
                        className="answer-btn"
                        onClick={e => handleAnswer(e.target.value)} 
                        type='button' 
                        value="True"/>
                    <input 
                        className="answer-btn"
                        onClick={e => handleAnswer(e.target.value)} 
                        type='button' 
                        value="False"/>
                </div>
               
            </div>
            <span className="text-xs text-gray-400 my-8 px-4">Note: Next question will appear after the current question is answered</span>
        </div>
    )
}

export default TriviaScreen
