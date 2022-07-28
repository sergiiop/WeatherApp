import { backGroundColor, backGroundsCitys } from '../../utils/backGround'
import { CityContent, Humidity, Left, Region, Rigth, Temp } from './City.styled'

const City = ({ conditionText, isDay, tempC, humidity, country, name, icon }) => {
  return (
    <CityContent shadowColor={backGroundsCitys[backGroundColor(conditionText, isDay)]}>
      <Rigth>
        <Temp>{tempC} <span>°</span></Temp>
        <Humidity>H: {humidity}</Humidity>
        <Region>{name}, <br />{country}</Region>
      </Rigth>
      <Left>
        <img className='condition-icon' src={icon} />
        <span className='city-condition'>{conditionText}</span>
      </Left>
    </CityContent>
  )
}

export { City }
