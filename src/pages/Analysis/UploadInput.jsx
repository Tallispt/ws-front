import { Button, Input } from "@chakra-ui/react";

import { colors } from "../../style/color";

const UploadInput = ({ disabled, open, getInputProps }) => {

  return (
    <Button
      color={colors.black}
      backgroundColor={colors.white}
      isDisabled={disabled}
      _hover={!disabled ? {} : { brightness: 0.1 }}
      _disabled={{
        bg: colors.gray,
        color: colors.gray400,
      }}
      onClick={open}
    >
      Upload File(s)
      <Input {...getInputProps()} />
    </Button>
  )
}

export default UploadInput;