import { useState, useEffect } from "react";
import PlayerInfo  from "./PlayerInfo.component";
import PlayerRename from "./PlayerRename.component";

const Match = (props) => {
  const { playerNum, blind, buyin, setPlayerNum, resume } = props;
  const [pot, setPot] = useState(() => resume ? parseInt(localStorage.pot) : 0);
  const [players, setPlayers] = useState([]);
  const [showRename, setShowRename] = useState(false);
  
  useEffect(() => {
    if (resume) {
      setPlayers(JSON.parse(localStorage.players));
    } else {
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
    }
  }, []);

  const handleSetPot = (val) => {
    setPot(val);
    localStorage.setItem("pot", val);
  }

  const handleChipCount = (id, nVal) => {
    const newPlayers = [...players];
    const playerToUpdate = newPlayers.find(obj => obj.id === id);
    if (playerToUpdate) {
      const updatedPlayer = {...playerToUpdate, chips: nVal};
      const foundIndex = newPlayers.findIndex(obj => obj.id === id);
      newPlayers[foundIndex] = updatedPlayer;
      setPlayers(newPlayers);
      localStorage.setItem("players", JSON.stringify(newPlayers));
    }
  }

  const handleAdd = () => {
    setPlayerNum(playerNum + 1);
    const newPlayer = {
      id: players.length,
      name: `Player ${players.length}`,
      chips: buyin
    };
    const newPlayerArray = [...players, newPlayer]
    setPlayers(newPlayerArray);
    localStorage.setItem("players", JSON.stringify(newPlayerArray));
  }

  const handleRename = () => {
    setShowRename(!showRename);
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

        if (!showRename) {
          return(<PlayerInfo key={player.id} config = {config} setPot={handleSetPot} handleChipCount={(nVal) => handleChipCount(player.id, nVal)}/>);
        } else {
          return(<PlayerRename key={player.id} config = {config} />);
        }
      })}
      <button onClick={handleAdd}>Add Player</button>
      {!showRename ? <button onClick={handleRename}>Rename</button> : <button onClick={handleRename}>Done</button>}
    </div>
  )
}

export default Match;