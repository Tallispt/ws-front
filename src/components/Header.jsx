import styled from "styled-components"
      
const Header = () => {
  return (
    <HeaderContainer>
      <p>WS Metrix</p>
      <p>...</p>
    </HeaderContainer>

  )
}

const HeaderContainer = styled.div`
  height: 5.2rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 2.5rem;

    p {
      color: #389393;
      font-weight: 700;
      font-size: 2rem;
      line-height: 28px;
    }
`

export default Header