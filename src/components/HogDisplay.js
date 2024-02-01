import React, { useState } from "react";
import Hog from "./Hog";

function HogDisplay({ hogState, setHogState }) {




    return (
        <div className="HogDisplay">
        {/* // iterate through and pass down to Hog component to render each card.  And, destructure hogsArray? */}
			{hogState.map(hog=>(
                <Hog 
                key = { hog.name }
                hog = { hog }
                hogState = { hogState }
                setHogState = { setHogState }
                />
            ))}
		</div>
    )
}

export default HogDisplay;