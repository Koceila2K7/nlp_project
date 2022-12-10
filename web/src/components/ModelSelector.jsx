import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const MODELS = [
  "tfidf_sv_model",
  "bow_sv_model",
  "tfidf_lr_model",
  "bow_lr_model",
  "bow_rf_model",
  "lda_model",
];

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
