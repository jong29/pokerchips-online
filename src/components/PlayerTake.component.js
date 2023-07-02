import { useState, useEffect } from "react";

const PlayerTake = (props) => {

    const [toTake, setToTake] = useState("0");

    useEffect(() => {
        setToTake(props.pot);
    });

    return (
        <div>
            <span>{toTake} </span>
            <button>Take</button>
        </div>
    )
}

export default PlayerTake;