import React from 'react'
import { Link } from 'react-router-dom'

const ResturantDetail = ({ resturant }) => {
    console.log("Hello", resturant)
    return (
        <div className='resturant-detail'>
            <h2>{resturant.data.location.name}</h2>
            {/* <h3>{resturant?.data?.location?.photo.caption}</h3> */}
            <div className='hero-image'>

                <img src={resturant?.data?.location.photo?.images.original.url} />
                <div className='grid-flow'>

                    <p>{resturant?.data?.location.description}</p>
                    <div className='resturant-flex'>

                        <div className='cuisine'>
                            <h3>cuisine</h3>
                            <div className='bars' id='res-bars'>

                                {
                                    resturant?.data?.location?.cuisine.map((c) => (
                                        <button>{c.name}</button>
                                    ))
                                }
                            </div>
                        </div>
                        <div className='address'>
                            <h4>price:{resturant?.data?.location.price}</h4>
                            <address>location:{resturant?.data?.location.address}</address>
                            <p>Email:{resturant?.data?.location?.email}</p>
                            <p>Available: sun - sat/{resturant?.data?.location?.display_hours[0]?.times[0]}</p>
                        </div>
                    </div>
                    <div className='status'>
                        <button>{resturant?.data?.hours.openStatus}</button>
                    </div>
                    <a href={resturant.data.location.web_url} target="_blank" className='web-url'>{resturant?.data?.location.web_url} </a>
                </div>

            </div>


        </div>
    )
}

export default ResturantDetail