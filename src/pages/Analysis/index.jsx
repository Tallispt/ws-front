import styled from "styled-components";

import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import Panel from "./Panel";

const PageTabs = [
  {
    name: "Models",
    type: "model"
  },
  {
    name: "Regression",
    type: "regression"
  }
]

const AnalysisPage = () => {

  return(
    
    <BodyContainer>

      <Tabs 
        size='lg' 
        variant='soft-rounded' 
        colorScheme='tagTheme'
        display='flex'
        flexDir='column'
        alignItems='center'
        justifyContent='center'
        paddingY='3rem'
        gap='3rem'
        >
        <TabList gap='0.2rem'>
          {PageTabs.map((item, index) => (
              <Tab key={index}>
              {item.name}
            </Tab>
            ))}
        </TabList>

        <TabPanels >
        {PageTabs.map((item, index) => (
            <TabPanel key={index}>
              <Panel type={item.type}/>
            </TabPanel>
            ))}
        </TabPanels>
      </Tabs>
    </BodyContainer>
    );
}

const BodyContainer = styled.div`
  display: flex;
  justify-content: center;
  /* margin-top: 5rem; */
`

export default AnalysisPage;