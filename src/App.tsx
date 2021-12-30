import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch, RouteComponentProps} from 'react-router-dom';
import logging from './config/logging';
import routes from './config/routes';
import { ThemeProvider } from 'styled-components';
import { defaultTheme as theme_dark } from './theme/theme-dark'
import { defaultTheme as theme_light } from './theme/theme-light'
import { AppContext } from './context/appcontext'
import GlobalStyle from './styles/global'

const App: React.FunctionComponent<{}> = props => {

  const [tema, setTema] = useState(theme_light);
  const [optionTema, setOptionTema] = useState(true);

  const cambiarTema = () => {
    logging.info('Cambiando Tema');
    const bool = !optionTema;
    setOptionTema(bool);
    
    switch(bool){
      case false:
        setTema(theme_dark);
        break;
      default:
        setTema(theme_light);
    }
    
  }

  useEffect(() => {
    logging.info('Iniciando aplicacion');
  }, [])

  return (
    <div>
      <AppContext.Provider value={{updateTema: cambiarTema}}>
        <ThemeProvider theme={tema}>
          <GlobalStyle />
          <BrowserRouter>
            <Switch>
              {routes.map((route, index) => {
                return (
                  <Route 
                    key={index} 
                    path={route.path}
                    exact={route.exact}
                    render={(props: RouteComponentProps<any>) => (
                      // # Agregar Component desde routes iterado por: map
                      <route.component
                        name={route.name}                      
                        {...props}
                        {...route.props}
                      />
                    )}
                  />
                )
              })}
            </Switch>
          </BrowserRouter>
        </ThemeProvider>
      </AppContext.Provider>
    </div>
  )

}

export default App;
