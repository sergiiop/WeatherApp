import axios from 'axios'

const baseUrl = 'http://api.weatherapi.com/v1/current.json?key=7135fb54f7d849828d100245222607&q='

export const getOneCity = async (city) => {
  const res = await axios.get(`${baseUrl}${city}&aqi=yes`)
  return res.data
}
