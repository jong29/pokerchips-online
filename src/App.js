import './App.css';
import { useState } from 'react';

import Button from './components/Button.component'
import Match from './components/Match.component'

const App = () => {
  const [numPlayers, setNumPlayers] = useState(2);
  const [startMatch, setMatch] = useState(false);

  return (
    <div>
      <h1>Welcome to Online Poker Chips!</h1>
      <p>How many players?</p>
      <p>{numPlayers} players</p>
      <Button handleClick = {() => {
        if (numPlayers === 2){
          setPlayers(2)  
        } else {
          setNumPlayers(numPlayers - 1)} 
        }
      } text="-" />
      <Button handleClick = {() => setNumPlayers(numPlayers + 1)} text="+" />
      <Button handleClick = {() => setMatch(true)} text="OK" />
      <Match startMatch={startMatch} numPlayers={numPlayers} />
    </div>
  );
}

export default App;
