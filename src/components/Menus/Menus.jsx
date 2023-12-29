import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Menudetails from '../MenuDetails/Menudetails';

import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
const Menus = () => {
    const menu = useLoaderData().menu;
    return (
        <div>
            <Container>
            <h3>Menu Details</h3>
            <Row xs={1} md={3} className="g-4 m-4">
            {menu.map(menuDetails => <Menudetails key={menuDetails.id} menuDetails={menuDetails}></Menudetails>)}
      
          
     
        </Row>
      </Container>
      
        </div>
    );
};

export default Menus;