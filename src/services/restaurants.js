import axios from 'axios'
// const api = "2da08fdb0e253646533d241423c90e16";
const api = 'd710754ce67200fb6fb9b5e26139f50e'

const get = async (chosenFood, coordinates, startingIndex) => {
    const response = await axios.get(`https://developers.zomato.com/api/v2.1/search?q=${chosenFood}&start=${startingIndex}&lat=${coordinates.latitude}&lon=${coordinates.longitude}&sort=real_distance&order=desc`,
    {headers: {"user-key": api}})
    return response.data.restaurants
}

export default { get }
