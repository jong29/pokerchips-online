import { useState } from "react";
import PlayerActions from "./PlayerActions.component";

const PlayerInfo = (props) => {
    const { config, setPot, handleChipCount } = props;
    const { name, chips, role, blind, pot } = config;

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
            {showActions ? <PlayerActions blind={blind} chips={chips} pot={pot} setPot={setPot} handleChipCount={handleChipCount}/> : null}
        </div>
    )
};

export default PlayerInfo;