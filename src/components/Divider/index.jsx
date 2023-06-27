import styled from "styled-components";
import { colors } from "../../style/color";


const Divider = ({color = colors.gray, orientation = 'h'}, props) => {
  return (
    <Container color={color} orientation={orientation}/>
  )
}

const Container = styled.div`
  background-color: ${props => props.color};
  width: ${props => props.orientation === 'h' ? '100%' : '0.125rem'};
  height: ${props => props.orientation === 'h' ? '0.125rem' : '100%'};;
`

export default Divider;