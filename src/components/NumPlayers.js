import Button from './Button.component'

const NumPlayers = ({ handleStart, handleSetPlayers, numPlayers }) => {

    return(
        <div>
            <p>How many players?</p>
            <p>{numPlayers} players</p>
            <Button handleClick = {() => {
                if (numPlayers === 2){
                    handleSetPlayers(2)  
                } else {
                    handleSetPlayers(numPlayers - 1)} 
                }
            } text="-" />
            <Button handleClick = {() => handleSetPlayers(numPlayers + 1)} text="+" />
            <Button handleClick = {handleStart} text="OK" />
        </div>
    )
}

export default NumPlayers;