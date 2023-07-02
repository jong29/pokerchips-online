import { useState, useEffect } from "react";
import AddRemNums from "./AddRemNums.component";

const PlayerTake = (props) => {
    const { pot, chips, setPot, handleChipCount, setShowTake } = props;
    const [addRemove, setAddRemove] = useState("remove");
    const [toTake, setToTake] = useState(0);

    useEffect(() => {
        setToTake(pot);
    }, []);

    const handleTake = () => {
        setPot(pot - toTake);
        handleChipCount(parseInt(chips) + toTake);
        setToTake(pot - toTake);
        setShowTake(false);
    }

    const checkSetTake = (n) => {
        if (n <= pot && n >= 0) {
            setToTake(n);
        } else if (n > pot) {
            setToTake(pot);
        } else {
            setToTake(0);
        }
    }
    
    const handleRatio = (ratio) => {
        checkSetTake(Math.floor(parseInt(pot)*ratio));
    }

    return (
        <div>
            <span>{toTake} </span>
            <button onClick={handleTake}>Take</button>
            <div>
                <AddRemNums amount={toTake} handleAmount={checkSetTake} addRemove={addRemove} setAddRemove={setAddRemove} />
            </div>
            <div>
                <button onClick={() => handleRatio(1/2)}>Half(1/2)</button>
                <button onClick={() => handleRatio(1/3)}>Third(1/3)</button>
                <button onClick={() => handleRatio(1/4)}>Quarter(1/4)</button>
                <button onClick={() => handleRatio(1/5)}>Fifth(1/5)</button>
            </div>
        </div>
    )
}

export default PlayerTake;