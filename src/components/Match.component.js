import { useState, useEffect } from "react";
import PlayerInfo  from "./PlayerInfo.component";

const Match = (props) => {
  const { players, blind, buyin, handleAdd } = props;
  const [pot, setPot] = useState(0);
  const [chips, setChips] = useState([]);

  
  useEffect(() => {
    setChips(Array(players.length).fill(buyin));
  }, [players.length, buyin]);

  const handleChipCount = (id, nVal) => {
    const modChips = [...chips]
    modChips[id] = nVal;
    setChips(modChips);
  }
  
  return (
    <div>
      <h3 className="round-info">Big-Blind: {blind} | Small-Blind: {Math.floor(blind/2)}</h3>
  
      <h2>Current Pot: {pot}</h2>
      {players.map((player) => {
        const config = {
          name: player.name,
          chips: chips[player.id],
          blind: blind,
          pot: pot
        }

        return(<PlayerInfo key={player.id} config = {config} setPot={setPot} handleChipCount={(nVal) => handleChipCount(player.id, nVal)}/>)
      })}
      <button onClick={handleAdd}>Add Player</button>
    </div>
  )
}

export default Match;