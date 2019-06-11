import React from "react";
import styled from "styled-components";

interface IPropsImage {
  src?: string;
  onClickImage: () => void;
}

const CharacterImage: React.FC<IPropsImage> = props => {
  return <Image src={props.src} onClick={props.onClickImage} />;
};

export default CharacterImage;

const Image = styled.img`
  height: 120px;
  width: 120px;
  background-color: black;
  position: absolute;
`;
