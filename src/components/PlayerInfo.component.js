import { useState } from "react";
import PlayerActions from "./PlayerActions.component";

const PlayerInfo = (props) => {
    const { name, chips, role, blind } = props;

    const [ showActions, setShowActions ] = useState(false);
    
    const promptAction = () => {
        if (showActions) {
            setShowActions(false);
        } else {
            setShowActions(true);
        }
    }

    return (
        <div>
            <div>
                {name}| Chips: {chips} | {role}
                <button onClick={promptAction}>Select</button>
            </div>
            {showActions ? <PlayerActions blind={blind} chips={cihps}/> : null}
        </div>
    )
};

export default PlayerInfo;