import React from 'react';

const Card = ({children, title}) => {
    return (
        <div className="rounded overflow-hidden shadow-lg px-4">
            <h2 className="text-xl font-bold my-4">{title}</h2>
            {...children}
        </div>
    )
}

export default Card;