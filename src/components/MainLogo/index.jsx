import styled from "styled-components"
import { themes } from "../../style/themes"

const MainLogo = ({fontSize = '2.8rem' , theme = themes.default}) => {

  return(
    <Title fontSize={fontSize} theme={theme}>WS</Title>
  )
}

const Title = styled.p`
  font-size: ${props => props.fontSize};
  font-weight: bold;
  text-shadow: -1.5px 1.6px 0px ${props => props.theme.secundary};
  letter-spacing: -0.33rem;
  color: ${props => props.theme.main}
`

export default MainLogo;