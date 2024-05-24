import {
  Input,
  InputGroup,
  InputRightElement,
  Button,
  useToast,
  useBoolean,
  Stack,
} from "@chakra-ui/react";
import { useContext } from "react";
import { RiEye2Line, RiEyeCloseLine } from "react-icons/ri";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";

import { colors } from "../../style/color";
import { Link, useNavigate } from "react-router-dom";
import useSignIn from "../../hooks/api/useSignIn";
import SignPage from "../SignPage";
import UserContext from "../../context/userContext";
import { signInSchema } from "../../schemas/signInSchema";

const SignIn = () => {
  const [show, setShow] = useBoolean();

  const toast = useToast();
  const { signIn } = useSignIn();
  const navigate = useNavigate();
  const { setUserData } = useContext(UserContext);
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: joiResolver(signInSchema),
  });

  const onSubmit = async (data) => {
    try {
      const userData = await signIn(data);
      setUserData(userData);
      toast({ title: "Login successfully" });
      navigate("/app/data");
    } catch (e) {
      toast({
        title: "Not able to login!",
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
              placeholder="Username or e-mail"
              {...register("username")}
              isRequired
              isInvalid={errors.username}
              size={["sm", "md", "lg"]}
              focusBorderColor="gray.100"
              color={colors.gray600}
              textColor={colors.gray600}
              background={colors.background}
            />

            <InputGroup
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Input
                id="password"
                placeholder="Password"
                {...register("password")}
                isRequired
                isInvalid={errors.password}
                size={["sm", "md", "lg"]}
                focusBorderColor="gray.100"
                color={colors.gray600}
                textColor={colors.gray600}
                type={show ? "text" : "password"}
                background={colors.background}
              />

              <InputRightElement
                h={"full"}
                onClick={setShow.toggle}
                color={colors.main}
                children={!show ? <RiEye2Line /> : <RiEyeCloseLine />}
              />
            </InputGroup>
          </InputGroup>

          <Stack spacing={[2, 4]}>
            <Button
              type="submit"
              backgroundColor={colors.gray800}
              colorScheme="gray"
              color={colors.white}
              isLoading={isSubmitting}
              size={["sm", "md", "lg"]}
            >
              Sign-in
            </Button>

            <Button
              to={"/sign-up"}
              as={Link}
              backgroundColor={colors.teal900}
              colorScheme="gray"
              color={colors.white}
              isDisabled={isSubmitting}
              size={["sm", "md", "lg"]}
            >
              Create account
            </Button>
          </Stack>
        </Stack>
      </form>
    </SignPage>
  );
};

export default SignIn;
