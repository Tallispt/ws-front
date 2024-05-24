import {
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";
import { IoInformationCircleOutline } from "react-icons/io5";

const PopOverInfo = ({ info }) => {
  return (
    <Popover>
      <PopoverTrigger>
        <IconButton
          size={"xs"}
          as={IoInformationCircleOutline}
          variant={"ghost"}
          cursor={"pointer"}
        />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverHeader>Result Info</PopoverHeader>
        <PopoverBody>
          {Object?.keys(info)?.map((item, index) => (
            <li key={index}>
              {item}: {info[item]}
            </li>
          ))}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default PopOverInfo;
