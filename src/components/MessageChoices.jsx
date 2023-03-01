import { Stack, Text } from "@chakra-ui/react";
import Message from "./Message";

function MessageChoices({ choices, onSelect, isUser }) {
    return (
      <Stack>
        <Text alignSelf={isUser ? 'flex-start' : 'flex-end'}>Select a message:</Text>
        {choices.map((choice, index) => (
          <Message key={index} onClick={() => onSelect(choice)} isUser={isUser}>{choice}</Message>
        ))}
      </Stack>
    );
}

export default MessageChoices;