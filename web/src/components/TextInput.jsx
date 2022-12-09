import { Button, TextField } from "@mui/material";
import React from "react";

export default function TextInput({ onChange, value, handleOnClassClick }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <TextField
        fullWidth
        id="standard-multiline-static"
        label="Votre texte ..."
        multiline
        rows={4}
        value={value}
        onChange={onChange}
        variant="standard"
      />
      <div style={{ display: "flex", justifyContent: "end", marginTop: 10 }}>
        <Button variant="contained" onClick={handleOnClassClick}>
          Class
        </Button>
      </div>
    </div>
  );
}
