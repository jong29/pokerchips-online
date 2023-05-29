const Match = (props) => {
  const players = props.players;

  if (props.startMatch) {

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