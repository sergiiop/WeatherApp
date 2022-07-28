import styled from 'styled-components'

const shadowColor = props => props.shadowColor || 'white'

export const CityContent = styled.div`
  display: flex;
  margin-top: 2rem;
  padding: 2rem 2rem 1.5rem;
  background-image: ${shadowColor};
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
  border-radius: 0.5rem;
  height: 150px;
  justify-content: space-between;
  @media screen and (max-width: 720px) {
    padding: 1rem 1rem 0.5rem;
    height: 115px;
  }
`

export const Temp = styled.span`
  font-weight: 600;
  font-size: 4rem;
  margin-bottom: 1rem;
  & > span {
    font-size: 4rem;
    font-weight: 700;
  }
  @media screen and (max-width: 720px) {
    font-size: 3rem;
    margin-bottom: 0.8rem;
    & > span {
      font-size: 3rem;
      font-weight: 700;
    }
  }
`

export const Humidity = styled.span``

export const Region = styled.span``

export const Rigth = styled.div`
  display: flex;
  flex-direction: column;
`

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  & > span {
    font-size: 1.2rem;
  }

  & > img {
    width: 100px;
  }

  @media screen and (max-width: 720px) {
    font-size: 3rem;
    & > span {
      font-size: 1rem;
    }
    & > img {
      width: 65px;
    }
  }
`
