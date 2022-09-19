import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.div`
  width: 100%;
  height: 100%;
  background: url('${(props) => props.imageLink}') no-repeat cover/center;
`;

function slideImage({ imageLink }) {
  return <StyledImage imageLink={imageLink} />;
}

export default slideImage;
