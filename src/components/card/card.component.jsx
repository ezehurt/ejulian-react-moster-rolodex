import React from 'react';
import './card.styles.css';

export const Card = props => {
    console.log(props)
    return (
        <div className="card-container">
            <img alt={props.monster.id} src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}></img>
            <h1>{props.monster.name}</h1>
            <h2>{props.monster.email}</h2>
        </div>
    )
}