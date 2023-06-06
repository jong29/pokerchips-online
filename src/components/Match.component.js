import { useState, useEffect } from "react";

const Match = (props) => {
  const { players, initialDealer } = props;
  const numPlayers = players.length;
  const [role, setRole] = useState(Array(numPlayers).fill(0));
  
  useEffect(() => {
    setRole(role.map((value, i) => {
      return i === initialDealer ? 0 : 1
    }));
  }, []);
  
  console.log("🚀 ~ file: Match.component.js:7 ~ Match ~ role:", role)
  console.log("dealer" + initialDealer);
  
  return (
    <div>
      {players.map(player => 
        <div key={player.id}>{player.name}</div>
      )}
    </div>
  )
}

export default Match;