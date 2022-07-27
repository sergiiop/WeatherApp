import styled from 'styled-components'

const shadowColor = props => props.shadowColor || 'white'

export const CityContent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 2rem;
  width: 350px;
  padding: 2rem 2rem 1.5rem;
  background-image: ${shadowColor};
  box-shadow:   0px 10px 15px -3px rgba(0,0,0,0.1);
  border-radius: 0.5rem;
  height: 150px;
`
