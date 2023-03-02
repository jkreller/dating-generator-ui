import { useState, useEffect } from 'react';
import { Heading, Highlight } from "@chakra-ui/react";
import Header from "../components/Header";
import Conversation from "../components/Conversation";
import { getPickUpLine } from '../Api.js';
import ProfileHelper from "../helper/ProfileHelper";

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
    const profileId = ProfileHelper.getNextProfileIdByHistory(history);
    setHistory([...history, `${profileId}: ${choice}`]);
    setChoices([]);
  }

  async function fetchChoices() {
    const profileId = ProfileHelper.getNextProfileIdByHistory(history);
    const {choices} = await getPickUpLine(profiles, profileId, history);

    return choices
  }

  return (
    <>
      <Heading as='h1' size='2xl' mb={10}>
      <Highlight
        query={'AI'}
        styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}
      >
        DAITING.BETTER
        </Highlight>
      </Heading>
      <Header onConversationStart={handleConversationStart} />
      <Conversation choices={choices} history={history} onChoiceSelection={handleChoiceSelection} />
    </>
  );
};

export default Chat;