
const NumPlayers = ({ handleStart, handleSetPlayers, numPlayers }) => {

    return(
        <div>
            <p>How many players?</p>
            <p>{numPlayers} players</p>
            <button onClick = {() => {
                if (numPlayers === 2){
                    handleSetPlayers(2)  
                } else {
                    handleSetPlayers(numPlayers - 1)} 
                }
            }>-</button>
            <button onClick = {() => handleSetPlayers(numPlayers + 1)}>+</button>
            <button onClick = {handleStart}>OK</button>
        </div>
    )
}

export default NumPlayers;