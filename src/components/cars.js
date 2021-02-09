import React from 'react';
import '../App.css';

const Cars = ({model, year, img}) => {
    return (
        <div className="cars">
            <h1>{model}</h1>
            <h4>{year}</h4>
            <img src={img} alt="img"/>
        </div>
    )
};

export default Cars;
