import React, { useEffect, useState } from "react";
import logging from "./config/logging";
// # Imports Adicionales
import { ThemeProvider } from "styled-components";
import { defaultTheme as theme_dark } from "./theme/theme-dark";
import { defaultTheme as theme_light } from "./theme/theme-light";
import { AppContext } from "./context/appcontext";
import GlobalStyle from "./styles/global";
import { app } from "./config/firebase-setup";
import { getAuth } from "firebase/auth";
import Enrutador from './Enrutador';

const auth = getAuth();

const App: React.FunctionComponent<{}> = (props) => {
  const [tema, setTema] = useState(theme_light);
  const [optionTema, setOptionTema] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  const getAuth = () => {
    return isAuth;
  };


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
    app;
  }, []);

  return (
    <div>
      <AppContext.Provider value={{ updateTema: cambiarTema, auth: auth, isAuth: getAuth, setIsAuth: setIsAuth }}>
        <ThemeProvider theme={tema}>
          <GlobalStyle />
          <Enrutador />
        </ThemeProvider>
      </AppContext.Provider>
    </div>
  );
};

export default App;
