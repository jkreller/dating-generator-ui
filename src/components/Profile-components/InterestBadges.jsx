import React from 'react';
import { Stack, HStack, Heading, Text, Textarea, Input, Box, Badge, Select, SimpleGrid } from "@chakra-ui/react";

const InterestBadges = ({ selected, setSelected, interests }) => {
  const handleClick = interest => {
    if (selected.includes(interest)) {
      const newSelected = selected.filter(item => item !== interest);
      setSelected(newSelected);
    } else {
      setSelected([...selected, interest]);
    }
  };

  return (
    <SimpleGrid columns={{sm: 3, md: 4, lg: 7}} >
      {interests.map(interest => (
        <Badge
          key={interest}
          m="5px"
          p="5px"
          color={selected.includes(interest) ? 'black' : 'gray'}
          onClick={() => handleClick(interest)}>
          {interest}
        </Badge>
      ))}
    </SimpleGrid>
  );
};

export default InterestBadges;