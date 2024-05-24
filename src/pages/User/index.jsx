import { useNavigate } from "react-router-dom";
import InsideHeader from "../../components/InsideHeader";
import { FormControl, VStack } from "@chakra-ui/react";

const UserPage = () => {
  const navegate = useNavigate();
  const handleGoBack = () => {
    navegate("app/data");
  };
  return (
    <VStack>
      <InsideHeader title="User" handleGoBack={handleGoBack} />
      <FormControl pt={"4.6rem"} pb={"1rem"}>
        <h1>UserPage</h1>
      </FormControl>
    </VStack>
  );
};

export default UserPage;
