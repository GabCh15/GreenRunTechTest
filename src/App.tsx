import React, { useEffect, useState, useContext } from "react";
import logging from "./config/logging";
// # Imports Adicionales
import { ThemeProvider } from "styled-components";
import { defaultTheme as theme_dark } from "./theme/theme-dark";
import { defaultTheme as theme_light } from "./theme/theme-light";
import { AppContext } from "./context/appcontext";
import GlobalStyle from "./styles/global";
import Enrutador from './Enrutador';

const App: React.FunctionComponent<{}> = (props) => {
  const [tema, setTema] = useState(theme_light);
  const [optionTema, setOptionTema] = useState(true);

  const context = useContext(AppContext);

  const cambiarTema = () => {
    logging.info("Cambiando Tema");
    const bool = !optionTema;
    setOptionTema(bool);

    switch (bool) {
      case false:
        setTema(theme_dark);
        break;
      default:
        setTema(theme_light);
    }
  };

  useEffect(() => {
    logging.info("Iniciando aplicacion");
  }, []);

  return (
    <div>
      <AppContext.Provider value={{ ...context, updateTema: cambiarTema }}>
        <ThemeProvider theme={tema}>
          <GlobalStyle />
          <Enrutador />
        </ThemeProvider>
      </AppContext.Provider>
    </div>
  );
};

export default App;
