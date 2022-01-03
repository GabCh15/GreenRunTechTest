
import React, { useEffect, useContext, useState } from "react";
import IPage from "../interfaces/page";
import styled from "styled-components";
import { RouteComponentProps, Link, Route } from "react-router-dom";
import logging from '../config/logging';
// # Imports Adicionales
import { AppContext } from '../context/appcontext';
import routesPrivate from "../config/routes-private";
import AuthRoute from './AuthRoute'
import { Home as IconA } from '@styled-icons/boxicons-solid/'
import { ClockFill as IconB } from '@styled-icons/bootstrap/'
import { Notepad as IconC } from '@styled-icons/fluentui-system-regular'

const linksItems: (HTMLAnchorElement | null)[] = [];

const LinkMenu = (props: any) => {

   const linkRef = React.useRef<HTMLAnchorElement>(null);

   const onActive = (e: React.MouseEvent<HTMLAnchorElement>) => {
      console.log('> Click Menu');

      if (linkRef.current?.getAttribute('active') !== null) {
         e.preventDefault();
         return;
      }

      console.log('Verificando');
      console.log(linkRef.current);
   
      for (let a of linksItems) {
         if (a !== linkRef.current)
            a?.removeAttribute('active');
      }
      
      console.log(linkRef.current);

      linkRef.current?.setAttribute('active', '');

   }

   useEffect(() => {
      linksItems.push(linkRef.current);
      //console.log('Props:', linkRef.current, props.active, load)
      /*
      if(load && props.active){
         atributoActive(false)
         setLoad(false)
      }
      */
   }, [linksItems])

   return (
      <Link to={props.to} className={props.className} onClick={onActive} ref={linkRef}>{props.children} </Link>
   );
};


const Section = styled.section`
   display: flex;
   width: 100%;
   justify-content: center;
   align-items: center;
   text-align: center;
`;

const ContenedorComponent = (props: any) => {

   const Contenedor = styled.div`
      background: ${props => { return props.theme.palette.main.fondo }};
      ${props => { return props.theme.boxShadow }}
      height: 816px;
      width: 408px;
      box-shadow: 0px 0px 8px 2px #3a3a3a42;
      border-radius: 20px 20px 21px 21px;
      display: grid;
      box-sizing: border-box;
      ${!props.expand ? 'grid-auto-rows: calc(100% - 68px) 68px;' : ''}
   `;

   return (
      <Contenedor>{props.children}</Contenedor>
   )

};



const SectionMenu = styled.div`
   padding: 5px 12px 10px 12px;


`;

const SectionBody = styled.div`
   display: flex;

`;

const Content = styled.div`
   display: flex;
   width: 100%;
   height: 100%;
`;

const Nav = styled.nav`
   display: flex;
   overflow: hidden;
   width: 100%;
   height: 100%;
   box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
   border-radius: 15px;
   background: ${(props) => {
      return props.theme.palette.main.fondo;
    }};
    ${props => { return props.theme.boxShadow }}

`;

const NavLink = styled(LinkMenu)`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   flex-grow: 1;
   overflow: hidden;
   white-space: nowrap;
   font-family: sans-serif;
   font-size: 13px;
   color: #444444;
   text-decoration: none;
   -webkit-tap-highlight-color: transparent;
   transition: background-color 0.1s ease-in-out;
   min-width: auto;
   padding: 7px;
   border-radius: 10px;

   &:hover {
      background-color: #e7e7e7e7;
   }

   &[active] {
      background-color: #e7e7e7e7;
   }

`;

const Item = styled.div`
   display: flex;
   margin: 5px;

   width: 100%;
   height: auto;

`;

const Profile = styled.div`
   height: 100%;
   width: 100%;
   background-color: orange;
   border-radius: 50%;
   height: 100%;
   width: 29px;

`;



const Dashboard: React.FunctionComponent<IPage> = props => {

   const [expand, setExpand] = useState(false);
   const context = useContext(AppContext);

   useEffect(() => {
      

      logging.info(`> Cargando ${props.name}`);
      console.log(props);
      console.log(linksItems);
      

      console.log(context);      
   }, [])

   return (
      <AppContext.Provider value={{...context, expand: {get: expand, set: setExpand}}}>
         <Section>
            <ContenedorComponent expand={expand}>
               <SectionBody>
                  <Content className="Unix Test">
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
                  </Content>
               </SectionBody>
               {!expand && (
                  <SectionMenu>
                     <Nav>
                        <Item>
                           <NavLink to="/home" className="NL Test"><IconA /></NavLink>
                        </Item>
                        <Item>
                           <NavLink to="/history"><IconB /></NavLink>
                        </Item>
                        <Item>
                           <NavLink to="/search"><IconC /></NavLink>
                        </Item>
                        <Item>
                           <NavLink to="/profile"><Profile /></NavLink>
                        </Item>
                     </Nav>
                  </SectionMenu>
               )}
            </ContenedorComponent>
         </Section>
      </AppContext.Provider>

   );
}

export default Dashboard;


