import React, { useEffect, useContext } from "react";
import IPage from "../interfaces/page";
import styled from "styled-components";
import { RouteComponentProps , Link } from "react-router-dom";
import logging from '../config/logging';
import { AppContext } from '../context/appcontext';


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
  background-image: url(/img/main.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;


const Main: React.FunctionComponent<IPage & RouteComponentProps<any>> = props => {

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
                    
                </Contenedor>
            </Section>
        </>
    );
}

export default Main;
