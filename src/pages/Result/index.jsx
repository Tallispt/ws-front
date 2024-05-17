import {
  Accordion,
  Center,
  Flex,
  FormControl,
  Heading,
  IconButton,
  Image,
  VStack,
} from "@chakra-ui/react";
import {
  IoChevronBack,
  IoEllipsisHorizontalSharp,
  IoInformationCircleOutline,
} from "react-icons/io5";
import { colors } from "../../style/color";
import { useNavigate } from "react-router-dom";
import AccordionContainer from "./AccodionComponent";

const result = [
  { color: "RGB" },
  { color: "CMYK" },
  { color: "HSV" },
  { color: "E" },
];

const ResultPage = () => {
  const navigate = useNavigate();

  return (
    <VStack>
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
          onClick={() => navigate("/app/data")}
        />
        <Heading fontSize={["xl", "2xl"]} textAlign={"center"} flex={1}>
          Analysis001
        </Heading>
        <IconButton
          as={IoEllipsisHorizontalSharp}
          variant={"ghost"}
          size={"sm"}
          color={colors.main}
          cursor={"pointer"}
        />
      </Flex>

      <FormControl pt={"4.6rem"} pb={"1rem"}>
        <Flex justifyContent={"flex-end"}>
          <IconButton
            size={"xs"}
            as={IoInformationCircleOutline}
            variant={"ghost"}
            cursor={"pointer"}
            justifySelf={"right"}
          />
        </Flex>
        <Center>
          <Image
            objectFit={"contain"}
            src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Chakra UI"
            borderRadius={"lg"}
            maxW={"300px"}
            mb={"2rem"}
          />
        </Center>
        <Accordion allowMultiple>
          {result.map((item, index) => (
            <AccordionContainer index={index} color={item.color} />
          ))}
        </Accordion>
      </FormControl>
    </VStack>
  );
};

export default ResultPage;
