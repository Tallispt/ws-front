import { useContext } from "react";
import UserContext from "../../context/userContext";
import { Link } from "react-router-dom";
import { IoStatsChartOutline, IoOptionsOutline } from "react-icons/io5";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerFooter,
  DrawerCloseButton,
  DrawerHeader,
  Divider,
  Avatar,
  Heading,
  Flex,
  Button,
  VStack,
  DrawerBody,
  Icon,
  Text,
} from "@chakra-ui/react";
import { colors } from "../../style/color";

const Pages = [
  {
    name: "Results",
    icon: IoStatsChartOutline,
    route: "/app/data",
  },
  {
    name: "Settings",
    icon: IoOptionsOutline,
    route: "/app/settings",
  },
];

const SideMenu = ({ ...props }) => {
  const { userData } = useContext(UserContext);

  return (
    <Drawer isOpen={props.isOpen} onClose={props.onClose} size={"full"}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton size={"lg"} color={colors.main} />
        <DrawerHeader>
          <Flex
            as={Link}
            to={"/app/user"}
            alignItems={"center"}
            gap={"2rem"}
            p={"1.5rem 0 0 1rem"}
            _hover={{ opacity: "0.8" }}
            // onClick={() => navigate("app/user")}
          >
            <Avatar color={colors.gray} size={["md", "lg"]} />
            <Heading as={"h1"} size={["md", "lg"]} fontWeight={700}>
              {userData?.username}
            </Heading>
          </Flex>
        </DrawerHeader>
        <Divider m={"1rem"} />
        <DrawerBody mr={"1.5rem"}>
          <VStack alignItems={"flex-start"} pl={"1.5rem"} spacing={"2rem"}>
            {Pages.map((page, i) => (
              <Flex
                as={Link}
                key={i}
                to={page.route}
                onClick={props.onClose}
                alignItems={"center"}
                gap={"1rem"}
                cursor={"pointer"}
                _hover={{ opacity: "0.8" }}
              >
                <Icon as={page.icon} fontSize={["3xl", "4xl", "5xl"]} />
                <Text fontSize={["xl", "2xl"]}> {page.name} </Text>
              </Flex>
            ))}
          </VStack>
        </DrawerBody>
        <DrawerFooter justifyContent={"center"}>
          <Button size={["md", "lg"]} onClick={props.alertOnOpen}>
            Exit account
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default SideMenu;
