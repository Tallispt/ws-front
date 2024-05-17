import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const AlertModal = ({ ...props }) => {
  const navigate = useNavigate();

  const handleEndSession = () => {
    localStorage.removeItem("userData");
    navigate("/sign-in");
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
        <AlertDialogHeader>Exit Account?</AlertDialogHeader>
        <AlertDialogCloseButton />
        <AlertDialogBody>
          Are you sure you want to exit your account?
        </AlertDialogBody>
        <AlertDialogFooter>
          <Button onClick={props.onClose}>No</Button>
          <Button colorScheme="red" ml={3} onClick={handleEndSession}>
            Yes
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertModal;
