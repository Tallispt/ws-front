import styled from "styled-components"
import { colors } from "../../style/color"

const MainLogo = ({fontSize = '2.8rem'}) => {

  return(
    <Title fontSize={fontSize}>WS</Title>
  )
}

const Title = styled.p`
  font-size: ${props => props.fontSize};
  font-weight: bold;
  text-shadow: -1.5px 1.6px 0px ${colors.main};
  letter-spacing: -0.33rem;
`

export default MainLogo;