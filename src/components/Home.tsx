import React, { useEffect, useContext } from "react";
import IPage from "../interfaces/page";
import styled from "styled-components";
import { RouteComponentProps, Link } from "react-router-dom";


const Home: React.FunctionComponent<IPage & RouteComponentProps<any>> = props => {

  useEffect(() => {
  }, []);

  return (
    <>
        <h2>Home</h2>
    </>
  );
};

export default Home;
