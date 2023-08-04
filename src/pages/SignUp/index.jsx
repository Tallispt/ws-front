import styled from "styled-components";
import { Input, InputGroup, InputRightElement, Button, useToast, FormControl, useBoolean } from '@chakra-ui/react'
import { RiEye2Line, RiEyeCloseLine } from 'react-icons/ri'
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { joiResolver } from '@hookform/resolvers/joi'

import { colors } from "../../style/color";
import useSignUp from "../../hooks/api/useSignup";
import SignPage from "../SignPage";
import { signUpSchema } from "../../schemas/signUpSchema";

const SignUp = () => {
  const [show, setShow] = useBoolean()
  const [showConfirmation, setShowConfirmation] = useBoolean()

  const toast = useToast();
  const navigate = useNavigate();
  const { signUp, signUpLoading } = useSignUp();

  const { handleSubmit, register, formState: { errors, isSubmitting } } = useForm({
    resolver: joiResolver(signUpSchema)
  });

  const onValidating = (e) => {
    e && toast({ title: e.message, colorScheme: 'red' });
  }

  const onSubmit = async data => {
    delete data.repeatPassword

    try {
      await signUp(data)
      toast({ title: 'Inscrito com sucesso! Por favor, faça login' });
      navigate('/sign-in');
    } catch (e) {
      toast({
        title: 'Não foi possível fazer o cadastro!',
        description: e.response?.data?.error,
        colorScheme: 'red'
      });
    }
  }

  return (
    <SignPage>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Form>
          <InputGroup
            display={"flex"}
            flexDirection={"column"}
            gap={3}
          >
            <Input
              id='username'
              placeholder="Nome do usuário"
              {...register('username')}
              isRequired
              isInvalid={errors.username}
              onInvalid={() => onValidating(errors.username)}
              size='lg'
              focusBorderColor='gray.100'
              color={colors.gray600}
              textColor={colors.gray600}
              background={colors.background}
            />

            <Input
              id='email'
              placeholder="E-mail"
              {...register('email')}
              isRequired
              isInvalid={errors.email}
              onInvalid={() => onValidating(errors.email)}
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
                onInvalid={() => onValidating(errors.password)}
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

            <InputGroup size='lg'>
              <Input
                id='repeatPassword'
                placeholder='Confirmar senha'
                {...register('repeatPassword')}
                isRequired
                isInvalid={errors.repeatPassword}
                onInvalid={() => onValidating(errors.repeatPassword)}
                size={"lg"}
                focusBorderColor='gray.100'
                color={colors.gray600}
                textColor={colors.gray600}
                type={showConfirmation ? 'text' : 'password'}
                background={colors.background}
              />
              <InputRightElement width='4.5rem'>
                <Button
                  size='md'
                  onClick={setShowConfirmation.toggle}
                  color={colors.main}
                  colorScheme="whiteAlpha"
                >
                  {!showConfirmation ?
                    <RiEye2Line size={30} /> :
                    <RiEyeCloseLine size={30} />}
                </Button>
              </InputRightElement>
            </InputGroup>


          </InputGroup>

          <Button
            type="submit"
            backgroundColor={colors.black}
            colorScheme="gray"
            color={colors.white}
            marginTop={'3rem'}
            marginBottom={3}
            isLoading={signUpLoading}
          >Inscrever</Button>
          <Button
            to={'/sign-in'}
            as={Link}
            backgroundColor={colors.teal900}
            colorScheme="gray"
            color={colors.white}
            isDisabled={isSubmitting}
          >
            Já possuo conta
          </Button>
        </Form>
      </form>
    </SignPage>
  )
}

const Form = styled(FormControl)`
  display: flex;
  flex-direction: column;

  Link {
    width: 100%;
  }
`

export default SignUp;