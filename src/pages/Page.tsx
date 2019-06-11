import React from "react";
import styled from "styled-components";

const Page: React.FC = props => {
  return <PageWrapper>{props.children}</PageWrapper>;
};

export default Page;

const PageWrapper = styled.div`
  flex: 1;
`;
