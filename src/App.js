import './App.css';
import { useState } from 'react';

import Button from './components/Button.component'
import Match from './components/Match.component'

const App = () => {
  const [numPlayers, setNumPlayers] = useState(2);
  const [startMatch, setMatch] = useState(false);
  const [players, setPlayers] = useState([]);
  const [initialDealer, setInitialDealer] = useState(0);
  
  const handleStart = () => {
    const playerArray = []
    for (let i=0; i<numPlayers; i++) {
      const newPlayer = {
        id: playerArray.length + 1,
        name: `Player ${i}`
      };
      playerArray.push(newPlayer);
    }

    const initialDealer = Math.floor(Math.random()*numPlayers);
    
    setInitialDealer(initialDealer);
    setPlayers(playerArray);
    setMatch(true);
  };

  return (
    <div>
      <h1>Welcome to Online Poker Chips!</h1>
      <p>How many players?</p>
      <p>{numPlayers} players</p>
      <Button handleClick = {() => {
        if (numPlayers === 2){
          setNumPlayers(2)  
        } else {
          setNumPlayers(numPlayers - 1)} 
        }
      } text="-" />
      <Button handleClick = {() => setNumPlayers(numPlayers + 1)} text="+" />
      <Button handleClick = {handleStart} text="OK" />
      <Match startMatch={startMatch} players={players} initialDealer={initialDealer}/>
    </div>
  );
}

export default App;
