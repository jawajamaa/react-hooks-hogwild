import React, { useState } from "react";
import Hog from "./Hog";

function HogDisplay({ hogState, setHogState }) {




    return (
        <div className="HogDisplay">
        {/* // iterate through and pass down to Hog component to render each card.  And, destructure hogsArray? */}
			{hogState.map(hog=>(
                <Hog 
                key = { hog.name }
                name = { hog.name }
                image = { hog.image }
                />
            ))}
		</div>
    )
}

export default HogDisplay;