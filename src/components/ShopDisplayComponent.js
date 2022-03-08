import React, {Component} from 'react';
import { Card, CardBody, CardTitle, CardImg, CardImgOverlay, CardHeader, Row, Col, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { ARTSHOPLIST } from '../shared/artShopList'

class ArtShop extends Component {
    constructor(props) {
        super(props);
        this.state= {
            artShopList: ARTSHOPLIST
        };
    };

    render() {
        {
            const shopItem = this.state.artShopList.map(shopItem => {
                return (
                    <div className="col">
                        <Card style={{width: 20 + "rem"}}>
                            <CardImg
                            src={shopItem.image} alt={shopItem.name} >
                            </CardImg>
                            <CardImgOverlay>{shopItem.name}</CardImgOverlay>
                            <CardBody>{shopItem.description}</CardBody>
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