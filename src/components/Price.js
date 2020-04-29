import React from 'react';

function Price(props) {
    return (
        <div>
            $<span>{props.price}</span>
        </div>
    )
}

export default Price
