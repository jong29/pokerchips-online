import { useState, useEffect } from "react";
import ARNums from "./ARNums.component";

const PlayerTake = (props) => {
    const { pot, chips, setPot, handleChipCount } = props;
    const [addRemove, setAddRemove] = useState("remove");
    const [toTake, setToTake] = useState(0);

    useEffect(() => {
        setToTake(pot);
    }, []);

    const handleTake = () => {
        setPot(pot - toTake);
        handleChipCount(parseInt(chips) + toTake);
        setToTake(pot - toTake);
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

    return (
        <div>
            <span>{toTake} </span>
            <button onClick={handleTake}>Take</button>
            <div>
                <ARNums amount={toTake} handleAmount={checkSetTake} addRemove={addRemove} setAddRemove={setAddRemove} />
            </div>
        </div>
    )
}

export default PlayerTake;