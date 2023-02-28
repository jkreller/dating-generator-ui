import { Heading, Container } from "@chakra-ui/react";
import Header from "../components/Header";
import Conversation from "../components/Conversation";

const Chat = () => {
  return (
    <Container maxW='6xl'>
      <Heading as='h1' size='2xl' mb={10}>Dating AI</Heading>
      <Header />
      <Conversation />
    </Container>
  );
};

export default Chat;