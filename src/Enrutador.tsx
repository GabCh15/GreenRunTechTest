import React, { useEffect, useState, useContext } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  RouteComponentProps,
} from "react-router-dom";
import logging from "./config/logging";
// # Imports Adicionales
import AuthRoute from './components/AuthRoute'
import { auth } from './config/firebase';
import routes from "./config/routes";
import routesPrivate from "./config/routes-private";

export interface IEnrutadorProps {}

const Enrutador: React.FunctionComponent<IEnrutadorProps> = (props) => {

  const [load, setLoad] = useState<boolean>(true);

  useEffect(() => {
    
    auth.onAuthStateChanged(user => {
      setLoad(false);
    })

  }, []);

  if (load)
    return (<h2>Cargando...</h2>);

  return (
    <>
      <BrowserRouter>
        <Switch>
          {routes.map((route, index) => (             
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  render={(props: RouteComponentProps<any>) => (
                    // # Agregar Component desde routes iterado por: map
                    <route.component name={route.name} {...props} />
                  )}
                />
          ))}

          {routesPrivate.map((route, index) => (
            <Route
                key={index}
                path={route.path}
                exact={route.exact}
                render={(props: RouteComponentProps<any>) => (
                  // # Agregar Component desde routes iterado por: map
                  <AuthRoute>
                    <route.component name={route.name} {...props} {...route.props} />
                  </AuthRoute>
                )}
            />
          ))}

        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Enrutador;
