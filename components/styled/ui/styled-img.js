import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.div`
  position: relative;
  left: 0;
  min-width: 100vw;
  width: 100%;
  height: 100%;
  background: url(${(props) => props.imageLink}) no-repeat center/cover;
  filter: brightness(60%);
`;

function SlideImage({ imageLink }) {
  return <StyledImage imageLink={imageLink} />;
}

export default SlideImage;
