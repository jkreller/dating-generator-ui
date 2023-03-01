import React, { useState } from 'react';
import { Stack, Heading } from "@chakra-ui/react";
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

const Profile = ({heading, onChange}) => {
    const [selectedInterest, setSelectedInterest] = useState('');
    
    return (
        <Stack spacing={2}>
            <Heading as='h2' size='lg'>{heading}</Heading>
            <InterestBadges selected={selectedInterest} setSelected={setSelectedInterest} interests={interests} />
            {profileInformation.map((info, index) => (
                <ProfileInput key={index} info={info} onChange={onChange} />
            ))}
        </Stack>
    );
};

export default Profile;