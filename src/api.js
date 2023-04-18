const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
    }
};
console.log(options)
export let getData = async (query) => {
    console.log(query)
    let res = await fetch(`https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchLocation?query=${query}`, options)

    let data = await res.json()
    console.log(data)
    return data
}
export let getLocation = async ({ lat, long }) => {

    let res = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`, options)

    let data = await res.json()
    return data
}
export let getHotels = async (geoId, checkIn = "2023-04-23", checkOut = "2023-04-25") => {

    let res = await fetch(`https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchHotels?geoId=${geoId}&checkIn=${checkIn}&checkOut=${checkOut}&pageNumber=1&currencyCode=USD`, options)
    let data = await res.json()
    console.log(data)
    return data
}
export let fetchHotelById = async (id) => {
    console.log(id)
    let res = await fetch(`https://tripadvisor16.p.rapidapi.com/api/v1/hotels/getHotelDetails?id=${id}&checkIn=2023-03-17&checkOut=2023-03-25&currency=USD`, options)
    let data = await res.json()
    return data
}
export let fetchRestaurantsBySearch = async (query) => {

    let res = await fetch(`https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchLocation?query=${query}`, options)
    let data = await res.json()
    return data
}
export let fetchRestaurants = async (locId = "297586") => {
    let res = await fetch(`https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants?locationId=${locId}`, options)
    let data = await res.json()
    console.log(data)
    return data
}
export let fetchRestaurantById = async (id) => {
    console.log("Hi")
    let res = await fetch(`https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/getRestaurantDetails?restaurantsId=${id}&currencyCode=USD`, options)
    let data = await res.json()
    return data
}