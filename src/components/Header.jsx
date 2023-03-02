import React, { useState } from 'react';
import { Button, HStack, VStack, Center } from "@chakra-ui/react";
import Profile from "../components/Profile";
import ProfileInputCallbackObject from '../models/ProfileInputCallbackObject';

const Header = ({onConversationStart}) => {
  const [profiles, setProfiles] = useState({
    profile1: {},
    profile2: {}
  });

  const handleProfileChange = (object, profileNumber) => {
    let name;
    let value;

    if (object instanceof ProfileInputCallbackObject) {
      name = object.name;
      value = object.value;
    } else {
      // expect object to be an event
      name = object.target.name;
      value = object.target.value;
    }

    setProfiles(prevProfiles => ({
      ...prevProfiles,
      [`profile${profileNumber}`]: {
        ...prevProfiles[`profile${profileNumber}`],
        [name]: value,
      }
    }));
  };

  return (
    <Center mb={10}>
      <VStack>
        <Profile heading='You' onChange={(event) => handleProfileChange(event, 1)} />
        <Profile heading='Your match' onChange={(event) => handleProfileChange(event, 2)} />

        <Button colorScheme='teal' onClick={() => onConversationStart(profiles)}>Go and chat!</Button>
      </VStack>
    </Center>
  );
};

export default Header;