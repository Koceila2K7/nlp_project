import { Grid } from "@mui/material";
import React from "react";
import TextInput from "./TextInput";
import TextResult from "./TextResult";

export default function TextInputBlock({
  onChange,
  value,
  handleOnClassClick,
}) {
  return (
    <Grid
      container
      elevation={10}
      style={{
        background: "white",
        borderRadius: "5px",
        padding: 5,
        paddingRight: 10,
        paddingLeft: 10,
        boxShadow: "2px 2px 2px 2px #0F2B46A",
        border: "solid .2px #E4E4E4A",
        marginTop: 10,
      }}
    >
      <Grid item md={6} xs={12}>
        <TextInput
          onChange={onChange}
          value={value}
          handleOnClassClick={handleOnClassClick}
        />
      </Grid>

      <Grid item md={6} xs={12}>
        <TextResult />
      </Grid>
    </Grid>
  );
}
