import React from "react";



export default function  Scoretotals({scoretotals, deliveryscore}) {



    return (

    <div className="score">

        <p>Score Total</p>
        <p>{scoretotals + deliveryscore} Points</p>
    </div>
    )
    }