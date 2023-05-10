import styled from "styled-components";
import { useState } from "react";

import useSignIn from "../../hooks/api/useSignIn";
import useUploadFile from "../../hooks/api/userUploadFile";
import { useToast } from "@chakra-ui/react";

const Body = () => {
  const { signIn } = useSignIn();
  const { upload } = useUploadFile();
  const toast = useToast();
  const [file, setFile] = useState()

  function handleFile(event){
    setFile(event.target.files[0])
    console.log(event.target.files[0])
  }

  async function handleUpload(event){
    event.preventDefault();

    try {
      await upload(file)
      toast({
        title: 'Upload realizado com sucesso',
        position: 'top-left',
        colorScheme: 'teal',
        duration: '3000',
        isClosable: 'true',
    });
    } catch (error) {
      toast({
        title: 'Não foi possível fazer o upload!',
        position: 'top-left',
        colorScheme: 'red',
        duration: '3000',
        isClosable: 'true',
    });
    console.log(error)
    }
  }

  return(
    <BodyContainer>
        <Form onSubmit={handleUpload}>
          <input type="file" name="file" onChange={handleFile}/>
          <Button type="submit">Upload</Button>
        </Form>
        
        <Button onClick={async () => {
          const response = await signIn("nome", "senha")
          console.log(response)
        }}>Take picture</Button>
        <Button>Modes</Button>
    </BodyContainer>
  );
}

const BodyContainer = styled.div`
  padding: 2rem 5rem;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  gap: 3rem;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  padding: 1rem 2rem;
  border-radius: 1rem;
  background-color: #389393;
  color: white;
  width: 18rem;

  &:hover{
    opacity: 0.5;
    cursor: pointer;
  }
`

export default Body;