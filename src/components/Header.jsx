import { Button, HStack, VStack, Center } from "@chakra-ui/react";
import Profile from "../components/Profile";

const Header = () => {
  return (
    <Center mb={10}>

        <VStack>
          <Profile heading='Me'/>
          <Profile heading='You'/>

        <Button>Go and chat!</Button>
        </VStack>
    </Center>
  );
};

export default Header;