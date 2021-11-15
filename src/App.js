import React, { useState } from 'react';
import MenuScreen from './containers/MenuScreen';
import TriviaScreen from './containers/TriviaScreen';

const API_URL = 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean';

function App() {
  const [screen, setScreen] = useState('menu')

  const handleStartTrivia = () => {
    setScreen('trivia')
  }
  return (
    <div className="App">
      {screen === 'menu' && <MenuScreen onStart={handleStartTrivia}/>}
      {screen === 'trivia'&& <TriviaScreen/>}
    </div>
  );
}

export default App;
