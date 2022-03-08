import React, { Component }  from 'react';
import {Card, CardImg, CardTitle} from 'reactstrap';
import { ARTLIST } from '../shared/artList';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function RenderCarousel(){

        return(
          <div className='col-sm-8 offset-2'>
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

function HomeComponent() {
  return (
  <div>
     <div className="container">
          <div className="row">
              <div className="col-sm-8 offset-2">
                  <h1>Elizabeth Eaton.</h1>
                  <p>Short Bio Here
                  </p>
                  
              </div>
          </div>
      </div>

    <hr></hr>

     
      <div className="container">
        <div className="row">
            <RenderCarousel></RenderCarousel>
        </div>
      </div>
  </div>
  );
}


export default HomeComponent;