import React from 'react'
import '../styles/tour-card.css'
import { Card, CardBody ,Badge} from 'reactstrap'
import { Link } from 'react-router-dom'
import calculateAvgRating from '../utils/avgRating'
import Slider from 'react-slick'
import { Image } from '../components/Image/Image'

const TourCard = ({tour}) => {
    const {_id,title,city,photo,price, featured,reviews}=tour;
const {totalRating,avgRating} = calculateAvgRating(reviews)
const settings = {
  dots:true,
  infinite: true,
  autoplay:true,
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
      <div className="tour__img" style={{width:'100%',height:'100%'}}>
        <Slider {...settings}>
          <div>
            <Image item={photo[0]}></Image>

          </div>
          <div>
            <Image item={photo[1]}></Image>
            
          </div>
          <div>
            <Image item={photo[2]}></Image>
            
          </div>
        </Slider>
        { featured && <Badge>Featured</Badge>}
      </div>
        <CardBody>
        <div className="card__top d-flex align-items-center justify-content-between">
            <span className='tour__location d-flex align-items-center gap-1'>
            <i class="ri-map-pin-line"></i> {city}
            </span>
            <span className='tour__rating d-flex align-items-center gap-1'>
            <i class="ri-star-fill"></i>{avgRating === 0 ? null :avgRating} 
            {totalRating === 0 ? ('Not rated'):(
              <span>({reviews.length})</span>
              )}
            
            </span>
        </div>
        <h5 className='tour__title'><Link to={`/tours/${_id}`}>{title}</Link></h5>

        <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
            <h5>${price} <span>/per person</span></h5>
            <button className="btn booking__btn">
                <Link to={`/tours/${_id}`}>Book Now</Link>
            </button>
        </div>
      </CardBody>
      </Card>
    
    </div>
  )
}

export default TourCard
