import axios from 'axios'

const apiKey = import.meta.env.VITE_API_KEY

const baseUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=`

export const getOneCity = async (city) => {
  const res = await axios.get(`${baseUrl}${city}&aqi=yes`)
  return res.data
}
