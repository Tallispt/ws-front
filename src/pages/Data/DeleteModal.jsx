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
  const { delResult } = useDeleteResult();
  //TODO
  const handleEndSession = () => {
    try {
      delResult(props.id);
      props.setData((prevState) =>
        prevState.filter((item) => item._id.$oid.toString() !== props.id)
      );
      props.onClose();
    } catch (e) {
      throw e;
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
