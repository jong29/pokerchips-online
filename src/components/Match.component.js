import { useState, useEffect } from "react";
import Round from './Round.component';
import PlayerInfo  from "./PlayerInfo.component";

const Match = (props) => {
  const { players, initialDealer, blind, buyin } = props;
  const numPlayers = players.length;
  const [dealer, setDealer] = useState(-1);
  const [pot, setPot] = useState(0);
  const [chips, setChips] = useState([]);
  const [playing, setPlaying] = useState([]);

  
  useEffect(() => {
    setDealer(initialDealer);
    setChips(Array(players.length).fill(buyin));
    setPlaying(Array(players.length).fill(true));
    // setPlaying([true, true, false]);
  }, []);

  const handleChipCount = (id, nVal) => {
    const modChips = [...chips]
    modChips[id] = nVal;
    setChips(modChips);
  }
  
  const getRole = (id) => {
    const nid = id;
    if (numPlayers < 3) {
      if (nid === dealer) return "Dealer/Big-Blind";
      return "Small Blind";
    }

    if (nid === dealer) return "Dealer";
    if (nid === (dealer+1)%numPlayers) return "Small-Blind";
    if (nid === (dealer+2)%numPlayers) return "Big-Blind";
  }
  
  return (
    <div>
      <h3 className="round-info">Big-Blind: {blind} | Small-Blind: {Math.floor(blind/2)}</h3>
  
      <Round pot={pot}/>
      {players.map((player) => {
        return(<PlayerInfo key={player.id} name={player.name} chips={chips[player.id]} role={getRole(player.id)} blind={blind} pot={pot} setPot={setPot} handleChipCount={(nVal) => handleChipCount(player.id, nVal)}/>)
      })}
    </div>
  )
}

export default Match;