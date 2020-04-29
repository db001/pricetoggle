import React from 'react';
import Price from './Price';
import Button from './Button'

function Card(props) {
    const promotedClass = props.promoted ? "promoted" : ""
    return (
        <li className={`card ${promotedClass}`}>
            <h4>{props.name}</h4>
            <Price price={props.price} />
            <ul>
                <li>{props.storage} Storage</li>
                <li>{props.maxUsers} {props.maxUsers > 1 ? 'Users' : 'User'} Allowed</li>
                <li>Send up to {props.sendLimit}</li>
            </ul>
            <Button />
        </li>
    )
}

export default Card

