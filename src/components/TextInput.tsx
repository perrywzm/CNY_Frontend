import React from "react";
import { TextField } from "@material-ui/core";

interface Props {
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<Props> = props => {
  return (
    <TextField
      style={{ margin: 12, padding: 8, backgroundColor: "rgba(0,0,0,0.2)" }}
      placeholder={props.placeholder}
      onChange={props.onChange}
      InputProps={{
        inputProps: { maxLength: 8 },
        disableUnderline: true
      }}
    />
  );
};

export default TextInput;
