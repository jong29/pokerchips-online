import { useState, useEffect } from "react";

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
  }, []);
  
  const getRole = (id) => {
    const nid = id-1;
    if (numPlayers < 3) {
      if (nid === dealer) return "Dealer/Big-Blind";
      return "Small Blind";
    }

    if (nid === dealer) return "Dealer";
    if (nid === (dealer+1)%numPlayers) return "Small-Blind"
    if (nid === (dealer+2)%numPlayers) return "Big-Blind"
  }
  
  return (
    <div>
      <h3 className="round-info">Big-Blind: {blind} | Small-Blind: {Math.floor(blind/2)}</h3>
      <div>Current Pot: {pot}</div>
      {players.map((player, index) => 
        <div key={player.id}>|{player.name}| {getRole(player.id)}| Chips: {chips[index]}</div>
      )}
    </div>
  )
}

export default Match;