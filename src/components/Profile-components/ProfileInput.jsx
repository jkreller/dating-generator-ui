import { FormControl, FormLabel, Select, Input, Flex, Box, SimpleGrid } from "@chakra-ui/react";

function ProfileInput({info, onChange}) {
  return (
    <>
        <FormControl key={info.name} id={info.name}>
          <FormLabel>{info.name}</FormLabel>
          {info.type === "choice" ? (
            <Box mb={5}>
              <Select name={info.name} placeholder={`Select ${info.name}`} onChange={onChange}>
                {info.choices.map((choice) => (
                  <option key={choice} value={choice}>
                    {choice}
                  </option>
                ))}
              </Select>
            </Box>
          ) : (
            <Box mb={5}>
              <Input name={info.name} placeholder={`Enter ${info.name}`} onChange={onChange} />
            </Box>
          )}
        </FormControl>
    </>
  );
}
export default ProfileInput;