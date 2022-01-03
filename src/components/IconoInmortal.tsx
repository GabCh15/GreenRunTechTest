import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/appcontext";
import { Moon } from "@styled-icons/heroicons-solid/Moon";
import { WeatherSunny } from "@styled-icons/fluentui-system-filled/WeatherSunny";
import styled from "styled-components";

const MoonIcon = styled(Moon)`
  width: 30px;
  height: 40px;
  color: #f4d55e;
  cursor: pointer;
`;

const SunIcon = styled(WeatherSunny)`
  width: 30px;
  height: 40px;
  color: #f4d55e;
  cursor: pointer;
`;

var status: boolean = true;

const IconoInmortal = (props: any) => {
  const [statusTema, setStatusTema] = useState(true);
  const context = useContext(AppContext);

  console.log("> Llamandome", statusTema, setStatusTema);
  console.log(props);

  if (status) {
    return (
      <MoonIcon
        onClick={() => {
            status=false;
          context.updateTema();
          setStatusTema(false);
        }}
      />
    );
  }

  return (
    <SunIcon
      onClick={() => {
        status=true;
        context.updateTema();
        setStatusTema(true);
      }}
    />
  );
};

export default IconoInmortal;
