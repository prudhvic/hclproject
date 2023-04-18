import React from 'react'
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { Link } from 'react-router-dom';
const List = ({ hotel }) => {

  let stars = new Array(Math.floor(hotel.bubbleRating.rating)).fill("_")

  return (
    <Link to={`/hotels/${hotel.id}`} className='card'>
      <img src={hotel.cardPhotos[0]?.sizes.urlTemplate.replace("{width}", 600)} alt={hotel.title} />
      <h2>{hotel.title}</h2>
      <div className='price'>
        <h3>price:</h3>

        <h3>{hotel.priceForDisplay}</h3>
      </div>
      <div className='stars'>
        {
          stars.map((star) => (
            <AiFillStar fill='gold' />
          ))
        }
      </div>
    </Link>
  )
}

export default List