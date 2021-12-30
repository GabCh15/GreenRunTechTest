import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        ${props => {return props.theme.bodyBackground}}
    }

    .title {
        color: ${props => {return props.theme.title}};
    }

    .text {
        line-height: 148.02%;
        font-style: normal;
        text-align: left;
        font-family: 'Epilogue';        
        font-weight: 600;
        ${props => {return props.theme.text}};
    }
`;

export default GlobalStyle;