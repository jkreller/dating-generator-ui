import { Stack, HStack, Heading, Text, Textarea, Input, Box, Badge, Select } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import React, { useState } from 'react';



const Profile = (props) => {
const [selected, setSelected] = useState('');
  return (
    <Stack spacing={2}>
        <Heading as='h2' size='lg'>{props.heading}</Heading>
        <Input placeholder='Name' />
        <Textarea placeholder='About me' />
        <Text>Interests</Text>
        <Box>
          <Badge m='7px' color={selected === 'Photography' ? 'green' : 'gray'} onClick={() => setSelected('Photography')}>Photography</Badge>
          <Badge m='7px' color={selected === 'Art' ? 'green' : 'gray'} onClick={() => setSelected('Art')}>Art</Badge>
          <Badge m='7px' color={selected === 'Design' ? 'green' : 'gray'} onClick={() => setSelected('Design')}>Design</Badge>
          <Badge m='7px' color={selected === 'Gym' ? 'green' : 'gray'} onClick={() => setSelected('Gym')}>Gym</Badge>
          <Badge m='7px' color={selected === 'Running' ? 'green' : 'gray'} onClick={() => setSelected('Running')}>Running</Badge>
          <Badge m='7px' color={selected === 'Dancing' ? 'green' : 'gray'} onClick={() => setSelected('Dancing')}>Dancing</Badge>
          <Badge m='7px' color={selected === 'Baseball' ? 'green' : 'gray'} onClick={() => setSelected('Baseball')}>Baseball</Badge>
          <Badge m='7px' color={selected === 'Bowling' ? 'green' : 'gray'} onClick={() => setSelected('Bowling')}>Bowling</Badge>
          <Badge m='7px' color={selected === 'Basketball' ? 'green' : 'gray'} onClick={() => setSelected('Basketball')}>Basketball</Badge>
          <Badge m='7px' color={selected === 'Karaoke' ? 'green' : 'gray'} onClick={() => setSelected('Karaoke')}>Karaoke</Badge>
          <Badge m='7px' color={selected === 'Theater' ? 'green' : 'gray'} onClick={() => setSelected('Theater')}>Theater</Badge>
          <Badge m='7px' color={selected === 'Cooking' ? 'green' : 'gray'} onClick={() => setSelected('Cooking')}>Cooking</Badge>
          <Badge m='7px' color={selected === 'TV' ? 'green' : 'gray'} onClick={() => setSelected('TV')}>TV</Badge>
          <Badge m='7px' color={selected === 'Concerts' ? 'green' : 'gray'} onClick={() => setSelected('Concerts')}>Concerts</Badge>
        </Box>
        <Select placeholder='Looking for'>
          <option value='1'>Relationship</option>
          <option value='2'>Nothing serious</option>
          <option value='3'>I don't know</option>
        </Select>
        <Input placeholder='Location' />
        <Input placeholder='Languages' />
        <Input placeholder='Zodiac Sign' />
        <Input placeholder='Education Degree' />
        <Input placeholder='Job' />
        <Input placeholder='Favourite Artist' />
        <Select placeholder='Exercise'>
          <option value='1'>A lot</option>
          <option value='2'>From time to time</option>
          <option value='3'>Never</option>
        </Select>
        <Select placeholder='Drinking'>
          <option value='1'>A lot</option>
          <option value='2'>From time to time</option>
          <option value='3'>Never</option>
        </Select>
        <Select placeholder='Smoking'>
          <option value='1'>A lot</option>
          <option value='2'>From time to time</option>
          <option value='3'>Never</option>
        </Select>
        <Select placeholder='Kids'>
          <option value='1'>Yes</option>
          <option value='2'>No</option>
          <option value='3'>Maybe</option>
          <option value='3'>Some day</option>
        </Select>
        <Select placeholder='Politics'>
          <option value='1'>Apolitical</option>
          <option value='2'>Moderate</option>
          <option value='3'>Liberal</option>
          <option value='3'>Left</option>
          <option value='4'>Right</option>
        </Select>
        <Select placeholder='Politics'>
          <option value='1'>Agnostic</option>
          <option value='2'>Atheist</option>
          <option value='3'>Buddhist</option>
          <option value='3'>Catholic</option>
          <option value='4'>Christian</option>
          <option value='5'>Hindu</option>
          <option value='6'>Jewish</option>
          <option value='7'>Muslim</option>
          <option value='8'>Latter-day Saint</option>
          <option value='9'>Mormon</option>
          <option value='10'>Zoroastrian</option>
          <option value='11'>Sikh</option>
          <option value='12'>Spiritual</option>
          <option value='13'>Other</option>
        </Select>
        <Input placeholder='Pets' />
        <Select placeholder='Personality'>
          <option value='1'>Introvert</option>
          <option value='2'>Extrovert</option>
          <option value='3'>In between</option>
        </Select>
    </Stack>
  );
};

export default Profile;