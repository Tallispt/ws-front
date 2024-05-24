import { Image } from "@chakra-ui/react";
import LoadingGif from "../../assets/loading.gif";

const Loading = ({ w = "5rem" }) => {
  return <Image src={LoadingGif} w={w} />;
};

export default Loading;
