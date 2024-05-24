import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import useDeleteData from "../../hooks/api/useDeleteData";

const GoBackModal = ({ ...props }) => {
  const navigate = useNavigate();
  const toast = useToast();
  const { delData } = useDeleteData();

  const handleEndSession = () => {
    try {
      delData(props.id);
      navigate("/app/data");
      toast({ title: "Data has been deleted" });
    } catch (e) {
      toast({
        title: "Not able to delete data!",
        description: e.response?.data?.error,
        colorScheme: "red",
      });
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
        <AlertDialogHeader>Leave Analysis?</AlertDialogHeader>
        <AlertDialogCloseButton />
        <AlertDialogBody>Do you want to leave this analysis?</AlertDialogBody>
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

export default GoBackModal;
