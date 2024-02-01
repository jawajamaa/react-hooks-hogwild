import React, { useState } from "react";

function Hog({ name, image }) {

    console.log(name, image);

    return (
        <div className = "pigTile">
            <img src = { image } className = "minPigTile"/>
			<h3 className = "pigTile h3" name = { name }>{ name }</h3>
		</div>
    )
}

export default Hog;