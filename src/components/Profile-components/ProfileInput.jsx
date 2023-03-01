import { FormControl, FormLabel, Select, Input } from "@chakra-ui/react";

function ProfileInput({info, onChange}) {
  return (
    <FormControl key={info.name} id={info.name}>
      <FormLabel>{info.name}</FormLabel>
      {info.type === "choice" ? (
        <Select name={info.name} placeholder={info.name} onChange={onChange}>
          {info.choices.map((choice) => (
            <option key={choice} value={choice}>
              {choice}
            </option>
          ))}
        </Select>
      ) : (
        <Input name={info.name} placeholder={info.name} onChange={onChange} />
      )}
    </FormControl>
  );
}

export default ProfileInput;