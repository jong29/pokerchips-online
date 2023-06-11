import { useState } from "react";

const Round = (props) => {
    const [pot, setPot] = useState(0);
    return (
        <div>Current Pot: {pot}</div>
    )
}

export default Round;