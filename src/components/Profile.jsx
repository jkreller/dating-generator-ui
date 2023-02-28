import { Stack, HStack, Heading, Text, Textarea, Input, Box, Badge, Select } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import InterestBadges from './Profile-components/InterestBadges.jsx';
import ProfileInput from './Profile-components/ProfileInput.jsx';

const profileInformation = [
  {
    name: "Looking for",
    type: "choice",
    choices: ["dating", "relationship"],
  },
  {
    name: "Name",
    type: "text",
  },
];

 const interests = ['Sports', 'Movies', 'Reading', 'Gaming', 'Hiking'];

const Profile = (props) => {
    const [selected, setSelected] = useState('');
    return (
        <Stack spacing={2}>
            <Heading as='h2' size='lg'>{props.heading}</Heading>
            <InterestBadges selected={selected} setSelected={setSelected} interests={interests} />
            {profileInformation.map((info, index) => (
                <ProfileInput info ={info} key= {index} />
            ))}
        </Stack>
    );
};

export default Profile;