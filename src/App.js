import './App.css';
import { useState } from 'react';

const Button = (props) => {
  return (
      <div>
          <button></button>
      </div>
  );
}

const App = () => {
  const [players, setPlayers] = useState(1);

  return (
    <div>
      <h1>Welcome to Online Poker Chips!</h1>
      <p>How many players?</p>
      <p>{players} players</p>
      <Button handleClick = {() => setPlayers(players - 1)} text="-" />
      <Button handleClick = {() => setPlayers(players + 1)} text="+" />
    </div>

  );
}

export default App;
