import React, { useState, useEffect } from 'react';
import EndScreen from './containers/EndScreen';
import MenuScreen from './containers/MenuScreen';
import TriviaScreen from './containers/TriviaScreen';

const API_URL = 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean';

function App() {
  const [screen, setScreen] = useState('menu');
  //questions array fetched from API_URL
  const [questions, setQuestions] = useState([]);
  //current index of questions array
  const [currentIdx, setCurrentIdx] = useState(0);
  //user generated answers
  const [answers, setAnswers] = useState([]);

  //fetch API_URL on first render/mount
  useEffect(() => {
    async function fetchAPI(){
      try{
        const response = await fetch(API_URL);
        const data = await response.json();
        setQuestions(data.results)
      }catch(e){
        console.error(e)
      }
    }
    fetchAPI();
  }, [])

  //start trivia
  const handleStartTrivia = () => {
    setScreen('trivia')
  }

  //triggered when user chooses an answer
  const handleAnswer = (answer) => {
    //check if current question is not the last one
    if(currentIdx < questions.length-1){
      setCurrentIdx(currentIdx + 1)
    }
    else{
      setScreen('end')
    }
    //add user's choice to answers array
    setAnswers(prevState => [...prevState, { q: questions[currentIdx].question, a: answer }])
    console.log(answers)
  }

  //play again
  const handleReset = () => {
    setCurrentIdx(0);
    setAnswers([]);
    setScreen('menu');
  }

  return (
    <div className="App">
      {screen === 'menu' && <MenuScreen onStart={handleStartTrivia}/>}
      {screen === 'trivia' && 
        <TriviaScreen 
          handleAnswer={handleAnswer}
          qIdx={currentIdx}
          questions={questions}
        />}
      {screen === 'end' && <EndScreen onReset={handleReset}/>}
    </div>
  );
}

export default App;
