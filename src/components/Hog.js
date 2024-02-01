import React, { useState } from "react";
import HogMax from "./HogMax";

function Hog({ hog, hogState, setHogState }) {
const [isHogMaxOpen, setIsHogMaxOpen] = useState(false)
// change hogSelect [] to hogData? could be used for form input as well?
// const [hogSelect, setHogSelect] = useState({
//     name:"",
//     specialty:"",
//     greased:"",
//     weight:"",
//     "highest medal acheived":"",
//     image:""
// });


    console.log(hog);
    console.log(hogState);

    const handleClick = (name) => (
        toggleOverlay(name)
    )
    const toggleOverlay = (name) => {
        console.log(name);
        setIsHogMaxOpen(!isHogMaxOpen);

    };
    
    return (
        <div className = "Hog">
            <div className = "pigTile" background = "minBackgroundSneak" onClick = { handleClick }>
                <img src = { hog.image } className = "minPigTile"/>
		    	<h3 className = "pigTile h3">{ hog.name }</h3>
                <HogMax 
                hog = { hog }
                hogState = { hogState } 
                isOpen = { isHogMaxOpen } 
                onClose = { toggleOverlay } 
                />
		    </div>
        </div>
    )
}

export default Hog;