import styled from "styled-components";
import MainLogo from "./MainLogo";
import { colors } from "../../style/color";

const Logo = ({fontSize = '2.8rem'}) => {

  return(
    <Container>
      <MainLogo fontSize={fontSize}/>
      <Title fontSize={fontSize}> Metrix</Title>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
`

const Title = styled.p`
  font-size: ${props => props.fontSize};
  text-shadow: -1.5px 1.6px 0px ${colors.main};
  font-weight: bold;
  white-space: break-spaces;
`

export default Logo;