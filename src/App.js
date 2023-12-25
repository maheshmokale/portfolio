import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { themes } from "./theme";
import { GlobalStyles } from "./global";
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

import "./App.css";
import Main from "./pages/Main";
import CustomCursor from "./animationcomponents/cursor/CustomCursor";

import "./App.css";
function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");


  return (

    <ThemeProvider theme={themes[theme]}>
      <>
        <a data-tooltip-id="my-tooltip" data-tooltip-content="Hello world!">
          Test
        </a>
        <GlobalStyles />
        <div>
          <CustomCursor />
          <Tooltip id="my-tooltip" />
          <Main theme={themes[theme]} setTheme={setTheme} />
        </div>

      </>
    </ThemeProvider>


  );

}

export default App;
