import { useState } from "react";

const SetChips = ({ handleBlind, handleBuyin}) => {

  const [blind, setBlind] = useState(10);
  const [buyin, setBuyin] = useState(1000);


  const onBlindChange = (event) => {
      setBlind(event.target.value);
    }
  
  const onBuyinChange = (event) => {
    setBuyin(event.target.value);
  }

  const handleSettings = () => {
    handleBlind(blind);
    handleBuyin(buyin);
  }

  return (
      <div>
        <div>
          Buy-in: 
          <input type="number" onChange={onBuyinChange} value="1000"></input>
        </div>
        <div>
          Blind: 
          <input type="number" onChange={onBlindChange} value="10"></input>
        </div>
        <button handleClick={handleSettings}>OK</button>
      </div>
    )
};

export default SetChips;