import React from "react";
import CharacterPool from "./organisms/CharacterPool";
import styled from "styled-components";

const dummy = [
  {
    image: "a",
    name: "a",
    count: [2, 3, 4, 5, 6, 7]
  },
  {
    image: "b",
    name: "b",
    count: [1, 2, 4, 5, 7]
  },
  {
    image: "b",
    name: "b",
    count: [1, 2, 4, 5, 7]
  },
  {
    image: "b",
    name: "b",
    count: [1, 2, 4, 5, 7]
  },
  {
    image: "b",
    name: "b",
    count: [1, 2, 4, 5, 7]
  },
  {
    image: "b",
    name: "b",
    count: [1, 2, 4, 5, 7]
  },
  {
    image: "b",
    name: "b",
    count: [1, 2, 4, 5, 7]
  },
  {
    image: "b",
    name: "b",
    count: [1, 2, 4, 5, 7]
  },
  {
    image: "b",
    name: "b",
    count: [1, 2, 4, 5, 7]
  },
  {
    image: "b",
    name: "b",
    count: [1, 2, 4, 5, 7]
  },
  {
    image: "b",
    name: "b",
    count: [1, 2, 4, 5, 7]
  },
  {
    image: "b",
    name: "b",
    count: [1, 2, 4, 5, 7]
  },
  {
    image: "b",
    name: "b",
    count: [1, 2, 4, 5, 7]
  },
  {
    image: "b",
    name: "b",
    count: [1, 2, 4, 5, 7]
  },
  {
    image: "b",
    name: "b",
    count: [1, 2, 4, 5, 7]
  },
  {
    image: "b",
    name: "b",
    count: [1, 2, 4, 5, 7]
  }
];

const App: React.FC = () => {
  return (
    <Wrapper>
      <CharacterPool character={dummy} />
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`;
