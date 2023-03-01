import { Stack, Heading } from "@chakra-ui/react";
import React, { useState } from 'react';
import InterestBadges from './Profile-components/InterestBadges.jsx';
import ProfileInput from './Profile-components/ProfileInput.jsx';

const profileInformation = [
  {
    name: "Name",
    type: "text",
  },
  {
    name: "Looking for",
    type: "choice",
    choices: ["dating", "relationship"],
  },
  {
    name: "Favourite Food",
    type: "text",
  },
  {
    name: "Profession",
    type: "text",
  }
];

 const interests = ['Sports', 'Movies', 'Reading', 'Gaming', 'Hiking'];

const Profile = (props) => {
    const [selected, setSelected] = useState('');
    return (
        <Stack spacing={2}>
            <Heading as='h2' size='lg'>{props.heading}</Heading>
            <InterestBadges selected={selected} setSelected={setSelected} interests={interests} />
            {profileInformation.map((info, index) => (
                <ProfileInput key={index} info={info} />
            ))}
        </Stack>
    );
};

export default Profile;