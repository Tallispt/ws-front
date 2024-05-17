import { IoMenuOutline } from "react-icons/io5";
import MainLogo from "../MainLogo";
import { Flex, IconButton, useDisclosure } from "@chakra-ui/react";
import SideMenu from "../Drawer";

import { colors } from "../../style/color";
import AlertModal from "../../pages/Data/AlertModal";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: alertIsOpen,
    onOpen: alertOnOpen,
    onClose: alertOnClose,
  } = useDisclosure();

  return (
    <Flex
      backgroundColor={"white"}
      alignItems={"center"}
      justifyContent={"space-between"}
      px={["1rem", "4rem"]}
      py={"0.5rem"}
      position={"fixed"}
      width={"100vw"}
      boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
      zIndex={1}
    >
      <MainLogo />
      <IconButton
        as={IoMenuOutline}
        variant={"ghost"}
        fontSize={["4xl", "5xl"]}
        color={colors.main}
        onClick={onOpen}
        cursor={"pointer"}
      />

      <SideMenu isOpen={isOpen} onClose={onClose} alertOnOpen={alertOnOpen} />
      <AlertModal
        isOpen={alertIsOpen}
        onClose={alertOnClose}
        onOpen={alertOnOpen}
      />
    </Flex>
  );
};

export default Header;
