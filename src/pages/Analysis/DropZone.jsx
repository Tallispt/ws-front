import {
  Button,
  Input,
  Center,
  Icon,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import { IoAdd } from "react-icons/io5";

import { colors } from "../../style/color";
import { useMemo, useState } from "react";
import useDrop from "../../hooks/useDrop";
import ConfirmImageModal from "./ConfirmImageModal";
import Loading from "../../components/Loading";
import GoBackModal from "./GoBackModal";

const baseStyle = {
  height: "10rem",
  width: "100%",
  borderWidth: 2,
  borderRadius: 10,
  borderColor: colors.gray,
  borderStyle: "dashed",
  color: colors.gray,
  outline: "none",
  transition: "border .24s ease-in-out",

  "&:hover": {
    cursor: "pointer",
  },
};

const focusedStyle = {
  borderColor: colors.main,
  colors: colors.main,
};

const acceptStyle = {
  borderColor: colors.teal200,
  colors: colors.teal600,
};

const rejectStyle = {
  borderColor: colors.red,
  colors: colors.red,
};

const DropZone = ({
  setFlag,
  detectForm,
  setDetectForm,
  goBackOnClose,
  goBackOnOpen,
  goBackIsOpen,
  setDataId,
  detectResponse,
  detect,
  detectLoading,
}) => {
  const [image, setImage] = useState({ isSelected: true });
  const { onClose, onOpen, isOpen } = useDisclosure();

  const {
    getRootProps,
    getInputProps,
    isDragAccept,
    isDragReject,
    isFocused,
    open,
    onDrop,
  } = useDrop({
    setImage,
    onOpen,
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  return (
    <Center>
      {!detectResponse ? (
        <Center {...getRootProps({ style })} onDrop={onDrop}>
          <Input {...getInputProps()} />
          <Button
            type="Button"
            onClick={open}
            variant={"unstyled"}
            boxSize={"100%"}
          >
            <>
              {detectLoading ? (
                <Center>
                  <Loading w={"3rem"} />
                </Center>
              ) : (
                <Icon as={IoAdd} fontSize={"4xl"} />
              )}
            </>
          </Button>
        </Center>
      ) : (
        <Image
          borderRadius={10}
          objectFit={"cover"}
          maxH={"20rem"}
          maxW={"100%"}
          src={detectResponse.drawnImage}
          alt={`imag1.5em_${image.key}`}
          fallbackSrc="https://tmsvalue.co.uk/wp-content/uploads/2017/03/Square-500x500-mid-grey-300x300.png"
        />
      )}
      <ConfirmImageModal
        onClose={onClose}
        onOpen={onOpen}
        isOpen={isOpen}
        image={image}
        detect={detect}
        setFlag={setFlag}
        detectForm={detectForm}
        setDetectForm={setDetectForm}
        setDataId={setDataId}
      />
      <GoBackModal
        onClose={goBackOnClose}
        onOpen={goBackOnOpen}
        isOpen={goBackIsOpen}
        id={detectResponse?.id}
      />
    </Center>
  );
};

export default DropZone;
