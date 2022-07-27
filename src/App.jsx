import { useEffect, useState } from 'react'
// import { getUserLocation } from './helpers'
import { getOneCity } from './services'
import './App.css'
import { City } from './components/City'
import { getUserLocation } from './helpers/getUserLocation'
import { Loader } from './components/Loader'

const App = () => {
  const [inputCity, setInputCity] = useState('')
  const [userLocation, setUserLocation] = useState(null)
  const [cities, setCities] = useState([])
  const [city, setCity] = useState(null)
  const [fetching, setFetching] = useState({
    loading: '',
    error: null
  })
  console.log('🚀 ~ file: App.jsx ~ line 13 ~ App ~ city', city)

  const fetchCity = async (city) => {
    setFetching({
      loading: 'success',
      error: null
    })
    try {
      const newCity = await getOneCity(city)
      setCity(newCity)
      addCity(newCity)
      setFetching({
        loading: 'success',
        error: null
      })
    } catch (error) {
      setFetching({
        loading: 'rejected',
        error: error.message
      })
    }
  }

  useEffect(() => {
    getUserLocation()
      .then(lngLat => {
        const currentCity = lngLat.reverse().join().trim()
        setUserLocation(currentCity)
      })
  }, [])

  useEffect(() => {
    if (userLocation !== null) {
      fetchCity(userLocation)
    }
  }, [userLocation])

  const addCity = (city) => {
    if (cities.length >= 2 && (city.location.name === cities[0].location.name)) return
    if (cities.length >= 1 && (cities.some((el) => el.location.name === city.location.name))) {
      const newCities = cities.filter(el => el.location.name !== city.location.name)
      setCities([city, ...newCities])
      return
    }
    if (cities.length >= 6) {
      const newCities = cities.slice(0, 5)
      console.log(newCities)
      setCities([city, ...newCities])
      return
    }
    setCities([city, ...cities])
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    // TODO: SetLoading
    fetchCity(inputCity)
    setInputCity('')
  }

  console.log(fetching.loading)

  return (
    <div className='App'>
      <div className='App-container'>
        <div className='title-container'>
          <h1>
            Weather
          </h1>
        </div>
        <div className='form-container'>
          <form onSubmit={handleSubmit}>
            <input className='input-text' type='text' value={inputCity} onChange={({ target }) => setInputCity(target.value)} placeholder='Search by a city' />
          </form>
        </div>
        <div className='city-container'>
          {fetching.loading === 'pending' && (
            <div className='loader-container'>
              <Loader />
            </div>
          )}
          {fetching.loading === 'rejected' && (
            <h1>Error</h1>
          )}
          {fetching.loading === 'success' && city && (
            <City
              conditionText={city.current.condition.text}
              isDay={city.current.is_day}
              tempC={city.current.temp_c}
              humidity={city.current.humidity}
              country={city.location.country}
              name={city.location.name}
              icon={city.current.condition.icon}
            />
          )}
        </div>
        <section className='second-section'>
          <h1>Ultimas Busquedas</h1>
          <div className='cities-container'>
            {cities.map((city, index) => {
              return (
                <City
                  key={index}
                  conditionText={city.current.condition.text}
                  isDay={city.current.is_day}
                  tempC={city.current.temp_c}
                  humidity={city.current.humidity}
                  country={city.location.country}
                  name={city.location.name}
                  icon={city.current.condition.icon}
                />
              )
            })}
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
