import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  IconButton,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { colors } from "../../style/color";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import Table from "./Table";

const AccordionContainer = (props) => {
  return (
    <AccordionItem border={"none"}>
      <h2>
        <AccordionButton>
          <Box as="span" flex="1" textAlign="left" fontWeight={"bold"}>
            {props.color}
          </Box>
          <AccordionIcon fontSize={"3xl"} color={colors.main} />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} mx={"4rem"} m={0}>
        <Tabs size="sm" variant={"unstyled"}>
          <TabList>
            <Tab
              fontWeight={"bold"}
              _selected={{
                color: colors.white,
                bg: colors.main,
                borderRadius: 5,
              }}
            >
              Replicates
            </Tab>
            <Tab
              fontWeight={"bold"}
              _selected={{
                color: colors.white,
                bg: colors.main,
                borderRadius: 5,
              }}
            >
              Mean
            </Tab>
            <Tab
              fontWeight={"bold"}
              _selected={{
                color: colors.white,
                bg: colors.main,
                borderRadius: 5,
              }}
            >
              Plot
            </Tab>
            <IconButton
              ml={"auto"}
              as={IoEllipsisHorizontalSharp}
              size={"xs"}
              variant={"ghost"}
              border={1}
              borderColor={colors.gray}
            />
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>{/* <Table /> */}</TabPanel>
          </TabPanels>
        </Tabs>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default AccordionContainer;
