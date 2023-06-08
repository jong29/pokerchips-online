import { useState, useEffect } from "react";

const Match = (props) => {
  const { players, initialDealer } = props;
  const numPlayers = players.length;
  const [dealer, setDealer] = useState(-1);
  
  useEffect(() => {
    setDealer(initialDealer);
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
      {players.map((player, index) => 
        <div key={player.id}>|{player.name}| {getRole(player.id)}</div>
      )}
    </div>
  )
}

export default Match;