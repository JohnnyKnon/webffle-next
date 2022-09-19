import React from 'react';
import styled from 'styled-components';
const StyledSection = styled.section``;

function NavItemsWrapper({ children }) {
  return <StyledSection>{children}</StyledSection>;
}

export default NavItemsWrapper;
