import React from 'react';
import styled from 'styled-components';

const StyledImageWrapper = styled.section`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  transform: translateX(${(props) => props.slideVW});
`;

function SlideImageWrapper(props) {
  return (
    <StyledImageWrapper slideVW={props.slideVW}>
      {props.children}
    </StyledImageWrapper>
  );
}

export default SlideImageWrapper;
