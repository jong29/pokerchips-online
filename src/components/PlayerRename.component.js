import { useState } from "react";

const PlayerInfo = (props) => {
    const { config, setPot, handleChipCount } = props;
    const { name, chips, blind, pot } = config;

    const onChangeText = () => {
        
    }
    
    return (
        <div>
            <div>
                <input name="newName" placeholder={name} onChangeText={onChangeText} />
                | Chips: {chips}
                <button disabled>Bet</button>
                <button disabled>Take</button>
            </div>
        </div>
    )
};

export default PlayerInfo;