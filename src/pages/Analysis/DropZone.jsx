import { Button, Input, Center, Icon, Image, Box } from "@chakra-ui/react";
import { IoAdd } from "react-icons/io5";

import { colors } from "../../style/color";
import { useMemo, useState } from "react";
import useDrop from "../../hooks/useDrop";

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

const DropZone = () => {
  const [image, setImage] = useState();
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
      {!image ? (
        <Center {...getRootProps({ style })} onDrop={onDrop}>
          <Input {...getInputProps()} />
          <Button
            type="Button"
            onClick={open}
            variant={"unstyled"}
            boxSize={"100%"}
          >
            <Icon as={IoAdd} fontSize={"4xl"} />
          </Button>
        </Center>
      ) : (
        <Image
          borderRadius={10}
          objectFit={"cover"}
          boxSize={"10rem"}
          src={image.url}
          alt={`imag1.5em_${image.key}`}
        />
      )}
    </Center>
  );
};

export default DropZone;
