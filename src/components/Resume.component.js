import { useState } from "react";
import StartScreen from "./StartScreen.component";


const Resume = () => {
    const [decided, setDecided] = useState(false);
    const [toResume, setToResume] = useState(false);

    const handleClick = (isYes) => {
        setDecided(true);
        if (isYes) setToResume(true);
    }

    if (!decided) {
        return (
            <div>
                <h3>Continue Previous Game?</h3>
                <div>
                  <button onClick={() => handleClick(true)}>yes</button>
                  <button onClick={() => handleClick(false)}>no</button>
                </div>
            </div>
        )
    } else {
        return(
            <div>
                {toResume ? <StartScreen resume={true} /> : <StartScreen resume={false} />}
            </div>
        )
    }

}

export default Resume;