import React from "react";
import CharacterColumn from "../molucules/CharacterColumn";
import styled from "styled-components";
import CharacterHeader from "../atoms/character/CharacterHeader";

interface IPropsPool {
  character: { image?: string; name: string; count: number[] }[];
}

const CharacterPool: React.FC<IPropsPool> = props => {
  const character = props.character;
  return (
    <Pool>
      <CharacterHeader />
      <Scroll>
        {character.map((character, i) => {
          return (
            <CharacterColumn
              key={`chara${i}`}
              onClickImage={() => console.log("clicked")}
              image={character.image}
              name={character.name}
              count={character.count}
            />
          );
        })}
      </Scroll>
    </Pool>
  );
};

export default CharacterPool;

const Pool = styled.div`
  margin-left: auto;
`;

const Scroll = styled.div`
  overflow: scroll;
`;
