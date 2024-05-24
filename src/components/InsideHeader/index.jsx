import { Flex, Heading, IconButton } from "@chakra-ui/react";
import { IoChevronBack } from "react-icons/io5";
import { colors } from "../../style/color";

const InsideHeader = (props) => {
  return (
    <Flex
      backgroundColor={"white"}
      alignItems={"center"}
      px={["1rem", "4rem"]}
      py={"1rem"}
      position={"fixed"}
      width={"100vw"}
      boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
      zIndex={1}
    >
      <IconButton
        variant={"ghost"}
        as={IoChevronBack}
        size={"sm"}
        color={colors.main}
        cursor={"pointer"}
        onClick={props.handleGoBack}
      />
      <Heading fontSize={["xl", "2xl"]} textAlign={"center"} flex={1}>
        {props.title}
      </Heading>
    </Flex>
  );
};

export default InsideHeader;
