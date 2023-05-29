import { useState } from "react";
import styled from "styled-components";
import { Input, InputGroup, InputRightElement, Button, useToast } from '@chakra-ui/react'
import { RiEye2Line, RiEyeCloseLine } from 'react-icons/ri'

import { colors } from "../../style/color";
import { Link, useNavigate } from "react-router-dom";
import useSignIn from "../../hooks/api/useSignIn";
import SignPage from "../../components/Sign/SignPage";

const SignIn = () => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  const toast = useToast();
  const navigate = useNavigate();
  const { signIn} = useSignIn();

  const [username, setUsername] = useState('');

  const [password, setPassword] = useState('');

  async function submit(event) {
    event.preventDefault();

      try {
        await signIn(username, password)
        toast({
          title: 'Login realizado com sucesso',
          position: 'top-left',
          colorScheme: 'teal',
          duration: '3000',
          isClosable: 'true',
      });
        navigate('/');
      } catch (error) {
        toast({
          title: 'Não foi possível logar!',
          position: 'top-left',
          colorScheme: 'red',
          duration: '3000',
          isClosable: 'true',
      });
      }
  }

  return (
    <SignPage>
      <Form onSubmit={submit}>
        <InputGroup 
          display={"flex"}
          flexDirection={"column"}
          gap={3}
        >          
        <Input 
          size='lg' 
          focusBorderColor='gray.100'
          color={colors.gray600}
          textColor={colors.gray600}
          placeholder="E-mail ou usuário" 
          isRequired
          background={colors.background}
          value={username}
          onChange={e => setUsername(e.target.value)}
          />
        <InputGroup size='lg'>
          <Input
            size={"lg"}
            focusBorderColor='gray.100'
            color={colors.gray600}
            textColor={colors.gray600}
            placeholder='Senha'
            type={show ? 'text' : 'password'}
            background={colors.background}
            isRequired
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <InputRightElement width='4.5rem'>
            <Button 
              size='md'
              onClick={handleClick} 
              color={colors.main}
              colorScheme="whiteAlpha"
              >
              {!show ? 
              <RiEye2Line size={30}/> : 
              <RiEyeCloseLine size={30}/>}
            </Button>
          </InputRightElement>
        </InputGroup>
        </InputGroup>

        <Button 
          type="submit"
          backgroundColor={colors.gray800}
          colorScheme="gray"
          color={colors.white}
          marginTop={'3rem'}
          marginBottom={3}
        >Entrar</Button>
        <Button 
            backgroundColor={colors.teal900}
            colorScheme="gray"
            color={colors.white}
        >
          <Link to={"/sign-up"}>
            Registrar-se
          </Link>
        </Button>
      </Form>
    </SignPage>
  )
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

export default SignIn;