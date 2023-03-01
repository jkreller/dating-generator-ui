import React from 'react';
import { Stack, HStack, Heading, Text, Textarea, Input, Box, Badge, Select, Flex } from "@chakra-ui/react";

const InterestBadges = ({ selected, setSelected, activities }) => {

  const handleClick = activity => {
    if (selected.includes(activity)) {
      const newSelected = selected.filter(item => item !== activity);
      setSelected(newSelected);
    } else {
        setSelected([...selected, activity]);
    }
  };

  return (
<Flex flexDirection="row">
      {activities.map(activity => (
        <Badge
          key={activity}
          m="7px"
          color={selected.includes(activity) ? 'black' : 'gray'}
          onClick={() => handleClick(activity)}>
          {activity}
        </Badge>
      ))}
    </Flex>
  );
};

export default InterestBadges;