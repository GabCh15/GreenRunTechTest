import React, { useEffect } from "react";
import styled from "styled-components";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  setRef: any;
}

const InputGroup = styled.div`
  position: relative;
  background: ${(props) => {
    return props.theme.inputColor;
  }};
  border: 1px solid rgba(255, 255, 255, 0.06);
  box-sizing: border-box;
  border-radius: 10px;
  text-align: left;
  padding: 10px 16px;
  height: 60px;
`;

const InputLabel = styled.label`
  color: #8d8d8d;
  font-family: DM Sans;
  font-style: normal;
  font-weight: bold;
  text-align: left;
  font-size: 16px;
  position: absolute;
  top: 5px;
  left: 17px;
`;

const InputField = styled.input`
  font-size: 18px;
  height: 52px;
  color: ${(props) => {
    return props.theme.inputTextColor;
  }};
  background-color: transparent;
  border: none;
  &:focus {
    outline-offset: none;
    outline: none;
  }
  
`;

const FormField: React.FC<InputProps> = ({ id, label, setRef, ...rest }) => {

  const elementRef = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log('Inptus Cargados');
    setRef(elementRef);
    
  })

  return (
    <InputGroup>
      <InputLabel htmlFor={id} >{label} </InputLabel>
      <InputField id={id}  ref={elementRef} {...rest} />
    </InputGroup>
  );
};

export default FormField;
