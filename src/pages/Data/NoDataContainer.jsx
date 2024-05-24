import { Box, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { colors } from "../../style/color";
import { IoFlaskOutline } from "react-icons/io5";

const NoDataContainer = () => {
  return (
    <Flex
      gap={"1rem"}
      color={colors.gray600}
      opacity={0.7}
      alignItems={"center"}
      position={"fixed"}
      minw={"100vw"}
      minH={"100vh"}
    >
      <Icon as={IoFlaskOutline} fontSize={["5xl", "6xl"]} color={colors.main} />
      <Box>
        <Heading as={"h1"} size={["md", "lg"]} fontWeight={600}>
          No data found
        </Heading>
        <Text fontSize={["sm", "md"]} fontWeight={400}>
          Create an analysis
        </Text>
      </Box>
    </Flex>
  );
};

export default NoDataContainer;
