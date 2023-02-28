import React, { useState, useEffect } from "react";
import { Stack, Heading, Flex } from "@chakra-ui/react";
import Message from "../components/Message";
import MessageOptions from "../components/MessageOptions";
import { getPickUpLine, getRoot } from '../Api.js';

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
    let {choices} = await getPickUpLine({"profile1": {"name":"p1", "profession":"engineer", "favorite food":"noodles"},
                                "profile2": {"name":"p1", "profession":"engineer", "favorite food":"noodles"},
                                "reply_to": null,
                                "msg_attr": [
                                    "witty",
                                    "funny",
                                    "curious to know about each other"
                                ],
                                "history": []});
    console.log(choices[0]);
    if (selectedOption) {
      options = ['test3', 'test4'];
    }
    setOptions(choices[0]);
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