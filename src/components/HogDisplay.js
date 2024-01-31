import React, { useState } from "react";
import Hog from "./Hog";

function HogDisplay({ hogState, setHogState }) {

console.log(hogState);


    return (
        <div className="HogDisplay">
			{hogState.map(hog=>(
                <Hog 
                // iterate through and pass down to Hog component to render each card.  And, destructure hogsArray?
                />
            
            ))}
		</div>
    )
}

export default HogDisplay;