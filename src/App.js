import './App.css';
import { useState } from 'react';

import Button from './components/Button.component'
import Match from './components/Match.component'

const App = () => {
  const [players, setPlayers] = useState(2);
  const [startMatch, setMatch] = useState(false);

  return (
    <div>
      <h1>Welcome to Online Poker Chips!</h1>
      <p>How many players?</p>
      <p>{players} players</p>
      <Button handleClick = {() => {
        if (players === 2){
          setPlayers(2)  
        } else {
          setPlayers(players - 1)} 
        }
      } text="-" />
      <Button handleClick = {() => setPlayers(players + 1)} text="+" />
      <Button handleClick = {() => setMatch(true)} text="OK" />
      <Match startMatch = {startMatch} />
    </div>
  );
}

export default App;
