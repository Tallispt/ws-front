import {
  Input,
  InputGroup,
  InputRightElement,
  Button,
  useToast,
  useBoolean,
  Stack,
  IconButton,
} from "@chakra-ui/react";
import { RiEye2Line, RiEyeCloseLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";

import { colors } from "../../style/color";
import useSignUp from "../../hooks/api/useSignup";
import SignPage from "../SignPage";
import { signUpSchema } from "../../schemas/signUpSchema";

const SignUp = () => {
  const [show, setShow] = useBoolean();
  const [showConfirmation, setShowConfirmation] = useBoolean();

  const toast = useToast();
  const navigate = useNavigate();
  const { signUp, signUpLoading } = useSignUp();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: joiResolver(signUpSchema),
  });

  const onValidating = (e) => {
    e && toast({ title: e.message, colorScheme: "red" });
  };

  const onSubmit = async (data) => {
    delete data.repeatPassword;

    try {
      await signUp(data);
      toast({ title: "Inscrito com sucesso! Por favor, faça login" });
      navigate("/sign-in");
    } catch (e) {
      toast({
        title: "Não foi possível fazer o cadastro!",
        description: e.response?.data?.error,
        colorScheme: "red",
      });
    }
  };

  return (
    <SignPage>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={[6, 8]}>
          <InputGroup display={"flex"} flexDirection={"column"} gap={[2, 4]}>
            <Input
              id="username"
              placeholder="Nome do usuário"
              {...register("username")}
              isRequired
              isInvalid={errors.username}
              onInvalid={() => onValidating(errors.username)}
              size={["sm", "md", "lg"]}
              focusBorderColor="gray.100"
              color={colors.gray600}
              textColor={colors.gray600}
              background={colors.background}
            />

            <Input
              id="email"
              placeholder="E-mail"
              {...register("email")}
              isRequired
              isInvalid={errors.email}
              onInvalid={() => onValidating(errors.email)}
              size={["sm", "md", "lg"]}
              focusBorderColor="gray.100"
              color={colors.gray600}
              textColor={colors.gray600}
              background={colors.background}
            />

            <InputGroup>
              <Input
                id="password"
                placeholder="Senha"
                {...register("password")}
                isRequired
                isInvalid={errors.password}
                onInvalid={() => onValidating(errors.password)}
                size={["sm", "md", "lg"]}
                focusBorderColor="gray.100"
                color={colors.gray600}
                textColor={colors.gray600}
                type={show ? "text" : "password"}
                background={colors.background}
              />
              <InputRightElement>
                <IconButton
                  onClick={setShow.toggle}
                  color={colors.main}
                  background={"transparent"}
                  icon={!show ? <RiEye2Line /> : <RiEyeCloseLine />}
                />
              </InputRightElement>
            </InputGroup>

            <InputGroup>
              <Input
                id="repeatPassword"
                placeholder="Confirmar senha"
                {...register("repeatPassword")}
                isRequired
                isInvalid={errors.repeatPassword}
                onInvalid={() => onValidating(errors.repeatPassword)}
                size={["sm", "md", "lg"]}
                focusBorderColor="gray.100"
                color={colors.gray600}
                textColor={colors.gray600}
                type={showConfirmation ? "text" : "password"}
                background={colors.background}
              />
              <InputRightElement>
                <IconButton
                  onClick={setShowConfirmation.toggle}
                  color={colors.main}
                  background={"transparent"}
                  icon={!showConfirmation ? <RiEye2Line /> : <RiEyeCloseLine />}
                />
              </InputRightElement>
            </InputGroup>
          </InputGroup>

          <Stack spacing={[2, 4]}>
            <Button
              type="submit"
              backgroundColor={colors.black}
              colorScheme="gray"
              color={colors.white}
              isLoading={signUpLoading}
              size={["sm", "md", "lg"]}
            >
              Inscrever
            </Button>
            <Button
              to={"/sign-in"}
              as={Link}
              backgroundColor={colors.teal900}
              colorScheme="gray"
              color={colors.white}
              isDisabled={isSubmitting}
              size={["sm", "md", "lg"]}
            >
              Já possuo conta
            </Button>
          </Stack>
        </Stack>
      </form>
    </SignPage>
  );
};

export default SignUp;
