import { useRef } from "react";
import { Button } from "@chakra-ui/react";
import styled from "styled-components";

import { colors } from "../../style/color";

const UploadInput = ({disabled}) => {

  const inputRef = useRef();

  async function handleFile(e){
      const newFile = e.target.files[0]
      console.log(newFile)
    //   const base64 = await encode(newFile);
    //   console.log({file: base64})
    //   setFile({      
    //     name: newFile.name,
    //     file: base64  });
    }

    // const { upload } = useUploadFile();
  // const { encode } = useEncode()
  // const toast = useToast();
  // const [file, setFile] = useState()

  async function handleUpload(e){
    e.preventDefault();

    try {
      // await upload(file)
  //     toast({
  //       title: 'Upload realizado com sucesso',
  //       position: 'top-left',
  //       colorScheme: 'teal',
  //       duration: '3000',
  //       isClosable: 'true',
    // });
    } catch (error) {
  //     toast({
  //       title: 'Não foi possível fazer o upload!',
  //       position: 'top-left',
  //       colorScheme: 'red',
  //       duration: '3000',
  //       isClosable: 'true',
  //   });
  //   console.log(error)
    }
  }

  return(
    <Button 
      color={colors.black} 
      backgroundColor={colors.white}
      isDisabled={disabled}
      isActive={disabled}
      _hover={!disabled ? null : {brightness: 0.1}}
      _disabled={{
        bg: colors.gray,
        color: colors.gray400
      }}
      // value={value}
      onClick={() => inputRef.current.click()}
      >
      Upload File
    <Input 
    type="file" 
    label="Image" 
    accept=".jpeg, .png, .jpg" 
    name="file"
    ref={inputRef}
    onChange={handleFile}
    />
    </Button>
  )
}

const Input = styled.input`
  display: none;
`

export default UploadInput;