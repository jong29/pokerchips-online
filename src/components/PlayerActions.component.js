import { useState } from "react";

const PlayerActions = (props) => {

    const [bet, setBet] = useState(0);
    const [potChips, setPotChips] = useState("pot");
    const [addRemove, setAddRemove] = useState("add");

    const potClick = () => {
        return;
    }



    return(
        <div>
            <div>
                {bet} <button>bet!</button>
            </div>
            <div>
                <button >Pot {potChips === "pot" ? "(selected)" : null}</button>
                <button>Chips {potChips === "chips" ? "(selected)" : null}</button>
                <button>1/3</button>
                <button>1/2</button>
                <button>2/3</button>
                <button>All-In!</button>
            </div>
            <div>
                <button>+ {addRemove === "add" ? "(selected)" : null}</button>
                <button>- {addRemove === "remove" ? "(selected)" : null}</button>
                <button>$1</button>
                <button>$5</button>
                <button>$25</button>
                <button>$100</button>
                <button>Clear</button>
            </div>
        </div>
    )
};

export default PlayerActions;