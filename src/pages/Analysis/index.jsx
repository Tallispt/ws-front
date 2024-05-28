import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Card,
  Center,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Radio,
  RadioGroup,
  Select,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Tooltip,
  VStack,
  useBoolean,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import DropZone from "./DropZone";
import { colors } from "../../style/color";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InsideHeader from "../../components/InsideHeader";
import useSaveResult from "../../hooks/api/useSaveResult";
import useDetectSensor from "../../hooks/api/useDetectSensor";

const InputComponent = ({
  title,
  paramName,
  defVal,
  minVal,
  maxVal,
  flag,
  detectForm,
  setDetectForm,
}) => {
  return (
    <Flex key={title} alignItems={"center"} w={"100%"}>
      <FormLabel
        textAlign={"start"}
        flex={1}
        fontWeight={"bold"}
        whiteSpace={"nowrap"}
      >
        {title}
      </FormLabel>
      <NumberInput
        flex={1}
        focusBorderColor={colors.main}
        bgColor={colors.graysh}
        defaultValue={defVal}
        min={minVal}
        max={maxVal}
        allowMouseWheel
        isDisabled={flag}
        onChange={(value) =>
          setDetectForm((prevState) => ({ ...prevState, [paramName]: value }))
        }
        value={detectForm[paramName]}
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
  const [detectForm, setDetectForm] = useState({
    file: null,
    kernel: 5,
    minDist: 45,
    param1: 40,
    param2: 15,
    minRadius: 1,
    maxRadius: 25,
    radiusPercent: 1,
    sortingType: "h",
  });

  const [resultForm, setResultForm] = useState({
    name: "Analysis001",
    location: null,
    sampleNum: 5,
    replicateNum: 3,
    xLabel: "Analyte",
    mode: "0",
    channels: ["RGB", "CMYK", "HSV", "E"],
    xValues: Array(5).fill(""),
  });

  const channelCheckbox = [
    { key: "RGB", name: "RGB" },
    { key: "CMYK", name: "CMYK" },
    { key: "HSV", name: "HSV" },
    { key: "E", name: "Euclidian Distance (E)" },
  ];

  const {
    onOpen: goBackOnOpen,
    onClose: goBackOnClose,
    isOpen: goBackIsOpen,
  } = useDisclosure();
  const [showTooltip, setShowTooltip] = useBoolean(false);
  const [flag, setFlag] = useBoolean();
  const { detectResponse, detect, detectLoading } = useDetectSensor();
  const { saveResult } = useSaveResult();
  const toast = useToast();

  const navigate = useNavigate();

  const handleGoBack = () => {
    if (flag) {
      goBackOnOpen();
      return;
    }
    navigate("/app/data");
  };

  const handleCreateResult = async () => {
    try {
      const data = {
        name: resultForm.name,
        location: resultForm.location,
        dataId: detectResponse.id,
        infoResult: {
          mode: resultForm.mode,
          yLabel: "Color Value",
          xLabel: resultForm.xLabel,
          replicateNum: resultForm.replicateNum,
          sampleNum: resultForm.sampleNum,
          xValues: resultForm.xValues,
          channels: resultForm.channels,
        },
      };
      const response = await saveResult(data);
      navigate(`/app/result/${response.id}`);
    } catch (e) {
      console.log(e);
      toast({
        title: "Not able to create result!",
        description: e.response?.data?.error,
        colorScheme: "red",
      });
    }
  };

  return (
    <VStack>
      <InsideHeader handleGoBack={handleGoBack} title="Create analysis" />

      <FormControl pt={"4.6rem"} pb={"1rem"}>
        <Box pb={4}>
          <FormLabel fontWeight={"bold"}>Analysis Name</FormLabel>
          <Input
            focusBorderColor={colors.main}
            bgColor={colors.graysh}
            placeholder={resultForm.name}
            value={resultForm.name}
            onChange={(e) => {
              setResultForm((prevState) => ({
                ...prevState,
                name: e.target.value,
              }));
            }}
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
              onChange={(value) => {
                setResultForm((prevState) => ({
                  ...prevState,
                  sampleNum: value,
                  xValues: Array(parseInt(value)).fill(""),
                }));
              }}
              value={resultForm.sampleNum}
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
              max={20}
              allowMouseWheel
              onChange={(value) => {
                setResultForm((prevState) => ({
                  ...prevState,
                  replicateNum: value,
                }));
              }}
              value={resultForm.replicateNum}
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
            placeholder={resultForm.xLabel}
            value={resultForm.xLabel}
            onChange={(e) => {
              setResultForm((prevState) => ({
                ...prevState,
                xLabel: e.target.value,
              }));
            }}
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
                {resultForm.xValues.map((item, index) => (
                  <Flex key={index} alignItems={"center"} w={"100%"}>
                    <FormLabel
                      textAlign={"start"}
                      flex={1}
                      fontWeight={"bold"}
                      whiteSpace={"nowrap"}
                    >
                      Sample {index + 1}:
                    </FormLabel>
                    <Input
                      isRequired
                      flex={1}
                      type="number"
                      focusBorderColor={colors.main}
                      bgColor={colors.graysh}
                      value={item}
                      onChange={(event) => {
                        const newValue = event.target.value;
                        setResultForm((prevState) => {
                          const newXValues = [...prevState.xValues];
                          newXValues[index] = newValue;
                          return {
                            ...prevState,
                            xValues: newXValues,
                          };
                        });
                      }}
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
                <FormLabel fontWeight={"bold"}>Color Models</FormLabel>
                <Box display={"grid"} gridTemplateColumns={"repeat(3, 1fr)"}>
                  {channelCheckbox.map((item, index) => (
                    <Checkbox
                      key={index}
                      colorScheme="teal"
                      value={item.key}
                      defaultChecked
                      onChange={(event) => {
                        const channelValue = event.target.value;
                        setResultForm((prevState) => {
                          let newChannels = [...prevState.channels];
                          if (event.target.checked) {
                            if (!newChannels.includes(channelValue)) {
                              newChannels.push(channelValue);
                            }
                          } else {
                            newChannels = newChannels.filter(
                              (channel) => channel !== channelValue
                            );
                          }
                          return {
                            ...prevState,
                            channels: newChannels,
                          };
                        });
                      }}
                    >
                      {item.name}
                    </Checkbox>
                  ))}
                </Box>
              </Box>
              <Box pb={4}>
                <FormLabel fontWeight={"bold"}>Color Extraction Mode</FormLabel>
                <RadioGroup defaultValue={resultForm.mode}>
                  <Flex justifyContent={"space-between"}>
                    <Radio
                      colorScheme="teal"
                      value="0"
                      onChange={(value) =>
                        setResultForm((prevState) => ({
                          ...prevState,
                          mode: value.target.value,
                        }))
                      }
                    >
                      None
                    </Radio>
                    <Radio
                      colorScheme="teal"
                      value="1"
                      onChange={(value) =>
                        setResultForm((prevState) => ({
                          ...prevState,
                          mode: value.target.value,
                        }))
                      }
                    >
                      RGBHH
                    </Radio>
                    <Radio
                      colorScheme="teal"
                      value="2"
                      onChange={(value) =>
                        setResultForm((prevState) => ({
                          ...prevState,
                          mode: value.target.value,
                        }))
                      }
                    >
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
                    title="Kernel"
                    paramName="kernel"
                    defVal={detectForm.kernel}
                    minVal={3}
                    maxVal={11}
                    flag={flag}
                    detectForm={detectForm}
                    setDetectForm={setDetectForm}
                  />
                  <InputComponent
                    title="Min. Dist."
                    paramName="minDist"
                    defVal={detectForm.minDist}
                    minVal={1}
                    maxVal={200}
                    flag={flag}
                    detectForm={detectForm}
                    setDetectForm={setDetectForm}
                  />
                  <InputComponent
                    title="Param 1"
                    paramName="param1"
                    defVal={detectForm.param1}
                    minVal={1}
                    maxVal={200}
                    flag={flag}
                    detectForm={detectForm}
                    setDetectForm={setDetectForm}
                  />
                  <InputComponent
                    title="Param 2"
                    paramName="param2"
                    defVal={detectForm.param2}
                    minVal={1}
                    maxVal={200}
                    flag={flag}
                    detectForm={detectForm}
                    setDetectForm={setDetectForm}
                  />
                  <InputComponent
                    title="Min. Rad."
                    paramName="minRadius"
                    defVal={detectForm.minRadius}
                    minVal={0}
                    maxVal={200}
                    flag={flag}
                    detectForm={detectForm}
                    setDetectForm={setDetectForm}
                  />
                  <InputComponent
                    title="Max. Rad."
                    paramName="maxRadius"
                    defVal={detectForm.maxRadius}
                    minVal={0}
                    maxVal={200}
                    flag={flag}
                    detectForm={detectForm}
                    setDetectForm={setDetectForm}
                  />
                </VStack>
              </Box>
              <Box pb={4}>
                <FormLabel fontWeight={"bold"}>Type of Sorting</FormLabel>
                <VStack mx={"4rem"}>
                  <Flex alignItems={"center"} w={"100%"}>
                    <FormLabel
                      textAlign={"start"}
                      flex={1}
                      fontWeight={"bold"}
                      whiteSpace={"nowrap"}
                    >
                      Sorting Type
                    </FormLabel>
                    <Select
                      isDisabled={flag}
                      flex={1}
                      value={detectForm.sortingType}
                      onChange={(value) =>
                        setDetectForm((prevState) => ({
                          ...prevState,
                          sortingType: value.target.value,
                        }))
                      }
                    >
                      <option value="h">Horizontal</option>
                      <option value="v">Vertical</option>
                    </Select>
                  </Flex>
                </VStack>
              </Box>
              <Box pb={4}>
                <FormLabel fontWeight={"bold"}>Radius Percentage</FormLabel>
                <Card p={5}>
                  <HStack>
                    <NumberInput
                      defaultValue={detectForm.radiusPercent * 100}
                      isDisabled={flag}
                      min={1}
                      max={150}
                      flex={1}
                      value={detectForm.radiusPercent * 100}
                      onChange={(value) =>
                        setDetectForm((prevState) => ({
                          ...prevState,
                          radiusPercent: value / 100,
                        }))
                      }
                    >
                      <NumberInputField />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                    <Slider
                      aria-label="slider-ex-1"
                      flex={3}
                      defaultValue={detectForm.radiusPercent * 100}
                      min={1}
                      max={150}
                      colorScheme="teal"
                      isDisabled={flag}
                      value={detectForm.radiusPercent * 100}
                      onChange={(value) =>
                        setDetectForm((prevState) => ({
                          ...prevState,
                          radiusPercent: value / 100,
                        }))
                      }
                      onMouseEnter={setShowTooltip.on}
                      onMouseLeave={setShowTooltip.off}
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
                        label={`${detectForm.radiusPercent * 100}%`}
                      >
                        <SliderThumb />
                      </Tooltip>
                    </Slider>
                  </HStack>
                </Card>
              </Box>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Box pb={4}>
          <FormLabel fontWeight={"bold"}>Image</FormLabel>
          <DropZone
            setFlag={setFlag}
            detectForm={detectForm}
            setDetectForm={setDetectForm}
            goBackOnClose={goBackOnClose}
            goBackOnOpen={goBackOnOpen}
            goBackIsOpen={goBackIsOpen}
            detectResponse={detectResponse}
            detect={detect}
            detectLoading={detectLoading}
          />
        </Box>

        <Center>
          <Button
            w={"100vw"}
            size={"lg"}
            bgColor={colors.main}
            color={colors.white}
            isDisabled={!flag}
            _disabled={{
              bgColor: "transparent",
              color: colors.main,
              border: "1px",
              borderColor: colors.main,
            }}
            colorScheme="gray"
            onClick={handleCreateResult}
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
