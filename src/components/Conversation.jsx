import { Stack, Heading, Flex, Spinner, Center } from "@chakra-ui/react";
import Message from "../components/Message";
import MessageChoices from "../components/MessageChoices";

function Conversation({choices, history, onChoiceSelection, hidden}) {
  const isUser = history.length % 2 === 0;

  return (
    <>
    { !hidden &&
      <Stack spacing={2} w='100%'>
        <Heading as='h2' size='lg'>Conversation</Heading>
        <Flex flexDirection='column' gap={2} w='100%'>
          {history.map((historyItem, index) => (
            <Message key={index} isUser={historyItem.sender === 'P1'}>
              {historyItem.msg}
            </Message>
          ))}
          { choices.length > 0 ? <MessageChoices
            choices={choices}
            onSelect={onChoiceSelection}
            isUser={isUser}
          /> : <Center m='30px'><Spinner/></Center> }
        </Flex>
      </Stack>
    }
    </>
  );
}

export default Conversation;
