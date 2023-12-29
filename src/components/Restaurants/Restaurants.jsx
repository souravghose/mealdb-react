import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Restaurant from '../Restaurant/Restaurant';
import './Restaurants.css'

import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
const Restaurants = () => {
    const restaurants = useLoaderData();
    // console.log(restaurants)
    return (
        <div className='restaurants'>
        <Container>
        <h3 className='m-3'>Restaurants</h3>
        <Row xs={1} md={3} className="g-4 m-4">
         {
            restaurants.map(restaurant => <Restaurant key={restaurant.id} restaurant={restaurant}></Restaurant>)
         }
        </Row>
        </Container>
        </div>
    );
};

export default Restaurants;