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
  if (props.startMatch) {
    return (
      <div>
        Match Begin!
      </div>
    )
  }
}

const App = () => {
  const [players, setPlayers] = useState(1);
  const [startMatch, setMatch] = useState(false);

  return (
    <div>
      <h1>Welcome to Online Poker Chips!</h1>
      <p>How many players?</p>
      <p>{players} players</p>
      <Button handleClick = {() => {
        if (players === 0){
          setPlayers(0)  
        } else {
          setPlayers(players - 1)} 
        }
      } text="-" />
      <Button handleClick = {() => setPlayers(players + 1)} text="+" />
      <Button handleClick = {() => setMatch(true)} text="OK" />
      <Match startMatch = {startMatch} />
    </div>
  );
}

export default App;
