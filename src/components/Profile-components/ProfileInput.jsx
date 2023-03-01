import { FormControl, FormLabel, Select, Input, Flex } from "@chakra-ui/react";

function ProfileInput({info}) {
  return (
        <FormControl key={info.name} id={info.name}>
        <Flex flexDirection="row">
          <FormLabel>{info.name}</FormLabel>
          {info.type === "choice" ? (
            <Select placeholder={`Select ${info.name}`}size="sm" mb="1rem" w="15rem"  >
              {info.choices.map((choice) => (
                <option key={choice} value={choice}>
                  {choice}
                </option>
              ))}
            </Select>
          ) : (
            <>
              <Input placeholder={`Enter ${info.name}`} size="sm" mb="1rem" w="15rem" />
            </>
          )}
            </Flex>
        </FormControl>
  );
}
export default ProfileInput;