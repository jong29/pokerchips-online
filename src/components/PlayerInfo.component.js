import { useState } from "react";
import PlayerActions from "./PlayerActions.component";

const PlayerInfo = (props) => {
    const { name, chips, role } = props;

    const [ showActions, setShowActions ] = useState(false);
    
    const promptAction = () => {
        setShowActions(true);
    }

    return (
        <div>
            <div>
                {name}| Chips: {chips} | {role}
                <button onClick={promptAction}>Select</button>
            </div>
            {showActions ? <PlayerActions /> : null}
        </div>
    )
};

export default PlayerInfo;