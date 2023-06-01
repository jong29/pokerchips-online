import { useState } from "react";

const Match = (props) => {

  const { startMatch, players } = props;  

  if (startMatch) {
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