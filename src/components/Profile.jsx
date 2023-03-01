import { Stack, HStack, Heading, Text, Textarea, Input, Box, Badge, Select } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import InterestBadges from './Profile-components/InterestBadges.jsx';
import ProfileInput from './Profile-components/ProfileInput.jsx';

const profileInformation = [
  {
    name: "Name",
    type: "text",
  },
  {
      name: "About me",
      type: "text",
  },
  {
      name: "Looking for",
      type: "choice",
      choices: ["dating", "relationship"],
  },
  {
      name: "Languages",
      type: "choice",
      choices: ["English", "Spanish", "Mandarin", "Hindi", "Arabic", "Portuguese", "Bengali", "Japanese", "German"],
  },
  {
      name: "Zodiac sign",
      type: "choice",
      choices: ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"],
  },
  {
      name: "Education",
      type: "choice",
      choices: ["High School", "Associate's Degree", "Bachelor's Degree", "Master's Degree", "Doctorate Degree", "Vocational School", "Trade School", "Homeschool", "Other"],
  },
  {
      name: "Residence",
      type: "text",
  },
  {
      name: "Job",
      type: "text",
  },
  {
      name: "Drinking",
      type: "choice",
      choices: ["Yes, I drink alcohol", "No, I do not drink alcohol", "I drink occasionally", "I drink socially", "I prefer not to say"],
  },
  {
      name: "Smoking",
      type: "choice",
      choices: ["Non-smoker", "Occasional smoker", "Regular smoker"],
  },
  {
      name: "Children",
      type: "choice",
      choices: ["I have children", "Yes, I want children", "No, I don't want children", "Maybe, I'm not sure yet","Preferences open to discussion"],
  },
  {
      name: "Pets",
      type: "choice",
      choices: ["Cats", "Dogs", "Reptiles", "Fish", "Rabbits", "Small Mammals", "Birds", "Amphibians", "Insects"],
  },
];
const activities = ['art', 'writing', 'photography', 'fitness', 'go to party', 'videogames', 'watching movies', 'reading'];

const Profile = (props) => {
const [selected, setSelected] = useState('');
  return (
    <Stack spacing={2}>
        <Heading as='h2' size='lg'>{props.heading}</Heading>
      <InterestBadges selected={selected} setSelected={setSelected} activities={activities} />
      {profileInformation.map((info, index) => (
      <ProfileInput info ={info} key= {index} />
      ))}
    </Stack>
  );
};

export default Profile;