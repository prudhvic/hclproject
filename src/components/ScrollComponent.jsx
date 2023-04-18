import React from 'react'
import { AiFillStar } from 'react-icons/ai'

const ScrollComponent = ({ items, title }) => {
    let stars = (rating) => new Array(Math.floor(rating)).fill("_")
    console.log(items)
    return (
        <section className='near-grid'>
            <h2>{title}</h2>
            <div className='restaurants'>

                {
                    items?.content.map((item) => (

                        item?.cardPhoto.urlTemplate && (<div>
                            <h3>{item.title}</h3>
                            <img src={item.cardPhoto.urlTemplate?.replace("{width}", 300)} />

                            <div className='flex'>
                                <h3>rating:</h3>
                                <div>

                                    {
                                        stars(item.bubbleRating.rating)?.map((star) => (
                                            <AiFillStar fill='gold' />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>)
                    ))
                }
            </div>

        </section >
    )
}

export default ScrollComponent