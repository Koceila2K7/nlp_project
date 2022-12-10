import React from "react";
import { NETWORK_ERROR } from "../constants";
import errorImg from "../assets/img/error.png";

export default function TextResult({ result }) {
  return (
    <div
      style={{
        minHeight: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        justifyItems: "center",
        alignContent: "center",
      }}
    >
      {result === NETWORK_ERROR ? (
        <img src={errorImg} width="100" alt="error" />
      ) : (
        result !== null && (
          <div>
            <h4>Text class :</h4>
            <div
              style={{
                color: "white",
                background: "#0F2B46",
                padding: 15,
                borderRadius: 5,
                fontStyle: "italic",
              }}
            >
              {result}
            </div>
          </div>
        )
      )}
    </div>
  );
}
