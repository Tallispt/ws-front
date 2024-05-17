import {
  Card,
  CardBody,
  CloseButton,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { colors } from "../../style/color";
import { Link } from "react-router-dom";

const CardContainer = () => {
  return (
    <Card
      as={Link}
      to={"/app/result"}
      maxW={"md"}
      direction={"row"}
      alignItems={"center"}
      cursor={"pointer"}
      _hover={{ border: "1px", borderColor: colors.gray400 }}
    >
      <CardBody overflow={"hidden"} p={"1rem"}>
        <HStack spacing={"2rem"}>
          <Image
            objectFit={"contain"}
            src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Chakra UI"
            borderRadius={"lg"}
            // minH={"100%"}
            maxW={"100px"}
            // maxH={"100%"}
          />
          <Stack py="1rem">
            <Heading size={"sm"}>Analysis001</Heading>
            <Text fontSize={"sm"}>Location</Text>
            <Text fontSize={"sm"}>Date</Text>
          </Stack>
          <CloseButton variant={"ghost"} alignSelf={"flex-start"} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default CardContainer;
