import { IconButton, VStack } from "@chakra-ui/react";
import { IoAdd } from "react-icons/io5";

import useResult from "../../hooks/api/useResult";
import Header from "../../components/Header";
import { colors } from "../../style/color";
import { Link } from "react-router-dom";
import CardContainer from "./Card";

const DataPage = () => {
  // const { resultData } = useResult();

  return (
    <>
      <VStack h={"100vh"}>
        <Header />
        <VStack pt={"4.6rem"}>
          <CardContainer />
        </VStack>

        {/* <Flex
          gap={"1rem"}
          color={colors.gray600}
          opacity={0.7}
          alignItems={"center"}
          position={"fixed"}
          top={"50%"}
        >
          <Icon
            as={IoFlaskOutline}
            fontSize={["5xl", "6xl"]}
            color={colors.main}
          />
          <Box>
            <Heading as={"h1"} size={["md", "lg"]} fontWeight={600}>
              No data found
            </Heading>
            <Text fontSize={["sm", "md"]} fontWeight={400}>
              Create an analysis
            </Text>
          </Box>
        </Flex> */}

        <IconButton
          as={Link}
          to={"/app/analysis"}
          colorScheme={"gray"}
          icon={<IoAdd />}
          fontSize={["4xl", "5xl"]}
          size={"lg"}
          color={colors.white}
          px={"3.5rem"}
          boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
          backgroundColor={colors.main}
          position={"fixed"}
          bottom={"1rem"}
        ></IconButton>
      </VStack>
    </>
  );
};

export default DataPage;
