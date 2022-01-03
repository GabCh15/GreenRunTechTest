import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    &::-webkit-scrollbar {
        width: 20px;
    }

    &::-webkit-scrollbar-thumb {
        background: #262636;
        border-radius: 8px;
        border: 4px solid rgb(255 0 0 / 0%);
        background-clip: padding-box;
    }

    body {
        ${props => { return props.theme.bodyBackground }}
    }

    .title {
        color: ${props => { return props.theme.title }};
    }

    .text {
        line-height: 148.02%;
        font-style: normal;
        text-align: left;
        font-family: 'Epilogue';        
        font-weight: 600 !important;
        ${props => { return props.theme.text }};
    }
`;

export default GlobalStyle;