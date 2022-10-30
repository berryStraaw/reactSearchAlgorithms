import React from "react";
import '../../styles/Controlls.css'

const Controlls=(props)=>{
    const reset=props.resetFnc;

    return(
        <div className="Controlls"> 
            <h1> Description</h1>
            <p> Knight traveils uses a modified binary search tree to find the shortest path for a knight piece to take in order to reach a desired destination</p>
            <h2> Instructions</h2>
            <ol>
                <li> Step 1: click on the board to place down a knight piece</li>
                <li> Step 2: click on another spot to select an end destination</li>

                <li> Script will find the shortest path to the destination and display it</li>
            </ol>
            <h2>Controlls</h2>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default Controlls;