import React from 'react';

const Card = ({ image, name }) => {
    return (
        <div className="card text-center">
            <img src={image} alt={name} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
            </div>
        </div>
    );
};

export default Card;
