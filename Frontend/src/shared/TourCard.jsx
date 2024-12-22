import React from 'react'
import '../styles/tour-card.css'
import { Card, CardBody } from 'reactstrap'
import { Link } from 'react-router-dom'
import calculateAvgRating from '../utils/avgRating'
import { Image } from '../components/Image/Image'
import Slider from 'react-slick'

const TourCard = ({tour}) => {
  const {id,title,city,photo,price, featured, reviews}=tour;
  const {totalRating,avgRating} = calculateAvgRating(reviews)
  const settings = {
    dots:true,
    infinite: true,
    autoplay:false,
    speed: 1000,
    autoplaySpeed:2000,
    slidesToShow:1,
    arrows:false,
    responsive:[
        {
        breakpoint:992,
        settings:{
            slidesToShow:1,
            slidesToScroll:1,
            infinite: true,
            dots: true,
        },
        },
        {
        breakpoint:576,
        settings:{
            slidesToShow:1,
            slidesToScroll:1,
        }  ,
        },
    ],
};

  return (
    <div className='tour__card'>
      <Card>
        <div className="tour__img" style={{width:'100%',height:'150%'}}>
          <Slider {...settings}>
            <div>
              <Image item={photo} isFullNeed={false}></Image>
  
            </div>
            <div>
              <Image item={photo} isFullNeed={false}></Image>
              
            </div>
            <div>
              <Image item={photo} isFullNeed={false}></Image>
              
            </div>
            <div>
              <Image item={photo} isFullNeed={false}></Image>
              
            </div>
          </Slider>
          { featured && <span>Featured</span>}
        </div>
        <CardBody>
        <div className="card__top d-flex align-items-center justify-content-between">
            <span className='tour__location d-flex align-items-center gap-1'>
            <i className="ri-map-pin-line"></i> {city}
            </span>
            <span className='tour__rating d-flex align-items-center gap-1'>
            <i className="ri-star-fill"></i>{avgRating === 0 ? null :avgRating} 
            {totalRating === 0 ? ('Not rated'):(
              <span>({reviews.length})</span>
              )}
            
            </span>
        </div>
        <h5 className='tour__title'><Link to={`/tours/${id}`}>{title}</Link></h5>

        <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
            <h5>${price} <span>/per person</span></h5>
            <button className="btn booking__btn">
                <Link to={`/tours/${id}`}>Book Now</Link>
            </button>
        </div>
      </CardBody>
      </Card>
    
    </div>
  )
}

export default TourCard
