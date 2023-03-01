import { FormControl, FormLabel, Select, Input, Flex, Box, SimpleGrid } from "@chakra-ui/react";

function ProfileInput({info}) {
  return (
        <FormControl key={info.name} id={info.name}>

          {info.type === "choice" ? (
          <Box mb={5}>
            <Select w='200px' placeholder={`Select ${info.name}`}  >
              {info.choices.map((choice) => (
                <option key={choice} value={choice}>
                  {choice}
                </option>
              ))}
            </Select>
            </Box>
          ) : (
            <Box mb={5}>
              <Input w='200px' placeholder={`Enter ${info.name}`} />
            </Box>
          )}
        </FormControl>
  );
}
export default ProfileInput;