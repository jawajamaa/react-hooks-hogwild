import React, { useState } from "react";
import Hog from "./Hog";

function HogDisplay({ hog, hogState, setHogState }) {




    return (
        <div className="HogDisplay">
            <Hog
                hog = { hog }
                hogState = { hogState }
                setHogState = { setHogState }
            />
		</div>
    )
}

export default HogDisplay;