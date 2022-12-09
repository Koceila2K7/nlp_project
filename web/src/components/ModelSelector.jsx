import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const MODELS = ["Randomforest", "LDA", "BRED", "Bag Of Word", "TextVectoriser"];

export default function ModelSelector({ value, onChange }) {
  return (
    <Box sx={{ minWidth: 200, marginTop: 5 }}>
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel id="demo-simple-select-label">
          Selectioner le modèle
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Selectioner le model"
          onChange={onChange}
        >
          {MODELS.map((el) => (
            <MenuItem key={el} value={el}>
              {el}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
