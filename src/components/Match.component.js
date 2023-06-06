import { useState, useEffect } from "react";

const Match = (props) => {
  const { players, initialDealer } = props;
  const numPlayers = players.length;
  const [dealer, setDealer] = useState(-1);
  
  useEffect(() => {
    setDealer(initialDealer);
  }, []);
  
  console.log("dealer" + dealer);

  const getRole = (id) => {
    if (numPlayers < 3) {
      if (id === dealer) return "Dealer | Big Blind";
      return "Small Blind";
    }

    if (id === dealer) return "Dealer";
    if (id === (dealer+1)%numPlayers) return "Small Blind"
    if (id === (dealer+2)%numPlayers) return "Big Blind"
  }
  
  return (
    <div>
      {players.map((player, index) => 
        <div key={player.id}>{player.name} {getRole(player.id)}</div>
      )}
    </div>
  )
}

export default Match;