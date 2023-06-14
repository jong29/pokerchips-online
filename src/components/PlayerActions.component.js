import { useState } from "react";
import BetOptions from './BetOptions.component';

const PlayerActions = (props) => {

    const [showBet, setShowBet] = useState(false);

    const showBetOptions = () => {
        setShowBet(true);
    }

    return(
        <div>
            <button onClick={showBetOptions}>Bet</button>
            {showBet ? <BetOptions /> : null}
        </div>
    )
};

export default PlayerActions;