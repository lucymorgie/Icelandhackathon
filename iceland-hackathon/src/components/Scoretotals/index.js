import React from "react";



export default function  Scoretotals({scoretotals, deliveryscore}) {



    return (

    <div className="score">

        <p id="score">Final Score Total <span >{scoretotals + deliveryscore} </span>Points</p>
    </div>
    )
    }