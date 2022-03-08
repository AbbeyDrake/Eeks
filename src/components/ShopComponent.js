import React from 'react';
import { Card, CardBody,CardImg, CardHeader, Row, Col} from 'reactstrap';
import { Link } from 'react-router-dom';
import ArtShop from './ShopDisplayComponent';



// make function RenderLocalShop HERE (similar to Directory). The Link will change the url path and display the localshopinfo for one shop


function ShopComponent(props) {
    console.log(props)
  
    return (
    <div>
        <div className="container m-3 my-5">
            
            <h1>Shop</h1>
            <Row>
                <Col className="col-sm-6 offset-sm-3">
                    
                    <p>Looking for unique, local plant shops and nurseries to grow your plant family? Denver is home to many plant havens where you can browse extensive collections, take classes and learn more about plant care, and connect with the community through events. </p>
                   
                </Col>
                <Col className="col mb-4">

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