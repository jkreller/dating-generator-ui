import { useState, useEffect } from 'react';
import { Heading, Highlight, Box, chakra, shouldForwardProp } from "@chakra-ui/react";
import Header from "../components/Header";
import Conversation from "../components/Conversation";
import { getPickUpLine } from '../Api.js';
import ProfileHelper from "../helper/ProfileHelper";
import { motion, isValidMotionProp } from "framer-motion"

const AnimationBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const Chat = () => {
  const [profiles, setProfiles] = useState({});
  const [history, setHistory] = useState([]);
  const [choices, setChoices] = useState([]);

  useEffect(() => {
    if (ProfileHelper.areFilledProfiles(profiles)) {
      console.log("Fetching choices");
      fetchChoices().then((choices) => {
        setChoices(choices);
      });
    }
  }, [profiles, history]);

  const handleConversationStart = (profiles) => {
    setProfiles(profiles);
  };

  function handleChoiceSelection(choice) {
    setHistory([...history, {sender: ProfileHelper.getNextProfileIdByHistory(history), msg: choice}]);
    setChoices([]);
  }

  async function fetchChoices() {
    const profileId = ProfileHelper.getNextProfileIdByHistory(history);
    const {choices} = await getPickUpLine(profiles, profileId, history);

    return choices ?? []
  }

  return (
    <>
      <AnimationBox as={motion.div} transition={{ease: 'easeOut', duration: 0.5}} initial={{ y: '-20', opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        <Heading as='h1' size='2xl' mb={10}>
          <Highlight
            query={'AI'}
            styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}
          >
            DAITING.BETTER
          </Highlight>
        </Heading>
      </AnimationBox>
      <AnimationBox as={motion.div} transition={{ease: 'easeOut', duration: 0.5, delay: 0.3}} initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        <Header onConversationStart={handleConversationStart} />
      </AnimationBox>
      <AnimationBox as={motion.div} transition={{ease: 'easeOut', duration: 0.5, delay: 0.6}} initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        <Conversation choices={choices} history={history} onChoiceSelection={handleChoiceSelection} />
      </AnimationBox>
    </>
  );
};

export default Chat;