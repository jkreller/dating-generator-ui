import React from 'react';
import { Stack, HStack, Heading, Text, Textarea, Input, Box, Badge, Select, Flex } from "@chakra-ui/react";

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
    <Flex flexDirection="row">
      {interests.map(interest => (
        <Badge
          key={interest}
          m="7px"
          color={selected.includes(interest) ? 'black' : 'gray'}
          onClick={() => handleClick(interest)}>
          {interest}
        </Badge>
      ))}
    </Flex>
  );
};

export default InterestBadges;