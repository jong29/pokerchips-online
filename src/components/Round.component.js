import { useState } from "react";

const Round = (props) => {
    const [pot, setPot] = useState(0);
    const selectWinners = () => {
        // maybe a checkbox form for selection
        // later make it so that same button is used for betting
        return;
    };

    return (
        <div>
            <h2>Current Pot: {pot}</h2>
            <button onClick={selectWinners}>End Round</button>
        </div>
    );
};

export default Round;