import { Input, InputGroup, InputRightElement, Button, useToast, FormControl, useBoolean } from '@chakra-ui/react'
import { useContext } from "react";
import styled from "styled-components";
import { RiEye2Line, RiEyeCloseLine } from 'react-icons/ri'
import { useForm } from "react-hook-form"
import { joiResolver } from '@hookform/resolvers/joi'

import { colors } from "../../style/color";
import { Link, useNavigate } from "react-router-dom";
import useSignIn from "../../hooks/api/useSignIn";
import SignPage from "../SignPage";
import UserContext from "../../context/userContext";
import { signInSchema } from "../../schemas/signInSchema";

const SignIn = () => {

  const [show, setShow] = useBoolean()

  const toast = useToast();
  const { signIn } = useSignIn();
  const navigate = useNavigate();
  const { setUserData } = useContext(UserContext);
  const { handleSubmit, register, formState: { errors, isSubmitting } } = useForm({
    resolver: joiResolver(signInSchema)
  });

  const onSubmit = async data => {

    try {
      const userData = await signIn(data)
      setUserData(userData)
      toast({ title: 'Login realizado com sucesso' });
      navigate('/app/analysis');
    } catch (e) {
      toast({
        title: 'Não foi possível realizar o login!',
        description: e.response?.data?.error,
        colorScheme: 'red'
      });
    }
  }

  return (
    <SignPage>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Form>
          <InputGroup display={"flex"} flexDirection={"column"} gap={3}>
            <Input
              id='username'
              placeholder="E-mail ou usuário"
              {...register('username')}
              isRequired
              isInvalid={errors.username}
              size='lg'
              focusBorderColor='gray.100'
              color={colors.gray600}
              textColor={colors.gray600}
              background={colors.background}
            />

            <InputGroup size='lg'>
              <Input
                id='password'
                placeholder='Senha'
                {...register('password')}
                isRequired
                isInvalid={errors.password}
                size={"lg"}
                focusBorderColor='gray.100'
                color={colors.gray600}
                textColor={colors.gray600}
                type={show ? 'text' : 'password'}
                background={colors.background}
              />

              <InputRightElement width='4.5rem'>
                <Button
                  size='md'
                  onClick={setShow.toggle}
                  color={colors.main}
                  colorScheme="whiteAlpha"
                >
                  {!show ?
                    <RiEye2Line size={30} /> :
                    <RiEyeCloseLine size={30} />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </InputGroup>

          <Button
            type="submit"
            backgroundColor={colors.gray800}
            colorScheme="gray"
            color={colors.white}
            marginTop={'2rem'}
            marginBottom={3}
            isLoading={isSubmitting}
          >
            Entrar
          </Button>

          <Button
            to={'/sign-up'}
            as={Link}
            backgroundColor={colors.teal900}
            colorScheme="gray"
            color={colors.white}
            isDisabled={isSubmitting}
          >
            Registrar-se
          </Button>
        </Form>
      </form>
    </SignPage>
  )
}

const Form = styled(FormControl)`
  display: flex;
  flex-direction: column;
`

export default SignIn;