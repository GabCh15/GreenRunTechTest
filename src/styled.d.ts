import "styled-components";

interface IPalette {
  main: string;
  contrastText: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    theme: string;
    bodyBackground: string;
    borderRadius: string;
    boxShadow: string;
    title: string;
    inputColor: string;
    inputTextColor: string;
    historyCardBackground: string;
    historyHeartColor:string;
    text: { color: string;};

    palette: {
      common: {
        fondo: string;
      };
      main: {
        fondo: string;
      };
      login: {};
      home: {};
    };
  }
}
