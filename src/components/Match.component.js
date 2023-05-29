const Match = (props) => {
  const [players, setPlayers] = useState([{id:1, name:'connor'}, {id:2, name:'mcgregor'}]);

  if (props.startMatch) {
    const numPlayers = props.numPlayers;
    const playerArray = []
    for (let i=0; i<numPlayers; i++) {
      const newPlayer = {
        id: players.length + 1,
        name: `Player ${i}`
      };
      playerArray.push(newPlayer);
    }
    setPlayers(playerArray);

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