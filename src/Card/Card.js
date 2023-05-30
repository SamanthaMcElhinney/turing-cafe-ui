import React from "react";
import './Card.css'

const Card = ({id, name, date, time, number}) => {
    return(
        <div className="ind-card">
            <h2>{name}</h2>
            <p>Date: {date}</p>
            <p>Time: {time}</p>
            <p>Number:{number}</p>
        </div>
    )
}

export default Card