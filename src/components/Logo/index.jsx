import styled from "styled-components";
import MainLogo from "../MainLogo";
import {themes} from "../../style/themes";

const Logo = ({fontSize = '2.8rem', theme = themes.default}) => {

  return(
    <Container>
      <MainLogo fontSize={fontSize} theme={theme}/>
      <Title fontSize={fontSize} theme={theme}> Metrix</Title>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
`

const Title = styled.p`
  font-size: ${props => props.fontSize};
  text-shadow: -1.5px 1.6px 0px ${props => props.theme.secundary};
  font-weight: bold;
  white-space: break-spaces;
  color: ${props => props.theme.main}
`

export default Logo;