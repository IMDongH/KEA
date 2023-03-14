import React from 'react'

import Car from './Car'

function Garage() {
    const cars = [
        { id: 1, brand: 'Ford', price: 50000, design: 'graceful design' }, 
        { id: 2, brand: 'BMW', price: 55000, design: 'high level' },
        { id: 3, brand: 'Audi', price: 40000, design: 'popular car' }
    ];

    return (
        <div align="left">
            <h1>Car List</h1>
            
            <h2>{cars.map((car) => <Car key = {cars.id} data = {car} />)} </h2>
        </div >
    )
}

export default Garage;
