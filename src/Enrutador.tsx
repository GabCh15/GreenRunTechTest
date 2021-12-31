import React, { useEffect, useState, useContext } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  RouteComponentProps,
} from "react-router-dom";
import logging from "./config/logging";
import routes from "./config/routes";
import routesPrivate from "./config/routes-private";
// # Imports Adicionales
import { AppContext } from "./context/appcontext";
import ProtectedRoute from "./generic-components/ProtectedRoute";

const Enrutador: React.FunctionComponent<{}> = (props) => {

  const context = useContext(AppContext);
 
  if(context.isAuth()) {
    console.log('> Iniciando login');
    
  }

  console.log('AppContext', context);

  useEffect(() => {
    logging.info("Iniciando aplicacion");
  }, []);

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
            <ProtectedRoute
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
              isAuthenticated={context.isAuth() ? context.isAuth() : false}
              authenticationPath="/login"
            />
          ))}

        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Enrutador;
