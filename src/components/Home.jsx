import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
const Home = ({ fetchLocationResults }) => {
    let [location, setLocation] = useState()
    let submitHandler = (e) => {
        e.preventDefault()
        console.log(location)
        fetchLocationResults(location)
    }
    return (
        <>
            <header>
                <h1>Travel Advisor</h1>
                <div className='nav-flex'>
                    <nav>
                        <ul>
                            <li><Link to="/">Hotels</Link></li>
                            <li><Link to="/resturant">Resturants</Link></li>
                        </ul>
                    </nav>
                    <form onSubmit={submitHandler}>
                        <div className='search-input'>
                            <FaSearch />
                            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)}
                                placeholder="Search Location"
                            />
                        </div>
                    </form>

                </div>

            </header>
            <main>
                {<Outlet />}
            </main>
        </>
    )
}

export default Home