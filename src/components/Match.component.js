import { useState } from "react";

const Match = (props) => {

  const { startMatch, players } = props;

  const [ showPlayers, setShowPlayers ] = useState(false);
  const [ blind, setBlind ] = useState(10);
  const [ buyin, setBuyin ] = useState([]);

  const onBlindChange = (event) => {
    setBlind(event.target.value);
  }

  const onBuyinChange = (event) => {
    setBuyin(event.target.value);
  }

  const handleSettings = () => {
    setShowPlayers(true);
  }

  if (startMatch) {
    return (
      <div>
        <div>
          Buy-in: 
          <input type="number" onChange={onBuyinChange} value="1000"></input>
        </div>
        <div>
          Blind: 
          <input type="number" onChange={onBlindChange} value="10"></input>
        </div>
        <button handleClick={handleSettings}>OK</button>
      </div>
    )
  }

  if (showPlayers) {
    return (
      <div>
        {players.map(player => 
          <div key={player.id}>{player.name}</div>
        )}
      </div>
    )
  }
}
export default Match;