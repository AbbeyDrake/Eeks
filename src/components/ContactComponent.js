import React, {Component}  from 'react';
import { Form, FormGroup, Card, CardBody,CardImg, CardHeader, Button, Input, Label, Row, Col} from 'reactstrap';
import { ARTLIST } from '../shared/artList';

class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            phoneNum: '',
            email: '',
            agree: false,
            contactType: 'By Phone',
            feedback: '',
            touched: {
                firstName: false,
                lastName: false,
                phoneNum: false,
                email: false
            }
        };
    }
    
   

    render(){

        return (
            <div className="container">
                <div className="row">
                    <div className="col mt-4">
                        <h2>Contact Us</h2>
                        <hr />
                    </div>
                </div>
                <div className = "row">
                    <div className= "col">
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
                    <div className="col mb-4 contact-box" >
                        <h3>Send us a Message!</h3>
                        <Form >
                            <FormGroup>
                                <Label htmlFor="username">Name</Label>
                                <Input type="text" id="name" name="name" innerRef={input => this.name = input}/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="telephone">Telephone Number</Label>
                                <Input type="telephone" id="telephone" name="telephone" innerRef={input => this.telephone= input}/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="email">Email</Label>
                                <Input type="email" id="email" name="email" innerRef={input => this.email= input}/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="text">Your Message</Label>
                                <Input type="textarea" rows="5" id="text" name="text" innerRef={input => this.message= input}/>
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