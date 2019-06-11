import React from "react";
import styled from "styled-components";

interface IPropsNameField {
  name: string;
}

const NameField: React.FC<IPropsNameField> = props => {
  return <Name>{props.name}</Name>;
};

export default NameField;

const Name = styled.div`
  z-index: 1;
  height: 30px;
  width: 120px;
  padding: 1px 0px;
  font-size: 20px;
  color: white;
`;
