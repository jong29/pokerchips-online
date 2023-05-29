import './App.css';
import { useState } from 'react';

const Button = (props) => {
  return (
      <button onClick={props.handleClick}>
        {props.text}
      </button>
  );
}

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

const App = () => {
  const [numPlayers, setNumPlayers] = useState(2);
  const [startMatch, setMatch] = useState(false);

  return (
    <div>
      <h1>Welcome to Online Poker Chips!</h1>
      <p>How many players?</p>
      <p>{numPlayers} players</p>
      <Button handleClick = {() => {
        if (numPlayers === 0){
          setNumPlayers(0)  
        } else {
          setNumPlayers(numPlayers - 1)} 
        }
      } text="-" />
      <Button handleClick = {() => setNumPlayers(numPlayers + 1)} text="+" />
      <Button handleClick = {() => setMatch(true)} text="OK" />
      <Match startMatch={startMatch} numPlayers={numPlayers} />
    </div>
  );
}

export default App;
