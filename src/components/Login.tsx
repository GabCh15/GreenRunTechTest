import React, { useEffect, useContext } from "react";
import IPage from "../interfaces/page";
import styled from "styled-components";
import { RouteComponentProps, Link } from "react-router-dom";
import logging from "../config/logging";
import { AppContext } from "../context/appcontext";
import FormField from "../generic-components/FormField";
import { signInWithEmailAndPassword } from "firebase/auth";

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
`;

const DivBText = styled.div`
  font-family: Epilogue;
  font-style: normal;
  font-weight: normal;
  padding-top: 8px;
  font-size: 10px;
  opacity: 0.8;
`;

const DivBButton = styled.input`
  display: block;
  text-decoration: none;
  appearance: none;
  border: none;
  padding: 10px 18px 10px 18px;
  margin: 0;
  margin-top: 20px;
  margin-right:0;
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

const signIn = async (auth: any, email: string, password: string, setIsAuth: any) => {

  console.log('# Auth');
  console.log(auth, email, password);
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      setIsAuth(true);
    }).catch((error) => {
      setIsAuth(false);
    })

};

const Login: React.FunctionComponent<IPage & RouteComponentProps<any>> = (
  props
) => {
  const { updateTema, auth, isAuth, setIsAuth } = useContext(AppContext);

  const [emailInput, setEmailInput] = React.useState(React.useRef<HTMLInputElement>(null));
  const [passwordInput, setPasswordInput] = React.useState(React.useRef<HTMLInputElement>(null));

  const formHandle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form handle');
    const mail = emailInput.current ? emailInput.current.value : '';
    const pass = passwordInput.current ? passwordInput.current.value : '';
    console.log(mail);
    console.log(pass);

    await signIn(auth, mail, pass, setIsAuth);
  };

  console.log('Verificando auth: ', isAuth());

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
          console.log('Ist Auth: ', isAuth());
        }}
      >
        Cambiar Tema
      </button>

      <Link to="/history">Ir a</Link>

      <Section>
        <Contenedor>
          <DivBTitleText className="title">Welcome</DivBTitleText>
          <DivBText className="text" style={{textAlign:'center'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </DivBText>
          <form onSubmit={formHandle}>
            <ContainerInputs>            
              <FormField
              onChange={()=>{}}
                name="user"
                id=""
                label="User"
                value="a@hotmail.com"
                setRef={setEmailInput}
              />
              <FormField
              onChange={()=>{}}
                name="password"
                id=""
                label="Password"
                type="password"
                value="123456"
                setRef={setPasswordInput}
              />
              <DivBText className="text" style={{textAlign:'left', fontSize:'8px'}}>
              Forgot your password?
            </DivBText>
            </ContainerInputs>
            <DivBButton type="submit" value="Login"/>
          </form>
        </Contenedor>
      </Section>
    </>
  );
};

export default Login;
