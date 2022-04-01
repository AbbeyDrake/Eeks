import React, { Component }  from 'react';
import {Card, CardImg, CardTitle} from 'reactstrap';
import { ARTLIST } from '../shared/artList';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


function RenderCarousel({content}){

        return(
          <div className='col'>
            <Carousel autoPlay showArrows={true} infiniteLoop>
            {content.map((artCard)=>{
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
  const featuredArt = ARTLIST.filter(
    (item) => item.featured === true
  );
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
                <h2>Featured New Work</h2>
                <RenderCarousel content = {featuredArt}></RenderCarousel>
              </div>
          </div>
      </div>

    <hr></hr>
  </div>
  );
}


export default HomeComponent;