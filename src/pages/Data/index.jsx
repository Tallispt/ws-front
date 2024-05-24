import { Center, FormControl, IconButton, VStack } from "@chakra-ui/react";
import { IoAdd } from "react-icons/io5";

import useData from "../../hooks/api/useData";
import Header from "../../components/Header";
import { colors } from "../../style/color";
import { Link } from "react-router-dom";
import CardContainer from "./Card";
import NoDataContainer from "./NoDataContainer";
import Loading from "../../components/Loading";

const DataPage = () => {
  const { transformedData: data, dataLoading } = useData();
  return (
    <>
      <VStack h={"100vh"}>
        <Header />
        {dataLoading ? (
          <Center minw={"100vw"} minH={"100vh"}>
            <Loading />
          </Center>
        ) : (
          <>
            {data ? (
              <FormControl pt={"4.6rem"} pb={"5rem"}>
                {data?.reverse().map((item) => (
                  <CardContainer key={item?._id} item={item} />
                ))}
              </FormControl>
            ) : (
              <NoDataContainer />
            )}
          </>
        )}

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
