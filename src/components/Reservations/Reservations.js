import React from "react";
import Card from "../Card/Card";
import "./Reservations.css"

const Reservations = ({cards}) => {
    const resyCards = cards.map((card)=> {
        return(
            <Card
                name= {card.name}
                date={card.date}
                time={card.time}
                number={card.number}
                key={card.id}
            />
        )
    })
    return <div className="resy-container">{resyCards}</div>
}

export default Reservations

