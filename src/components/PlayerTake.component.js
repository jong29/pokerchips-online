import { useState, useEffect } from "react";

const PlayerTake = (props) => {
    const { pot, chips, setPot, handleChipCount } = props;

    const [toTake, setToTake] = useState(0);

    useEffect(() => {
        setToTake(pot);
    });

    const handleTake = () => {
        setPot(pot - toTake);
        handleChipCount(parseInt(chips) + toTake);
        setToTake(pot - toTake);
    }

    return (
        <div>
            <span>{toTake} </span>
            <button onClick={handleTake}>Take</button>
        </div>
    )
}

export default PlayerTake;