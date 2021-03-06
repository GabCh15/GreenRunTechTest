import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  RouteComponentProps,
} from "react-router-dom";
// # Imports Adicionales
import { auth } from './config/firebase';
import routes from "./config/routes";
import Dashboard from './components/Dashboard';

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
                    <route.component name={route.name} {...props} />
                  )}
                />
          ))}

          <Dashboard name="dashboard" />

        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Enrutador;
