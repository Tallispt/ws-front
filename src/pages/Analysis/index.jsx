import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  IconButton,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Radio,
  RadioGroup,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import { IoChevronBack } from "react-icons/io5";
import DropZone from "./DropZone";
import { colors } from "../../style/color";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const InputComponent = ({ paramName, defVal, minVal, maxVal }) => {
  return (
    <Flex alignItems={"center"} w={"100%"}>
      <FormLabel
        textAlign={"start"}
        flex={1}
        fontWeight={"bold"}
        whiteSpace={"nowrap"}
      >
        {paramName}
      </FormLabel>
      <NumberInput
        flex={1}
        focusBorderColor={colors.main}
        bgColor={colors.graysh}
        defaultValue={defVal}
        min={minVal}
        max={maxVal}
        allowMouseWheel
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </Flex>
  );
};

const AnalysisPage = () => {
  const SampleNum = 5;
  const [sliderValue, setSliderValue] = useState(100);
  const [showTooltip, setShowTooltip] = useState(false);
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
          Create analysis
        </Heading>
      </Flex>

      <FormControl pt={"4.6rem"} pb={"1rem"}>
        <Box pb={4}>
          <FormLabel fontWeight={"bold"}>Analysis Name</FormLabel>
          <Input
            focusBorderColor={colors.main}
            bgColor={colors.graysh}
            placeholder="Analysis001"
          />
        </Box>

        <HStack pb={4} spacing={4}>
          <Box>
            <FormLabel fontWeight={"bold"}>Sample Number</FormLabel>
            <NumberInput
              focusBorderColor={colors.main}
              bgColor={colors.graysh}
              defaultValue={5}
              min={1}
              max={20}
              allowMouseWheel
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Box>

          <Box>
            <FormLabel fontWeight={"bold"}>Replicate Number</FormLabel>
            <NumberInput
              focusBorderColor={colors.main}
              bgColor={colors.graysh}
              defaultValue={3}
              min={1}
              max={6}
              allowMouseWheel
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Box>
        </HStack>

        <Box pb={4}>
          <FormLabel fontWeight={"bold"}>Analyte Name/Unit</FormLabel>
          <Input
            focusBorderColor={colors.main}
            bgColor={colors.graysh}
            placeholder="Anayte"
          />
        </Box>

        <Accordion allowMultiple>
          <AccordionItem border={"none"}>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontWeight={"bold"}>
                  Sample Values
                </Box>
                <AccordionIcon fontSize={"3xl"} color={colors.main} />
              </AccordionButton>
            </h2>

            <AccordionPanel pb={4} mx={"4rem"}>
              <VStack>
                {Array.from({ length: SampleNum }).map((item, index) => (
                  <Flex index={index} alignItems={"center"} w={"100%"}>
                    <FormLabel
                      textAlign={"start"}
                      flex={1}
                      fontWeight={"bold"}
                      whiteSpace={"nowrap"}
                    >
                      Sample {index + 1}:
                    </FormLabel>
                    <Input
                      flex={1}
                      type="number"
                      focusBorderColor={colors.main}
                      bgColor={colors.graysh}
                    />
                  </Flex>
                ))}
              </VStack>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem border={"none"}>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontWeight={"bold"}>
                  Advanced Settings
                </Box>
                <AccordionIcon fontSize={"3xl"} color={colors.main} />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Box pb={4}>
                <FormLabel fontWeight={"bold"}>Channel</FormLabel>
                <Flex justifyContent={"space-between"} pb={4}>
                  <Radio colorScheme="teal" value="1" defaultChecked>
                    RGB
                  </Radio>
                  <Radio colorScheme="teal" value="2" defaultChecked>
                    CMYK
                  </Radio>
                  <Radio colorScheme="teal" value="3" defaultChecked>
                    HSV
                  </Radio>
                </Flex>
                <Radio colorScheme="teal" value="4" defaultChecked>
                  Euclidian Distance (E)
                </Radio>
              </Box>
              <Box pb={4}>
                <FormLabel fontWeight={"bold"}>Color Extraction Mode</FormLabel>
                <RadioGroup defaultValue="1">
                  <Flex justifyContent={"space-between"}>
                    <Radio colorScheme="teal" value="1">
                      None
                    </Radio>
                    <Radio colorScheme="teal" value="2">
                      RGBHH
                    </Radio>
                    <Radio colorScheme="teal" value="3">
                      HSVTHR
                    </Radio>
                  </Flex>
                </RadioGroup>
              </Box>
              <Box pb={4}>
                <FormLabel fontWeight={"bold"}>
                  Hough Circle Transformation Params
                </FormLabel>
                <VStack mx={"4rem"}>
                  <InputComponent
                    paramName="Kernel"
                    defVal={3}
                    minVal={3}
                    maxVal={11}
                  />
                  <InputComponent
                    paramName="Min. Dist."
                    defVal={45}
                    minVal={1}
                    maxVal={200}
                  />
                  <InputComponent
                    paramName="Param 1"
                    defVal={40}
                    minVal={1}
                    maxVal={200}
                  />
                  <InputComponent
                    paramName="Param 2"
                    defVal={15}
                    minVal={1}
                    maxVal={200}
                  />
                  <InputComponent
                    paramName="Min. Rad."
                    defVal={1}
                    minVal={0}
                    maxVal={200}
                  />
                  <InputComponent
                    paramName="Max. Rad."
                    defVal={25}
                    minVal={0}
                    maxVal={200}
                  />
                </VStack>
              </Box>
              <Box>
                <FormLabel fontWeight={"bold"}>Radius Percentage</FormLabel>
                <Slider
                  aria-label="slider-ex-1"
                  defaultValue={100}
                  min={1}
                  max={150}
                  colorScheme="teal"
                  onChange={(v) => setSliderValue(v)}
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                >
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderMark value={50} mt="1" ml="-2.5" fontSize="sm">
                    50%
                  </SliderMark>
                  <SliderMark value={100} mt="1" ml="-2.5" fontSize="sm">
                    100%
                  </SliderMark>
                  <Tooltip
                    hasArrow
                    bg={colors.main}
                    color="white"
                    placement="top"
                    isOpen={showTooltip}
                    label={`${sliderValue}%`}
                  >
                    <SliderThumb />
                  </Tooltip>
                  {/* <SliderThumb boxSize={6}>
                    <Box>{sliderValue}%</Box>
                  </SliderThumb> */}
                </Slider>
              </Box>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Box pb={4}>
          <FormLabel fontWeight={"bold"}>Image</FormLabel>
          <DropZone />
        </Box>

        <Center>
          <Button
            w={"100vw"}
            size={"lg"}
            bgColor={colors.main}
            color={colors.white}
            //TODO Change disable toggle
            isDisabled={false}
            _disabled={{
              bgColor: "transparent",
              color: colors.main,
              border: "1px",
              borderColor: colors.main,
            }}
          >
            Create
          </Button>
        </Center>
      </FormControl>
      {/* <Panel type={""} /> */}
    </VStack>
  );
};

export default AnalysisPage;
