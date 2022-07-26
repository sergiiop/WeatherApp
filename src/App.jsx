import { useState } from 'react'
// import { getUserLocation } from './helpers'
import { getOneCity } from './services'
import './App.css'
import { City } from './components/City'

const App = () => {
  const [inputCity, setInputCity] = useState('')
  const [cities, setCities] = useState([])
  const [city, setCity] = useState(null)

  // useEffect(() => {
  //   getUserLocation()
  //     .then(lngLat => )
  // }, [])

  // useEffect(() => {
  //   const fetchCity = async () => {
  //     const result = await getOneCity('Monteria')
  //     setCity(result)
  //   }
  //   fetchCity()
  // }, [])

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
    try {
      const newCity = await getOneCity(inputCity)
      setCity(newCity)
      addCity(newCity)
      setInputCity('')
      // TODO: SetFulfilled
    } catch (error) {
      console.error(error.message)
    }
  }

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
          {city && (
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
