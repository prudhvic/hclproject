import React, { useEffect } from 'react'
import { AiFillStar } from 'react-icons/ai'
import ScrollComponent from './ScrollComponent'

const ListDetail = ({ hotel }) => {
    return (
        <div className='hotel-details'>
            <h1>{hotel?.title}</h1>
            <div className='content'>

                <div className='gallery'>
                    {
                        hotel?.photos?.map((photo) => (
                            <img src={photo?.urlTemplate.replace("{width}", 300)} />
                        ))
                    }
                </div>
                <p>{hotel?.about?.title || `lorem Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`}</p>
                <div className='tags'>
                    {
                        hotel?.about?.tags?.map(tag => (
                            <button>#{tag}</button>
                        ))
                    }

                </div>
                <div className='amenties'>
                    <h4>{hotel?.about?.content[1].title}</h4>
                    <div className='bars'>

                        {
                            hotel?.about?.content[1]?.content.map(amenity => (
                                <button>{amenity.title}</button>
                            ))
                        }
                    </div>

                </div>
            </div>
            <section className='location'>
                <h3>Location:</h3>
                <p>{hotel?.location?.address}</p>
            </section>
            <section>
                <div className='features'>

                    {hotel?.amenitiesScreen?.map((feature) => (
                        <div className='feature'>
                            <h5>{feature.title}</h5>
                            <div>

                                {feature?.content?.map(f => (<p>{f}</p>))}
                            </div>

                        </div>
                    ))}
                </div>
            </section>
            <>
                <ScrollComponent items={hotel?.restaurantsNearby} title={hotel?.restaurantsNearby?.sectionTitle} />
                <ScrollComponent items={hotel?.attractionsNearby} title={hotel?.attractionsNearby?.sectionTitle} />
            </>
            <section className='reviews-section'>
                <h4>Top Reviews</h4>
                <div className='reviews'>

                    {
                        hotel?.reviews?.content?.map(review => (
                            <div className='review'>
                                <h3>{review?.title}</h3>
                                <p>{review?.text}</p>
                            </div>
                        ))
                    }
                </div>

            </section>
        </div>
    )
}

export default ListDetail
