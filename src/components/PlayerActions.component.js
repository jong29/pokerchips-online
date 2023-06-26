import { useState } from "react";

const PlayerActions = (props) => {
    const { blind, chips } = props;

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

    const handleAdd = () => {
        if (addRemove !== "add") {
            setAddRemove("add");
        }
    }

    const handleRemove = () => {
        if (addRemove !== "remove") {
            setAddRemove("remove");
        }
    }

    const handleBigBlind = () => {
        checkSetBet(parseInt(bet)+parseInt(blind));
    }

    const handleSmallBlind = () => {
        checkSetBet(parseInt(bet)+Math.floor(parseInt(blind)));
    }

    const handleClear = () => {
        checkSetBet(0);
    }
    
    const handleDollar = (amount) => {
        if (addRemove === "add") {
            checkSetBet(parseInt(bet)+amount);
        } else {
            checkSetBet(parseInt(bet)-amount);
        }
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
        // if (potChips === "pot") {
        //     checkSetBet(pot)
        // }
    }


    return(
        <div>
            <div>
                {bet} <button>bet!</button>
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
                <button onClick={handleAdd}>+ {addRemove === "add" ? "(selected)" : null}</button>
                <button onClick={handleRemove}>- {addRemove === "remove" ? "(selected)" : null}</button>
                <button onClick={() => handleDollar(1)}>$1</button>
                <button onClick={() => handleDollar(5)}>$5</button>
                <button onClick={() => handleDollar(25)}>$25</button>
                <button onClick={() => handleDollar(100)}>$100</button>
                <button onClick={handleClear}>Clear</button>
            </div>
        </div>
    )
};

export default PlayerActions;