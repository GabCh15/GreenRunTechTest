import React, { useEffect, useContext } from "react";
import IPage from "../interfaces/page";
import styled from "styled-components";
import { RouteComponentProps , Link, Route } from "react-router-dom";
import logging from '../config/logging';
// # Imports Adicionales
import { AppContext } from '../context/appcontext';
import routesPrivate from "../config/routes-private";
import AuthRoute from './AuthRoute'
import { Zap } from '@styled-icons/octicons'


const Section = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;  
`;

const Contenedor = styled.div`
  height: 425px;
  width: 208px;
  ${props => {return props.theme.boxShadow}}
  border-radius: 20px 20px 21px 21px;
  background: ${props => {return props.theme.palette.main.fondo}};
  display: grid;
  grid-template-rows: auto 40%;
  box-sizing: border-box;
`;


const Nav = styled.nav `
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 55px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
    background-color: #ffffff;
    display: flex;
    overflow-x: auto;
`;
  
  const NavLink = styled.a `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    min-width: 50px;
    overflow: hidden;
    white-space: nowrap;
    font-family: sans-serif;
    font-size: 13px;
    color: #444444;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
    transition: background-color 0.1s ease-in-out;

    &:hover {
    background-color: #eeeeee;
    }

    .nav__link--active {
    color: #009578;
    }
    
    .nav__icon {
    font-size: 18px;
    }
`;
  
 
  
 
  

const Dashboard: React.FunctionComponent<IPage> = props => {

    const { updateTema } = useContext(AppContext);

    useEffect(() => {
        logging.info(`> Cargando ${props.name}`);
        console.log(props);
    }, [])

    return (
        <>
            <button onClick={() => {
                updateTema();
            }}>Cambiar Tema</button>

            <Section>
                <Contenedor>
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
                    <Nav>
                    </Nav>
                </Contenedor>
            </Section>
        </>
    );
}

export default Dashboard;
