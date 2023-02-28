import { Center, Text } from "@chakra-ui/react";
import Clickable from "../components/Clickable";

const Message = ({children, isUser, isOption, onClick}) => {
  return (
    <Clickable onClick={onClick} alignSelf={isUser ? 'flex-start' : 'flex-end'} _disabled={{ pointerEvents: "none" }} isDisabled={onClick ? false : true}>
      <Center borderRadius='lg' p='10px' backgroundColor={isUser ? 'red.100' : 'blue.100'}>
        <Text>{children}</Text>
      </Center>
    </Clickable>
  );
};

export default Message;