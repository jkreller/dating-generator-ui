import { useState, useEffect } from 'react';
import { Stack, Heading, Flex, Spinner } from "@chakra-ui/react";
import Message from "../components/Message";
import MessageChoices from "../components/MessageChoices";
import { getPickUpLine } from '../Api.js';

function Conversation() {
  const [history, setHistory] = useState([]);
  const [choices, setChoices] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    fetchChoices(null, abortController);

    return () => abortController.abort();
  }, []);

  async function fetchChoices(selectedChoice, abortController) {
    const {choices} = await getPickUpLine({
      "profile1": {"name":"Cathreen", "profession":"engineer", "favorite food":"noodles"},
      "profile2": {"name":"Paul", "profession":"engineer", "favorite food":"noodles"},
      "sender": "p1",
      "msg_attr": [
          "witty",
          "funny",
          "curious to know about each other"
      ],
      "history": history
    }, abortController);

    if (choices) {
      setChoices(choices);

      if (selectedChoice) {
        setHistory(prevHistory => [...prevHistory, selectedChoice]);
      }
    }
  }

  function handleChoiceSelection(choice) {
    fetchChoices(choice);
  }

  return (
    <Stack spacing={2} w='100%'>
      <Heading as='h2' size='lg'>Conversation</Heading>
      <Flex flexDirection='column' gap={2} w='100%'>
        {history.map((message, index) => (
          <Message key={index} isUser={index % 2 === 0}>
            {message}
          </Message>
        ))}
        { choices.length > 0 ? <MessageChoices
          choices={choices}
          onSelect={handleChoiceSelection}
          isUser={history.length % 2 === 0}
        /> : <Spinner />}
      </Flex>
    </Stack>
  );
}

export default Conversation;
