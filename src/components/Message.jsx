import { Center, Text, Flex } from "@chakra-ui/react";

const Message = (props) => {
  return (
    <Center borderRadius='lg' p='10px' alignSelf={props.isUser ? 'flex-start' : 'flex-end'} backgroundColor={props.isUser ? 'red.100' : 'blue.100'}>
      <Text>
        This is a message!
      </Text>
    </Center>
  );
};

export default Message;