import { useState } from "react";
import styled from "styled-components";
import { Input, InputGroup, InputRightElement, Button, useToast } from '@chakra-ui/react'
import { RiEye2Line, RiEyeCloseLine } from 'react-icons/ri'

import { colors } from "../../style/color";
import { Link, useNavigate } from "react-router-dom";
import useSignIn from "../../hooks/api/useSignIn";

// TODO SANITIZAÇÂO DE DADOS e CLEAN CODE
const SignIn = () => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  const toast = useToast();
  const navigate = useNavigate();
  const { signIn} = useSignIn();

  //TODO Validar constanstes de login
  const [username, setUsername] = useState('');

  //TODO Ver jeito de criptogravar senha antes de enviar req
  const [password, setPassword] = useState('');

  //TODO implementar token com localstorage
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
    <Container>
      <FormContainer>

        {/* TODO Melhorar titulo ou usar logo */}
        <Title>WSMetrix</Title>
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
                <RiEyeCloseLine size={30}/> : 
                <RiEye2Line size={30}/>}
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


      </FormContainer>

    </Container>
  )
}

const Container = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(50deg, ${colors.darkMain} 0%, ${colors.main} 100%);

`

const Title = styled.p`
  font-size: 2.8rem;
  font-weight: bold;
  padding-bottom: 3rem;
`

const FormContainer = styled.div`
  width: 500px;

    
  display: flex;
  flex-direction: column;

  align-items: center;
  padding: 4rem;

  background-color: rgba(255, 255, 255, 0.2);
  opacity: 0.9;
  color: ${colors.white};
  border-radius: 40px;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

export default SignIn;