import styled from "styled-components";
import { themes } from "../../style/themes";

const Logo = ({ fontSize = "2.8rem", theme = themes.default }) => {
  return (
    <Container>
      <WS fontSize={fontSize} theme={theme}>
        WS
      </WS>
      <Title fontSize={fontSize} theme={theme}>
        {" "}
        Metrix
      </Title>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

const Title = styled.p`
  font-size: ${(props) => props.fontSize};
  text-shadow: -1.5px 1.6px 0px ${(props) => props.theme.secundary};
  font-weight: bold;
  white-space: break-spaces;
  color: ${(props) => props.theme.main};

  @media (max-width: 510px) {
    font-size: 3rem;
  }
`;

const WS = styled(Title)`
  letter-spacing: -0.33rem;
`;

export default Logo;
