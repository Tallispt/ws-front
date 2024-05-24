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
import useDeleteResult from "../../hooks/api/useDeleteResult";

const DeleteModal = ({ ...props }) => {
  const { result } = useDeleteResult(props.id);
  const handleEndSession = () => {
    result();
    props.onClose();
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
        <AlertDialogHeader>Delete Result?</AlertDialogHeader>
        <AlertDialogCloseButton />
        <AlertDialogBody>
          Are you sure you want to delete this result?
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

export default DeleteModal;
