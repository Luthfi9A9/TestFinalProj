import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
// TODO: answer here
const myTheme = extendTheme({
  colors: {
    textColor: {
      baseText: "#001C30",
      textDelete: "#ED2B2A",
      baseButton: "#DDE6ED",
    },
    bgColor: {
      baseBgNavbarFoot: "#9DB2BF",
      baseBg: "#F1F6F9",
      baseBgButton: "#001C30",
    },
  },
  styeling: {
    sizes: {
      sm: {},
      md: {},
      xl: {},
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme={myTheme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ChakraProvider>
);
