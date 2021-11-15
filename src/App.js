import React, { useState, useEffect } from 'react';
import MenuScreen from './containers/MenuScreen';
import TriviaScreen from './containers/TriviaScreen';

const API_URL = 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean';

function App() {
  const [screen, setScreen] = useState('menu');
  //questions array fetched from API_URL
  const [questions, setQuestions] = useState([]);
  //current index of questions array
  const [currentIdx, setCurrentIdx] = useState(0);

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

  const handleStartTrivia = () => {
    setScreen('trivia')
  }
  return (
    <div className="App">
      {screen === 'menu' && <MenuScreen onStart={handleStartTrivia}/>}
      {screen === 'trivia'&& 
        <TriviaScreen 
          qIdx={currentIdx}
          questions={questions}
        />}
    </div>
  );
}

export default App;
