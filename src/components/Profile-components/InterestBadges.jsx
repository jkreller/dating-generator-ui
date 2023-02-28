import React from 'react';
import { Stack, HStack, Heading, Text, Textarea, Input, Box, Badge, Select } from "@chakra-ui/react";

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
    <>
      {activities.map(activity => (
        <Badge
          key={activity}
          m="7px"
          color={selected.includes(activity) ? 'black' : 'gray'}
          onClick={() => handleClick(activity)}>
          {activity}
        </Badge>
      ))}
    </>
  );
};

export default InterestBadges;