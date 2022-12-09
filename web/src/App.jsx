import { Box, Container } from "@mui/system";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Home from "./pages/Home";

const outerTheme = createTheme({
  palette: {
    text: {
      primary: "#0F2B46",
    },
    primary: {
      main: "#0F2B46",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={outerTheme}>
      <BrowserRouter>
        <NavBar />
        <Box className="body-app" style={{ height: "100%" }}>
          <Container>
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </Container>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
