import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
  width: 100%;
  height: 100%;
  padding-top: 80px;
`;

export default function MainWrap(props) {
  return <StyledMain>{props.children}</StyledMain>;
}
