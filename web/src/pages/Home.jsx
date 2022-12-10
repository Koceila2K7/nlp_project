/* eslint-disable react/jsx-no-bind */
import React, { useState } from "react";
import ModelSelector from "../components/ModelSelector";
import TextInputBlock from "../components/TextInputBlock";
import { classifyApi } from "../api";
import { NETWORK_ERROR } from "../constants";

export default function Home() {
  const [toSend, setToSend] = useState({ modelType: "lda_model", text: "" });

  function handleOnModelChange(e) {
    setToSend((old) => ({ ...old, modelType: e.target.value }));
  }

  const [result, setResult] = useState(null);

  async function handleOnClassClick() {
    setResult(null);
    try {
      const { data } = await classifyApi(toSend);
      setResult(data?.result);
    } catch (error) {
      setResult(NETWORK_ERROR);
    }
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
        result={result}
      />
    </div>
  );
}
