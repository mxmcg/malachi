import React, { Component } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router';

export default class FeaturedImageSlideshow extends Component {

  constructor(props) {
    super(props);

  }

  renderImages() {
    const loadedImages = this.props.componentContent.images;
    const cdnImageBase = this.props.cdnImageBase;
    const Imageelements = [];
    if (!loadedImages[0]) {
      return (
        <div className="featuredImageSlide" >
            <img className="image" src={cdnImageBase + loadedImages[0].src}></img>
        </div>
      );
    } else {
      loadedImages.forEach((images, index) => {
        Imageelements.push(
          <div className="featuredImageSlide" style={{backgroundImage: 'url(' + cdnImageBase + images.src + ')'}} key={index}>
          </div>  
        )
      }); 
    }
    return Imageelements;
  }


  render() {

    const settings = {
      dots: true,
      infinite: true,
      centerMode: true,
      slidesToShow: 1,
      arrows: true,
      responsive: [
         {
           breakpoint: 768,
           settings: {
             arrows: true,
             slidesToShow: 1,
             centerMode: true
           }
         },
         {
           breakpoint: 480,
           settings: {
             arrows: true,
             slidesToShow: 1,
             centerMode: true
           }
         }
       ]
    };

    return (
      <div className="featuredImageSlideshow" >
        <h2>Events</h2>
        <h6>westward cold brew</h6>
        <Slider {...settings}>
            { this.renderImages() }  
        </Slider>
      </div>
    );
  }
}
