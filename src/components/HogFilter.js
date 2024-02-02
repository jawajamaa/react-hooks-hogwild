import React, { useState } from "react";
import HogDisplay from "./HogDisplay";

function HogFilter({ hogs, hogState, setHogState }) {
const [isSorted, setIsSorted] = useState("");
const [isGreased, setIsGreased] = useState(false);
    

    function handleGreasedChange() {
        setIsGreased(!isGreased);
    }

    function handleCatChange(event) {
        setIsSorted(event.target.value);
    }


    const hogsToDisplay = hogs.filter((hog)=> {
        if (isGreased === false) {
            return true
        } else {
            return (hog.greased === true )
        }
    }).sort((a,b)=>{
        if (isSorted === "name") {
            a = a.name.toLowerCase();
             b = b.name.toLowerCase();
             console.log(a,b)
            if (a < b){
                return -1
            }
            if (a > b){
                return 1
            }
            return 0
        }
        if (isSorted === "weight") {
            a = a.weight
            b = b.weight
           if (a < b){
               return -1
           }
           if (a > b){
               return 1
           }
           return 0
        }
    })

    console.log(hogsToDisplay);


    return (
        <>
            <div>
                <div className="Filter">
                    <h3>Sort Hogs by Name or Weight</h3>
                    <select name = "filter" onChange = { handleCatChange }>
                        <option value = "All">Select a Category</option>
                        <option value = "name">Name</option>
                        <option value = "weight">Weight</option>
                    </select>
                    <h3>Filter Hogs out that are <i>Not</i> greased! </h3>
                    <input type = "checkbox" id = "checkbox" onChange = { handleGreasedChange }></input>
               </div> 
            </div>
            <div className="HogFilter">
                {/* {!isGreased ? initHogMap() : filterHogGrease() } */}
                {hogsToDisplay.map(hog=>(
                    <HogDisplay  
                    key = { hog.name }
                    hog = { hog }
                    hogState = { hogState }
                    setHogState = { setHogState }
                    />
                ))}
		    </div>
        </>
    )
}

export default HogFilter;