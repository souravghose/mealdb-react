import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import './Restaurant.css'
import { Link } from 'react-router-dom';
const Restaurant = ({restaurant}) => {
    const {id, name, image, menu} = restaurant;
    return (
        <Col key={id}>
          <Card>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title className='text-center'>{name}</Card.Title>
              <Card.Title></Card.Title>
              <Link to={`/menu/${id}`} state={menu}><Button className='w-100'>Menu</Button></Link>
            </Card.Body>
          </Card>
        </Col>
    );
};

export default Restaurant;