import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
const Menudetails = ({menuDetails}) => {
    const {name, id, price} = menuDetails;
    return (
        <div>
        <Col key={id}>
          <Card>
            <Card.Body>
              <Card.Title className='text-center'>{name}</Card.Title>
              <Card.Title className='text-center'>{price}</Card.Title>
              <Link to={`/order}`}><Button variant="success" className='w-100'>Order</Button></Link>
            </Card.Body>
          </Card>
        </Col>

        </div>
    );
};

export default Menudetails;