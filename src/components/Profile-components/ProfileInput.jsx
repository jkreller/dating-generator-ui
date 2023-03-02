import { FormControl, Select, Input, Box } from "@chakra-ui/react";


function ProfileInput({info, onChange, isRequired}) {
  return (
    <FormControl key={info.name} id={info.name} isRequired={info.required}>
      {info.type === "choice" ? (
        <Box>
          <Select name={info.name} placeholder={info.name} onChange={onChange}>
            {info.choices.map((choice) => (
              <option key={choice} value={choice}>
                {choice}
              </option>
            ))}
          </Select>
        </Box>
      ) : (
        <Box>
          <Input name={info.name} placeholder={info.name} onChange={onChange} />
        </Box>
      )}
    </FormControl>
  );
}
export default ProfileInput;