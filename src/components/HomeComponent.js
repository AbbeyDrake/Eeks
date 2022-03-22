import React, { Component }  from 'react';
import {Card, CardImg, CardTitle} from 'reactstrap';
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

function HomeComponent() {
  return (
  <div>
     <div className="container mt-3">
          <div className="row">
              <div className="col">
                  <h1>Elizabeth Eaton.</h1>
                  <p>LOREM IPSUM BIO TEXT GOES HERE
                  </p> 
              </div>
              <div className= "col">
                <RenderCarousel></RenderCarousel>
              </div>
          </div>
      </div>

    <hr></hr>
  </div>
  );
}


export default HomeComponent;