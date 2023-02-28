import './App.css';
import Chat from './pages/Chat';
import { ChakraProvider, Container } from '@chakra-ui/react'
import { getPickUpLine, getRoot } from './Api.js';

function App() {
  return (
    <ChakraProvider>
      <Container maxW='5xl' p='0px'>
        <Chat />
      </Container>
    </ChakraProvider>
  );
}

export default App;
