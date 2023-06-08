import { useState } from "react";

const SetChips = ({ handleBlind, handleBuyin, handleShowSettings}) => {

  const [blind, setBlind] = useState("10");
  const [buyin, setBuyin] = useState("1000");


  const onBlindChange = (event) => {
      setBlind(event.target.value);
    }
  
  const onBuyinChange = (event) => {
    setBuyin(event.target.value);
  }

  const handleSettings = () => {
    handleBlind(blind);
    handleBuyin(buyin);
    handleShowSettings(false);
  }

  return (
      <div>
        <div>
          Buy-in: 
          <input type="number" onChange={onBuyinChange} value={buyin}></input>
        </div>
        <div>
          Blind: 
          <input type="number" onChange={onBlindChange} value={blind}></input>
        </div>
        <button onClick={handleSettings}>done</button>
      </div>
    )
};

export default SetChips;