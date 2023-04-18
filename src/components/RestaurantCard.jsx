import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const RestaurantCard = ({ resturant }) => {
    let stars = (rating) => new Array(Math.floor(rating)).fill("_")
    // if (resturant.heroImgUrl) {
    //     return
    // }
    return (

        <Link className='card' to={`/resturants/${resturant?.restaurantsId}`}>
            <img src={resturant?.heroImgUrl} />
            <h2>{resturant?.name}</h2>
            <div className='price'>

                <h3>price</h3>
                <p>{resturant?.priceTag}</p>
            </div>
            <div className='stars'>
                {
                    stars(3).map((star) => (
                        <AiFillStar fill='gold' />
                    ))
                }
            </div>
        </Link>

    )
}

export default RestaurantCard