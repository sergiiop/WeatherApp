import axios from 'axios'

const baseUrl = import.meta.env.VITE_FETCH_URL

export const getOneCity = async (city) => {
  const res = await axios.get(`${baseUrl}${city}&aqi=yes`)
  return res.data
}
