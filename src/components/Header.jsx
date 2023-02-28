import { Button, HStack, VStack, Center } from "@chakra-ui/react";
import Profile from "../components/Profile";

const Header = () => {
  return (
    <Center mb={10}>
      <VStack>
        <HStack>
          <Profile heading='You'/>
          <Profile heading='Your match'/>
        </HStack>
        <Button>Go and chat!</Button>
      </VStack>
    </Center>
  );
};

export default Header;