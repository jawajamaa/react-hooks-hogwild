import React, { useState } from "react";
import HogDisplay from "./HogDisplay";

function HogFilter({ hogState, setHogState }) {



    return (
        <div className="HogFilter">
			<HogDisplay 
                hogState = { hogState }
                setHogState = { setHogState }
            />
		</div>

    )
}

export default HogFilter;