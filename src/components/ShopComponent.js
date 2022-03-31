import React from 'react';
import { Card, CardBody,CardImg, CardHeader, Row, Col} from 'reactstrap';
import { Link } from 'react-router-dom';
import ArtShop from './ShopDisplayComponent';

function ShopComponent(props) {
    console.log(props)
  
    return (
    <div>
        <div className="container m-3 my-4">  
            <Row>
                <Col className="col-8 offset-sm-2 mb-3">
                <h1>Shop</h1>
                <p>Looking for unique, hand-made art by a local artist? Eek's style is a beautiful combination of creepy and elegant, and will enhance your collection. Contribute to the growth of this local artist by purchasing a hand-made piece. </p>
                   
                </Col>
               
            </Row>
            <Row>
                <ArtShop/>
            </Row>
           
        </div>
       
    </div>
  );
}

export default ShopComponent;