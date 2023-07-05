import { useState } from 'react';

import NumPlayers from './NumPlayers';
import Match from './Match.component';
import SetChips from './SetChips.component';

const StartGame = ( {resume} ) => {
  const [playerNum, setPlayerNum] = useState(2);
  const [playerSelect, setPlayerSelect] = useState(true);
  const [startMatch, setMatch] = useState(false);
  const [players, setPlayers] = useState([]);
  const [initialDealer, setInitialDealer] = useState(0);
  const [showSettings, setShowSettings] = useState(false);
  const [blind, setBlind] = useState("10");
  const [buyin, setBuyin] = useState("1000");
  
  const handleStart = () => {
    const playerArray = []
    for (let i=0; i<playerNum; i++) {
      const newPlayer = {
        id: playerArray.length,
        name: `Player ${i}`
      };
      playerArray.push(newPlayer);
      setPlayerSelect(false);
      try {
        localStorage.setItem("start", "true");
      } catch (itemFullException) {
        console.log(itemFullException);
      }

    }
    
    const initialDealer = Math.floor(Math.random()*playerNum);
    
    setInitialDealer(initialDealer);
    setPlayers(playerArray);
    setMatch(true);
  };

  const handleAdd = () => {
    setPlayerNum(playerNum + 1);
    const newPlayer = {
      id: players.length,
      name: `Player ${players.length}`
    };
    setPlayers([...players, newPlayer]);
  }

  return (
    <div className='main'>
      <h1>Online Poker Chips!</h1>
      <button onClick={() => setShowSettings(!showSettings)}>Settings</button>
      {showSettings ? <SetChips handleBlind={setBlind} handleBuyin={setBuyin} handleShowSettings={setShowSettings} /> : null}
      {playerSelect ? <NumPlayers handleStart={handleStart} handleSetPlayers={setPlayerNum} numPlayers={playerNum} /> : null}
      {startMatch ? <Match players={players} initialDealer={initialDealer} blind={blind} buyin={buyin} handleAdd={handleAdd}/> : null}
    </div>
  );
  
}

export default StartGame;
