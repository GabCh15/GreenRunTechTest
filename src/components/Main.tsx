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
height: 816px;
width: 408px;
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

const DivB = styled.div`
  border-radius: 20px ;
  background: ${props => {return props.theme.palette.main.fondo}};
  padding: 26px 40px 10px 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const DivBTitleText = styled.div`
  font-family: DM Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 122.02%;
  text-align: left;  
`;

const DivBText = styled.div`  
  padding-top: 8px;  
  font-size: 20px;
`;

const DivBButton = styled(Link)`
  display: flex;
  text-decoration:none;
  appearance: none;
  border: none;
  padding: 15px 30px 15px 30px;
  margin: 0;
  margin-top: 20px;
  background: linear-gradient(99deg, #236bfe 6.69%, #0d4ed3 80.95%);
  box-shadow: 0px 4px 30px rgba(34, 105, 251, 0.8);
  border-radius: 15px;
  font-family: DM Sans;
  font-style: normal;
  font-weight: bold;
  text-align: center;
  color: #fefefe;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    background: linear-gradient(99deg, #236bfe 6.69%, #0d4ed3 50.95%);
    opacity: 0.9;
  }
`;

const Main: React.FunctionComponent<IPage & RouteComponentProps<any>> = props => {

    const { updateTema } = useContext(AppContext);

    useEffect(() => {
        logging.info(`> Cargando ${props.name}`);
        console.log(props);
    })

    return (
        <>
            <Section>
                <Contenedor>
                <div></div>
                <DivB>
                    <DivBTitleText className="title">Discover Your Best Sport With Us</DivBTitleText>
                    <DivBText className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </DivBText>
                    <DivBButton to="/login">Login</DivBButton>
                </DivB>
                </Contenedor>
            </Section>
        </>
    );
}

export default Main;
