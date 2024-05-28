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
import { IoChevronBack, IoEllipsisHorizontalSharp } from "react-icons/io5";
import { colors } from "../../style/color";
import { useNavigate, useParams } from "react-router-dom";
import AccordionContainer from "./AccodionComponent";
import useResult from "../../hooks/api/useResult";
import PopOverInfo from "./PopOverInfo";
import Loading from "../../components/Loading";

const ResultPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { resultData, resultLoading } = useResult(id);

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
          {resultData?.name}
        </Heading>
        <IconButton
          as={IoEllipsisHorizontalSharp}
          variant={"ghost"}
          size={"sm"}
          color={colors.main}
          cursor={"pointer"}
        />
      </Flex>

      {resultLoading ? (
        <Center minw={"100vw"} minH={"100vh"}>
          <Loading />
        </Center>
      ) : (
        <FormControl pt={"4.6rem"} pb={"1rem"}>
          <Flex justifyContent={"flex-end"}>
            <PopOverInfo info={resultData?.info} />
          </Flex>
          <Center>
            <Image
              objectFit={"contain"}
              src={resultData?.original_image}
              alt="Chakra UI"
              borderRadius={"lg"}
              maxW={"300px"}
              maxH={"200px"}
              mb={"2rem"}
            />
          </Center>
          <Accordion allowMultiple>
            {resultData?.info.channels.map((item, index) => (
              <AccordionContainer
                key={index}
                channel={item}
                xLabel={resultData?.info.xLabel}
                resultData={resultData?.result_data[item]}
              />
            ))}
          </Accordion>
        </FormControl>
      )}
    </VStack>
  );
};

export default ResultPage;
