import { Stack, Heading, Flex } from "@chakra-ui/react";
import Message from "../components/Message";

const Conversation = () => {
  return (
    <Stack spacing={2} w='100%'>
      <Heading as='h2' size='lg'>Conversation</Heading>
      <Flex flexDirection='column' gap={2} w='100%'>
        <Message />
        <Message isUser='true'/>
      </Flex>
    </Stack>
  );
};

export default Conversation;