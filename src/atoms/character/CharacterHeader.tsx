import React from "react";
import styled from "styled-components";

const CharacterHeader: React.FC = () => {
  return (
    <HeaderWrapper>
      <CharacterHead />
      <CharacterCaption />
      <CharacterCaption />
      <CharacterCaption />
      <CharacterCaption />
      <CharacterCaption />
      <CharacterCaption />
    </HeaderWrapper>
  );
};

export default CharacterHeader;

const CharacterHead = styled.div`
  background-color: black;
  width: 120px;
  height: 36px;
`;

const CharacterCaption = styled.div`
  width: 63px;
  height: 33px;
  padding: 1px;
  border: 0.5px solid grey;
`;

const HeaderWrapper = styled.div`
  display: flex;
`;
