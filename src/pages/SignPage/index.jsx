import styled from "styled-components";
import Logo from "../../components/Logo";
import { colors } from "../../style/color";
import { themes } from "../../style/themes";

const SignPage = ({ children }) => {
  return (
    <Container>
      <FormContainer>
        <Logo theme={themes.light} fontSize="4rem" />
        {children}
      </FormContainer>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(60deg, ${colors.darkMain} 4%, ${colors.main} 98%);
`;

const FormContainer = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 2vw;

  align-items: center;
  padding: 4rem;

  background-color: rgba(255, 255, 255, 0.2);
  opacity: 0.9;
  color: ${colors.white};
  border-radius: 40px;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  margin: 40px;

  @media (max-width: 30em) {
    padding: 2rem;
  }
`;

export default SignPage;
