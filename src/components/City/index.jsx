import { backGroundColor, backGroundsCitys } from '../../utils/backGround'
import { CityContent } from './City.styled'

const City = ({ conditionText, isDay, tempC, humidity, country, name, icon }) => {
  return (
    <CityContent shadowColor={backGroundsCitys[backGroundColor(conditionText, isDay)]}>
      <span className='city-temp'>{tempC} <span className='grade'>°</span></span>
      <span className='city-humidity'>H: {humidity}</span>
      <span className='city-region'>{name}, <br />{country}</span>
      <div className='city-conditions'>
        <img className='condition-icon' src={icon} />
        <span className='city-condition'>{conditionText}</span>
      </div>
    </CityContent>
  )
}

export { City }
