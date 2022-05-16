import React, {Component}  from 'react';
import { Form, FormGroup, Card, CardBody,CardImg, CardHeader, Button, Input, Label, Row, Col} from 'reactstrap';
import { ARTLIST } from '../shared/artList';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function RenderCarousel(){

        return(
          <div className='col'>
            <Carousel autoPlay showArrows={true} infiniteLoop>
            {ARTLIST.map((artCard)=>{
                return(
                    <div key = {artCard.id}>
                        <h1>{artCard.title}</h1>
                        <img className = "carousel-image" src={artCard.image}/>
                    </div>
                )
            })}   
            </Carousel> 
          </div>
        );  
} 

class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            phoneNum: '',
            email: '',
            message: '',
            
        };
    }
    
    handleLogin(event){
        alert(`Name: ${this.name.value} Phone Number: ${this.phoneNum.value} email: ${this.email.value}`)
        event.preventDefault();
    }
   

    render(){

        return (
            <div className="container">
                <div className="row">
                    <div className="col mt-4">
                        <h1>Contact Us</h1>
                        <hr />
                    </div>
                </div>
                <div className = "row">
                    <div className= "col">
                        <div className = "row mb-0">
                            <Card className="mr-3">
                                <CardHeader>Contact Us</CardHeader>
                                <CardBody>
                                    <div className="row row-content align-items-center">
                                        <div className= "col">
                                    <Button className = "m-1"><i className="fa fa-instagram fa-lg"></i></Button>
                                    <Button className = "m-1"><i className="fa fa-linkedin fa-lg"></i></Button>
                                    <Button className = "m-1"><i className="fa fa-github fa-lg"></i></Button>
                                    </div>
                                        
                                        <div className="col">
                                            <a role="button" className="btn btn-link" href="tel:+12065551234"><i className="fa fa-phone" /> 1-206-555-1234</a><br />
                                            <a role="button" className="btn btn-link" href="mailto:fakeemail@fakeemail.co"><i className="fa fa-envelope-o" /> campsites@nucamp.co</a>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                    <div className="col mb-4 contact-box" >
                        <h3>Send us a Message!</h3>
                        <Form onSubmit={this.handleLogin} >
                            <FormGroup>
                                <Label>Name</Label>
                                <Input type="text" id="name" name="name" innerRef={input => this.name = input}/>
                            </FormGroup>
                            <FormGroup>
                                <Label>Telephone Number</Label>
                                <Input 
                                    type="text" 
                                    id="telephone" 
                                    name="telephone" 
                                    innerRef={input => this.phoneNum= input} 
                                    />
                            </FormGroup>
                            <FormGroup>
                                <Label>Email</Label>
                                <Input type="email" id="email" name="email" innerRef={input => this.email= input}/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="text">Your Message</Label>
                                <Input type="textarea" rows="5" id="text" name="text" innerRef={input => this.state.message= input}/>
                            </FormGroup>
                            
                            <Button type="submit" value="submit" color="primary">Submit</Button>
                        </Form>




                            {/* <Row className="form-group">
                                <Col md={{size: 4, offset: 2}}>
                                    <div className = "form-check">
                                        <Label check>
                                            <Control.checkbox
                                                model=".agree"
                                                name="agree"
                                                className="form-check-input"
                                            /> {' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <Control.select model=".contactType" name="contactType" className="form-control">
                                        <option>By Phone</option>
                                        <option>By Email</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="feedback" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea model=".feedback" id="feedback" name="feedback" 
                                        rows="12"
                                        className="form-control"
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </Row> */}
                    </div>
                </div>
                
            </div>
        );
    }  
}

export default Contact;