import { useState } from "react";
import AddRemNums from "./AddRemNums.component";

const PlayerBet = (props) => {
    const { blind, chips, pot, setPot, handleChipCount, setShowBet } = props;

    const [bet, setBet] = useState(0);
    const [potChips, setPotChips] = useState("pot");
    const [addRemove, setAddRemove] = useState("add");

    const handlePot = () => {
        if (potChips !== "pot") {
            setPotChips("pot");
        }
    }

    const handleChips = () => {
        if (potChips !== "chips") {
            setPotChips("chips");
        }
    }

    const handleBigBlind = () => {
        checkSetBet(parseInt(bet)+parseInt(blind));
    }

    const handleSmallBlind = () => {
        checkSetBet(parseInt(bet)+Math.floor(parseInt(blind)/2));
    }

    const handleClear = () => {
        checkSetBet(0);
    }
    

    const checkSetBet = (n) => {
        if (n <= chips && n >= 0) {
            setBet(n);
        } else if (n < 0) {
            setBet(0);
        } else {
            setBet(chips);
        }
    }

    const handleAllIn = () => {
        checkSetBet(chips);
    }
    
    const handleRatio = (ratio) => {
        if (potChips === "pot") {
            checkSetBet(Math.floor(parseInt(pot)*ratio));
        } else {
            checkSetBet(Math.floor(parseInt(chips)*ratio));
        }
    }

    const handleBet = () => {
        setPot(parseInt(pot) + parseInt(bet));
        handleChipCount(parseInt(chips) - parseInt(bet));
        setBet(0);
        setShowBet(false);
    }


    return(
        <div>
            <div>
                {bet} <button onClick={handleBet}>bet!</button>
            </div>
            <div>
                <button onClick={handleBigBlind}>Big Blind</button>
                <button onClick={handleSmallBlind}>Small Blind</button>
            </div>
            <div>
                <button onClick={handlePot}>Pot {potChips === "pot" ? "(selected)" : null}</button>
                <button onClick={handleChips}>Chips {potChips === "chips" ? "(selected)" : null}</button>
                <button onClick={() => handleRatio(1/3)}>1/3</button>
                <button onClick={() => handleRatio(1/2)}>1/2</button>
                <button onClick={() => handleRatio(2/3)}>2/3</button>
                <button onClick={handleAllIn}>All-In!</button>
            </div>
            <div>
                <AddRemNums amount={bet} handleAmount={checkSetBet} addRemove={addRemove} setAddRemove={setAddRemove} />
                <button onClick={handleClear}>Clear</button>
            </div>
        </div>
    )
};

export default PlayerBet;