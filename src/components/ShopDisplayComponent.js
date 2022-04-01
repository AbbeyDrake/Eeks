import React, {Component} from 'react';
import { Card, CardBody, Button, CardTitle, CardImg, CardImgOverlay, CardHeader, Row, Col, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { ARTLIST } from '../shared/artList'

class ArtShop extends Component {
    constructor(props) {
        super(props);
        this.state= {
            artList: ARTLIST
        };
    };

    render() {
        {
             
            const shopItem = this.state.artList.map(shopItem => {
                return (
                    <div className="col">
                        <Card style={{width: 20 + "rem"}}>
                            <CardImg
                            src={shopItem.image} alt={shopItem.name} >
                            </CardImg>
                            <CardImgOverlay>{shopItem.name}</CardImgOverlay>
                            <CardBody>{shopItem.description}</CardBody>
                               <CardBody> 
                                   <Button type="submit">
                                {shopItem.price}
                                </Button>
                            </CardBody>
                        </Card>
                    </div>
                );
            });
    
            return (
                <div className="container">
                    <div className="row">
                        {shopItem}
                    </div>
                </div>
            );
        } 
    }
}

export default ArtShop;
