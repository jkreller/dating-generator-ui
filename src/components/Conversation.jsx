import React, { useState, useEffect } from "react";
import { Stack, Heading, Flex } from "@chakra-ui/react";
import Message from "../components/Message";
import MessageOptions from "../components/MessageOptions";

const Conversation = () => {
  const [history, setHistory] = useState([]);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    fetchOptions();
  }, []);

  const handleOptionSelection = (option) => {
    fetchOptions(option);
    setHistory([...history, option]);
  };

  const fetchOptions = async (selectedOption) => {
    let options = ['test1', 'test2']; // API Call
    if (selectedOption) {
      options = ['test3', 'test4'];
    }
    setOptions(options);
  };

  return (
    <Stack spacing={2} w='100%'>
      <Heading as='h2' size='lg'>Conversation</Heading>
      <Flex flexDirection='column' gap={2} w='100%'>
        {history.map((message, index) => (
          <Message key={index} isUser={index % 2 === 0}>{message}</Message>
        ))}
        <MessageOptions options={options} onSelect={handleOptionSelection} />
      </Flex>
    </Stack>
  );
};

export default Conversation;