import React, { useState } from "react";

function HogMax({ hog, isOpen, onClose }) {


    return (
        <>
            {isOpen ? (
                <div className = "overlay">
                    <div className = "overlay-background" onClick = { onClose }>
                        <div className = "overlay-container">
                            <div className = "overlay-controls">
                                <button className = "overlay-close" type = "button" onClick = { onClose }></button>            
                            </div>
                        <h3>{ hog.name }</h3>  
                        <img src = { `${hog.image}` }></img>
                        <p>My specialty is:  { hog.specialty }</p>
                        <p>{ hog.name }  weighs in at { hog.weight } pounds!</p>
                        <p>My hightest medal I have achieved is a { hog["highest medal achieved"]} medal</p>  
                        </div>
                    </div>      
                </div>    
                ): null
            }
        </>    
    )
}

export default HogMax;