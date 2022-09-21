import React from 'react';
import styled from 'styled-components';

const StyledMainContents = styled.section`
  max-width: 100%;
  margin-top: 800px;
  padding: 0 150px 120px;
  border: 1px solid black;
`;

export default function MainContentWrap(props) {
  return <StyledMainContents>{props.children}</StyledMainContents>;
}
