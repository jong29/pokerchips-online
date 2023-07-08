import { useState, useEffect } from "react";
import PlayerInfo  from "./PlayerInfo.component";

const Match = (props) => {
  const { playerNum, blind, buyin, setPlayerNum } = props;
  const [pot, setPot] = useState(0);
  const [players, setPlayers] = useState([]);
  
  useEffect(() => {
    const playerArray = []
    for (let i=0; i<playerNum; i++) {
      const newPlayer = {
        id: playerArray.length,
        name: `Player ${i}`,
        chips: buyin
      };
      playerArray.push(newPlayer);
    }
    setPlayers(playerArray);

    localStorage.setItem("pot", pot);
    localStorage.setItem("players", JSON.stringify(players));

  }, []);

  const handleChipCount = (id, nVal) => {
    const newPlayers = [...players];
    const playerToUpdate = newPlayers.find(obj => obj.id === id);
    if (playerToUpdate) {
      const updatedPlayer = {...playerToUpdate, chips: nVal};
      const foundIndex = newPlayers.findIndex(obj => obj.id === id);
      newPlayers[foundIndex] = updatedPlayer;
      setPlayers(newPlayers);
    }
  }

  const handleAdd = () => {
    setPlayerNum(playerNum + 1);
    const newPlayer = {
      id: players.length,
      name: `Player ${players.length}`,
      chips: buyin
    };
    setPlayers([...players, newPlayer]);
  }
  
  return (
    <div>
      <h3 className="round-info">Big-Blind: {blind} | Small-Blind: {Math.floor(blind/2)}</h3>
  
      <h2>Current Pot: {pot}</h2>
      {players.map((player) => {
        const config = {
          name: player.name,
          chips: player.chips,
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