import React, { useEffect, useContext } from "react";
import IPage from "../interfaces/page";
import styled from "styled-components";
import { RouteComponentProps, Link, useHistory } from "react-router-dom";
import logging from "../config/logging";
// # Imports adicionales
import { AppContext } from "../context/appcontext";
import FormField from "../generic-components/FormField";
import { auth } from "../config/firebase";

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
  ${(props) => {
    return props.theme.boxShadow;
  }}
  border-radius: 20px 20px 21px 21px;
  background: ${(props) => {
    return props.theme.palette.main.fondo;
  }};
  padding: 90px 20px 30px 20px;
  box-sizing: border-box;
`;

const DivBTitleText = styled.div`
  font-family: DM Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 122.02%;
  text-align: center;

`;

const DivBText = styled.div`
  font-family: Epilogue;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  opacity: 0.8;
`;

const DivBButton = styled.input`
  display: flex;
  text-decoration: none;
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

const ContainerInputs = styled.div`
  display: grid;
  grid-gap: 8px;
  margin: 15px 0px;
`;

const signIn = (mail: string, pass: string, history: any) => {
  console.log("# Auth");

  auth
    .createUserWithEmailAndPassword(mail, pass)
    .then((res) => {
      history.push("/home");
    })
    .catch((error) => {
      alert("No se ha podido registrar");
    });
};

const Register: React.FunctionComponent<IPage & RouteComponentProps<any>> = (
  props
) => {
  const history = useHistory();

  const { updateTema } = useContext(AppContext);
  const [emailInput, setEmailInput] = React.useState(
    React.useRef<HTMLInputElement>(null)
  );
  const [passwordInput, setPasswordInput] = React.useState(
    React.useRef<HTMLInputElement>(null)
  );

  const formHandle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form handle");
    const mail = emailInput.current ? emailInput.current.value : "";
    const pass = passwordInput.current ? passwordInput.current.value : "";
    signIn(mail, pass, history);
  };

  useEffect(() => {
    logging.info(`> Cargando ${props.name}`);
    console.log(props);
  });

  return (
    <>
      <Section>
        <Contenedor>
          <DivBTitleText className="title">Register</DivBTitleText>
          <DivBText className="text" style={{ textAlign: "center", padding: "20px 50px 20px 50px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </DivBText>
          <form onSubmit={formHandle}>
            <ContainerInputs>
              <FormField
                onChange={() => {}}
                name="user"
                id=""
                label="User"
                placeholder="UserName..."
                setRef={setEmailInput}
              />
              <FormField
                onChange={() => {}}
                name="password"
                id=""
                label="Password"
                type="password"
                placeholder="Password..."
                setRef={setPasswordInput}
              />

            </ContainerInputs>

            <DivBButton type="submit" value="Register" />
            <DivBText
              className="text"
              style={{ textAlign: "left", fontSize: "16px", marginTop: "10px" }}
            >
              Already have an account?
              
              <Link to="/login">Log In</Link>
              
            </DivBText>
          </form>
        </Contenedor>
      </Section>
    </>
  );
};

export default Register;
