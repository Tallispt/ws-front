import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import Panel from "./Panel";

const PageTabs = [
  // {
  //   name: "Models",
  //   type: "model"
  // },
  {
    name: "Regression",
    type: "regression"
  }
]

const AnalysisPage = () => {

  return (
    <Tabs
      size='lg'
      variant='soft-rounded'
      colorScheme='tagTheme'
      display='flex'
      flexDir='column'
      alignItems='center'
      justifyContent='center'
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
            <Panel type={item.type} />
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
}

export default AnalysisPage;