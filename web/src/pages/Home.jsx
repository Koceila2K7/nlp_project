/* eslint-disable react/jsx-no-bind */
import React, { useState } from "react";
import ModelSelector from "../components/ModelSelector";
import TextInputBlock from "../components/TextInputBlock";

export default function Home() {
  const [toSend, setToSend] = useState({ modelType: "LDA", text: "" });

  function handleOnModelChange(e) {
    setToSend((old) => ({ ...old, modelType: e.target.value }));
  }

  function handleOnClassClick() {
    console.log({ toSend });
  }

  function handleOnTextChange(e) {
    setToSend((old) => ({ ...old, text: e.target.value }));
  }

  return (
    <div
      style={{
        paddingTop: 12,
        display: "flex",
        flexDirection: "column",
        justifyContent: "stretch",
        alignContent: "stretch",
        alignItems: "stretch",
        justifyItems: "stretch",
      }}
    >
      <ModelSelector onChange={handleOnModelChange} value={toSend.modelType} />
      <TextInputBlock
        onChange={handleOnTextChange}
        value={toSend.text}
        onClassClick={handleOnClassClick}
        handleOnClassClick={handleOnClassClick}
      />
    </div>
  );
}
