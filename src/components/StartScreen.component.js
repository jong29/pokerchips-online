import { useState, useEffect } from 'react';

import NumPlayers from './NumPlayers';
import Match from './Match.component';
import SetChips from './SetChips.component';

const StartScreen = ( {resume} ) => {
  const [playerNum, setPlayerNum] = useState(2);
  const [playerSelect, setPlayerSelect] = useState(true);
  const [startMatch, setMatch] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [blind, setBlind] = useState(() => resume ? localStorage.blind : "10");
  const [buyin, setBuyin] = useState(() => resume ? localStorage.buyin : "1000");

  useEffect(() => {
    localStorage.setItem("blind", blind);
    localStorage.setItem("buyin", buyin);
    if (resume) {
      setPlayerSelect(false);
      setMatch(true);
    }
  });
  
  const handleStart = () => {
    setPlayerSelect(false);
    try {
      localStorage.setItem("start", "true");
    } catch (itemFullException) {
      console.log(itemFullException);
    }
    setMatch(true);
  };

  return (
    <div className='main'>
      <h1>Online Poker Chips!</h1>
      <button onClick={() => setShowSettings(!showSettings)}>Settings</button>
      {showSettings ? <SetChips handleBlind={setBlind} handleBuyin={setBuyin} handleShowSettings={setShowSettings} /> : null}
      {playerSelect ? <NumPlayers handleStart={handleStart} handleSetPlayers={setPlayerNum} numPlayers={playerNum} /> : null}
      {startMatch ? <Match playerNum={playerNum} blind={blind} buyin={buyin} setPlayerNum={setPlayerNum} resume={resume} /> : null}
    </div>
  );
  
}

export default StartScreen;
