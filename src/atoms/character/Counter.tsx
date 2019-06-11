import React from "react";
import styled from "styled-components";

interface IPropsCounter {
  count: number;
}

const Counter: React.FC<IPropsCounter> = props => {
  return <CounterInput type="number" value={props.count} />;
};

export default Counter;

const CounterInput = styled.input`
  height: 30px;
  width: 60px;
  font-size: 20px;
  text-align: center;
  border-color: "grey";
  border-radius: 20;
`;
