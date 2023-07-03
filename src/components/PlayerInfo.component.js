import { useState } from "react";
import PlayerBet from "./PlayerBet.component";
import PlayerTake from "./PlayerTake.component";

const PlayerInfo = (props) => {
    const { config, setPot, handleChipCount } = props;
    const { name, chips, blind, pot } = config;

    const [ showBet, setShowBet ] = useState(false);
    const [ showTake, setShowTake ] = useState(false);
    
    const handleBet = () => {
        setShowBet(!showBet);
        if (showTake) setShowTake(false);
    }

    const handleTake = () => {
        setShowTake(!showTake);
        if (showBet) setShowBet(false);
    }

    return (
        <div>
            <div>
                {name}| Chips: {chips}
                <button onClick={handleBet}>Bet</button>
                <button onClick={handleTake}>Take</button>
            </div>
            {showBet ? <PlayerBet blind={blind} chips={chips} pot={pot} setPot={setPot} handleChipCount={handleChipCount} setShowBet={setShowBet}/> : null}
            {showTake ? <PlayerTake pot={pot} chips={chips} setPot={setPot} handleChipCount={handleChipCount} setShowTake={setShowTake} /> : null}
        </div>
    )
};

export default PlayerInfo;