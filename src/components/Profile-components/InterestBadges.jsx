import React, { useState } from 'react';
import { Badge, Box } from "@chakra-ui/react";
import Clickable from "../Clickable";
import ProfileInputCallbackObject from '../../models/ProfileInputCallbackObject';

const InterestBadges = ({ interests, onChange }) => {
  const [selected, setSelected] = useState([]);

  const handleClick = interest => {
    let newSelected;
    if (selected.includes(interest)) {
      newSelected = selected.filter(item => item !== interest);
    } else {
      newSelected = [...selected, interest];
    }

    setSelected(newSelected);
    onChange(new ProfileInputCallbackObject('interests', newSelected));
  };

  return (
    <Box maxW='800px'>
      {interests.map((interest, index) => (
        <Clickable key={index} onClick={() => handleClick(interest)} id='interests'>
          <Badge key={index} m='5px' p='7px' color={selected.includes(interest) ? 'white' : 'black'} background={selected.includes(interest) ? '#ff4d73' : 'gray.100'} borderRadius={5}>
            {interest}
          </Badge>
        </Clickable>
      ))}
    </Box>
  );
};

export default InterestBadges;