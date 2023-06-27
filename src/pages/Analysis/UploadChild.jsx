import { Button, ModalBody, ModalFooter, useToast } from "@chakra-ui/react";
import useEncode from "../../hooks/useEncode";
import { useState } from "react";
import useUploadFile from "../../hooks/api/userUploadFile"

const UploadModal = () => {
  // const { upload } = useUploadFile();
  // const { encode } = useEncode()
  // const toast = useToast();
  // const [file, setFile] = useState()

  async function handleFile(event){
  //   const newFile = event.target.files[0]
  //   const base64 = await encode(newFile);
  //   console.log({file: base64})
  //   setFile({      
  //     name: newFile.name,
  //     file: base64  });
  }

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
    <form 
    // onSubmit={handleUpload}
    >
      <ModalBody>
          <input 
          type="file" 
          label="Image" 
          accept=".jpeg, .png, .jpg" 
          name="file"
          // onChange={handleFile}
          />
      </ModalBody>
      <ModalFooter>
        <Button 
        // type="submit"type="submit"
        />
      </ModalFooter>
    </form>
  )
}

export default UploadModal;