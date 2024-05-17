import { themes } from "../../style/themes";
import { Link } from "react-router-dom";
import { Heading } from "@chakra-ui/react";

const MainLogo = ({ theme = themes.default }) => {
  return (
    <Heading
      as={Link}
      to={"data"}
      color={theme.main}
      size={["3xl"]}
      // TODO FONTE IMPORTADA NÃO ESTÁ AUMENTANDO O WEIGHT
      fontWeight={"bold"}
      textShadow={`-1.5px 1.6px 0px ${theme.secundary}`}
      letterSpacing={"-0.33rem"}
    >
      WS
    </Heading>
  );
};

export default MainLogo;
