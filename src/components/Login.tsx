import React, { useEffect, useContext } from "react";
import IPage from "../interfaces/page";
import styled from "styled-components";
import { RouteComponentProps, Link } from "react-router-dom";
import logging from "../config/logging";
import { AppContext } from "../context/appcontext";
import FormField from "../generic-components/FormField";
enum VARIANT {
  PRIMARY,
  SECONDARY,
}

interface IProps {
  variant?: VARIANT;
}

const Section = styled.section<IProps>`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${(props) => {
    return props.theme.palette.common.fondo;
  }};
`;

const Contenedor = styled.div`
  height: 425px;
  width: 208px;
  border-radius: 20px;
  background: #181828;
  padding: 90px 20px 30px 20px;
`;

const DivB = styled.div`
  border-radius: 20px;
  background: #2c2b3e;
  padding: 26px 40px 10px 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const DivBTitleText = styled.div`
  font-family: DM Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 122.02%;
  text-align: center;
  color: #fefefe;
`;

const DivBText = styled.div`
  font-family: Epilogue;
  font-style: normal;
  font-weight: normal;
  color: #fefefe;
  padding-top: 8px;
  text-align: center;
  font-size: 10px;
  opacity: 0.8;
`;

const DivBButton = styled(Link)`
  display: block;
  text-decoration: none;
  appearance: none;
  border: none;
  padding: 10px 18px 10px 18px;
  margin: 0;
  margin-top: 20px;
  background: linear-gradient(99deg, #236bfe 6.69%, #0d4ed3 80.95%);
  box-shadow: 0px 4px 30px rgba(34, 105, 251, 0.8);
  border-radius: 12px;
  font-family: DM Sans;
  font-style: normal;
  font-weight: bold;
  text-align: center;
  color: #fefefe;
  font-size: 10px;
  cursor: pointer;
  width: 20%;
  &:hover {
    background: linear-gradient(99deg, #236bfe 6.69%, #0d4ed3 50.95%);
    opacity: 0.9;
  }
`;

const ContainerInputs = styled.div`
  display: grid;
  grid-gap: 8px;
  margin: 15px 0px;
`;

const Login: React.FunctionComponent<IPage & RouteComponentProps<any>> = (
  props
) => {
  const { updateTema } = useContext(AppContext);

  useEffect(() => {
    logging.info(`> Cargando ${props.name}`);
    console.log(props);
  }, []);

  return (
    <>
      <button
        onClick={() => {
          console.log("RR 2X..");
          //context.updateTema();
          //props.updateTema();
          updateTema(); // Ejecutamos el evento de App.tsx
        }}
      >
        Cambiar Tema
      </button>

      <Section>
        <Contenedor>
          <div></div>
          <DivBTitleText>Welcome</DivBTitleText>
          <DivBText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </DivBText>
          <ContainerInputs>
            <FormField id="" label="User"></FormField>
            <FormField id="" label="Password" type="password"></FormField>
          </ContainerInputs>
          <DivBButton to="/login">Login</DivBButton>
        </Contenedor>
      </Section>
    </>
  );
};

export default Login;
