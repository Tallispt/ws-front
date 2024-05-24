import {
  Card,
  CardBody,
  CloseButton,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { colors } from "../../style/color";
import { Link } from "react-router-dom";
import DeleteModal from "./DeleteModal";

const CardContainer = ({ item }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Card
      maxW={"md"}
      direction={"row"}
      alignItems={"center"}
      cursor={"pointer"}
      mb={"1rem"}
      _hover={{ border: "1px", borderColor: colors.gray400 }}
    >
      <CardBody p={"1rem"}>
        <HStack justifyContent={"space-between"}>
          <HStack spacing={"4rem"} as={Link} to={`/app/result/${item._id}`}>
            <Image
              objectFit={"contain"}
              src={item?.original_image}
              alt="Chakra UI"
              borderRadius={"lg"}
              maxW={"100px"}
            />
            <Stack py="1rem">
              <Heading size={"sm"}>{item?.name}</Heading>
              <Text fontSize={"sm"}>{item?.location}</Text>
              <Text fontSize={"sm"}>{item?.created_at}</Text>
            </Stack>
          </HStack>
          <CloseButton
            variant={"ghost"}
            alignSelf={"flex-start"}
            onClick={onOpen}
          />
        </HStack>
      </CardBody>
      <DeleteModal
        id={item?._id}
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
      />
    </Card>
  );
};

export default CardContainer;
