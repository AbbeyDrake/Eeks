import React, { Component }  from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';
import { HOMEIMAGESLIST } from './HomeImagesList';
import { HOMECARDSLIST } from './HomeCardsList';

function RenderCard(){

      const homeCard = HOMECARDSLIST.map(homeCard => {
        return(
                <Card>
                    <h2>{homeCard.title}</h2>
                    <CardImg src={homeCard.image} alt = {homeCard.name}/>
                    <CardBody>
                      {homeCard.description}
                    </CardBody>
                </Card>  
        );  
      })
      
  return(
      <div className="col-sm-5 m-2 p-3">
        {homeCard}
       </div>
    );
} 

function HomeComponent() {
  return (
  <div>
     <div className="container">
          <div className="row">
              <div className="col-sm-8 offset-2">
                  <h1>Plant of the Day</h1>
                  <p>Planty, invites Plant Lovers around the world to experience the ultimate Planty experience. Join us as we share our love for all things house plants and sustainability! The Plant of the Day, is a seven day series of your favorite plants and all their care needs. Here at Planty, we believe that plants add value to our world in more ways that we know. Plants clean our air, brightening our mood, and uplifting any room or environment. They also help cultivate sustainable communities worldwide! When you live life the Planty way, you can't go wrong.
                  </p>
                  <h3>Adorn your Planty Space today!</h3>
              </div>
          </div>
      </div>

    <hr></hr>

      <div className='container'>
        <div className='row'>
          <div className='col-sm-8 offset-2'>
              <Carousel autoPlay showArrows={true} infiniteLoop>
                {HOMEIMAGESLIST.map((homeimage)=>{
                    return(
                            <div key = {homeimage.id}>
                                <h1>{homeimage.title}</h1>
                                <img className = "carousel-image" src={homeimage.image}/>
                            </div>
                      
                    )
                })}   
            </Carousel>
            <hr></hr>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
            <RenderCard></RenderCard>
        </div>
      </div>
  </div>
  );
}


export default HomeComponent;