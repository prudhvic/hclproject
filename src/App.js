import { useEffect, useState } from 'react';
import { fetchRestaurants, getData, getHotels, getLocation } from './api';
import './App.css';
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HotelsPage from './pages/Hotels';
import HotelDetails from './pages/HotelDetails';
import Home from './components/Home';
import RestaurantPage from './pages/RestaurantPage';
import ResturantDetailPage from './pages/ResturantDetailPage';

function App() {
  let [resturantLoading, setResturantLoading] = useState(false)

  let [coordinates, setCoordinates] = useState({})
  let [resturants, setResturants] = useState([])
  let [hotelId, setHotelId] = useState()
  let [hotels, setHotels] = useState([])
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((coords) => {
      setCoordinates({ lat: coords.coords.latitude, long: coords.coords.longitude })
    })
  }, [])
  let fetchLocationResults = async (query) => {
    let locId;
    let data = await getData(query)
    console.log(data)
    if (data) {
      locId = data?.data[0].locationId
    }
    console.log(locId)
    setResturantLoading(true)
    let resturantsData = await fetchRestaurants(locId)
    setResturantLoading(false)
    let hoteslData = await getHotels(locId)
    console.log(hoteslData)
    if (hoteslData && resturantsData) {
      setHotels(hoteslData?.data)
      setResturants(resturantsData?.data)
    }
  }
  useEffect(() => {

    getLocation(coordinates).then((res) => {
      console.log(res.city)
      fetchLocationResults(res.city)
    })
  }, [])
  let router = createBrowserRouter(createRoutesFromElements(<Route path='/' element={<Home fetchLocationResults={fetchLocationResults} />}>
    <Route index element={<HotelsPage hotels={hotels} />} />
    <Route path='/hotels/:id' element={<HotelDetails />} />
    <Route path='/resturant' element={<RestaurantPage resturants={resturants} resturantLoading={resturantLoading} />} />
    <Route path='/resturants/:id' element={<ResturantDetailPage />} />
  </Route>))

  return (
    <RouterProvider router={router} />

  );
}

export default App;
