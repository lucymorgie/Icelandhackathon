import React from "react";



export default function  Deliveryoptions({setdeliveryscore}) {

let deliveryOptions =[{name:"Bike",score:4},{name:"Van",score:0,checked:true},{name:"Electric Van",score:3}, {name:"Husky",score:3} ]
    

    return (


    deliveryOptions.map((deliveryOption) => {
    return (
        <div className="deliveryoption">
            <p>{deliveryOption.name}</p>
            <p>{deliveryOption.score}</p>
            <input type="radio" value={deliveryOption.score} defaultChecked={deliveryOption.checked} name="deliveryoption" onChange={()=>setdeliveryscore(deliveryOption.score)}/>
        </div>
        
    )

    })
    
    )
}