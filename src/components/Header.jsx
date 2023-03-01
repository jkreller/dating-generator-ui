import React, { useState } from 'react';
import { Button, HStack, VStack, Center } from "@chakra-ui/react";
import Profile from "../components/Profile";

const Header = ({onConversationStart}) => {
  const [profiles, setProfiles] = useState({
    profile1: {},
    profile2: {}
  });

  const handleProfileChange = (event, profileNumber) => {
    setProfiles(prevProfiles => ({
      ...prevProfiles,
      [`profile${profileNumber}`]: {
        ...prevProfiles[`profile${profileNumber}`],
        [event.target.name]: event.target.value
      }
    }));
  };

  return (
    <Center mb={10}>
      <VStack>
        <Profile heading='You' onChange={(event) => handleProfileChange(event, 1)} />
        <Profile heading='Your match' onChange={(event) => handleProfileChange(event, 2)} />

        <Button onClick={() => onConversationStart(profiles)}>Go and chat!</Button>
      </VStack>
    </Center>
  );
};

export default Header;