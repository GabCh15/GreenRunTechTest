import React from "react";
import styled from "styled-components";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
}

const InputGroup = styled.div`
  position: relative;
  background: #2f2f43;
  border: 1px solid rgba(255, 255, 255, 0.06);
  box-sizing: border-box;
  border-radius: 10px;
  text-align: left;
  padding: 10px 8px;
  height: 40px;
`;

const InputLabel = styled.label`
  color: #8d8d8d;
  font-family: DM Sans;
  font-style: normal;
  font-weight: bold;
  text-align: left;
  font-size: 8px;
  position: absolute;
  top: 5px;
  left: 10px;
`;

const InputField = styled.input`
  font-size: 12px;
  height: 20px;
  color: rgb(255 255 255 / 70%);
  background-color: transparent;
  border: none;
  &:focus {
    outline-offset: none;
    outline: none;
  }
`;

const FormField: React.FC<InputProps> = ({ id, label, ...rest }) => {
  return (
    <InputGroup>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <InputField id={id} {...rest} />
    </InputGroup>
  );
};

export default FormField;
