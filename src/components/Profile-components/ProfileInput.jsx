import { FormControl, FormLabel, Select, Input } from "@chakra-ui/react";

function ProfileInput({info}) {
  return (
    <>
        <FormControl key={info.name} id={info.name}>
          <FormLabel>{info.name}</FormLabel>
          {info.type === "choice" ? (
            <Select placeholder={`Select ${info.name}`}>
              {info.choices.map((choice) => (
                <option key={choice} value={choice}>
                  {choice}
                </option>
              ))}
            </Select>
          ) : (
            <Input placeholder={`Enter ${info.name}`} />
          )}
        </FormControl>
    </>
  );
}

export default ProfileInput;