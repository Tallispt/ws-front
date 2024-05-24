import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Center,
  Image,
  useToast,
} from "@chakra-ui/react";
import { colors } from "../../style/color";

const ConfirmImageModal = ({ ...props }) => {
  const toast = useToast();

  const handleEndSession = async () => {
    try {
      const newDetectForm = {
        ...props.detectForm,
        file: props.image.file,
      };
      props.setDetectForm(newDetectForm);
      const data = new FormData();
      Object.keys(newDetectForm).forEach((key) => {
        data.append(key, newDetectForm[key]);
      });
      props.detect(data);
      props.setFlag.toggle();
      props.onClose();
    } catch (e) {
      toast({ title: e.message, colorScheme: "red" });
    }
  };

  return (
    <AlertDialog
      motionPreset="slideInBottom"
      onClose={props.onClose}
      isOpen={props.isOpen}
      isCentered
      size={"sm"}
    >
      <AlertDialogOverlay />

      <AlertDialogContent>
        <AlertDialogHeader>Confirm Image?</AlertDialogHeader>
        <AlertDialogCloseButton />
        <AlertDialogBody as={Center}>
          <Image
            src={props?.image?.url}
            maxH={"400px"}
            maxW={"400px"}
            borderRadius={10}
          />
        </AlertDialogBody>
        <AlertDialogFooter>
          <Button onClick={props.onClose}>No</Button>
          <Button
            colorScheme={"gray"}
            bgColor={colors.main}
            color={colors.white}
            ml={3}
            onClick={handleEndSession}
          >
            Yes
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ConfirmImageModal;
