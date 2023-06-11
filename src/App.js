import './App.css';
import { useState } from 'react';

import NumPlayers from './components/NumPlayers';
import Match from './components/Match.component';
import SetChips from './components/SetChips.component';

const App = () => {
  const [numPlayers, setNumPlayers] = useState(2);
  const [startMatch, setMatch] = useState(false);
  const [players, setPlayers] = useState([]);
  const [initialDealer, setInitialDealer] = useState(0);
  const [showSettings, setShowSettings] = useState(false);
  const [blind, setBlind] = useState("10");
  const [buyin, setBuyin] = useState("1000");
  
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
    <div className='main'>
      <h1>Online Poker Chips!</h1>
      <NumPlayers handleStart={handleStart} handleSetPlayers={setNumPlayers} numPlayers={numPlayers} />
      {startMatch ? <Match players={players} initialDealer={initialDealer} blind={blind} buyin={buyin} /> : null}
      <button onClick={() => setShowSettings(!showSettings)}>Settings</button>
      {showSettings ? <SetChips handleBlind={setBlind} handleBuyin={setBuyin} handleShowSettings={setShowSettings} /> : null}
    </div>
  );
  
}

export default App;
