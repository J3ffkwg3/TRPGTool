import React from "react";
import NameField from "../atoms/character/NameField";
import Counter from "../atoms/character/Counter";
import styled from "styled-components";
import CharacterImage from "../atoms/character/CharcterImage";

interface IPropsColumn {
  image?: string;
  count: number[];
  name: string;
  onClickImage: () => void;
}

const CharacterColumn: React.FC<IPropsColumn> = props => {
  return (
    <Column>
      <CharacterImage src={props.image} onClickImage={props.onClickImage} />
      <NameField name={props.name} />
      {props.count.map((count, i) => {
        return <Counter key={`counter${i}`} count={count} />;
      })}
    </Column>
  );
};

export default CharacterColumn;

const Column = styled.div`
  display: flex;
  height: 120px;
`;
