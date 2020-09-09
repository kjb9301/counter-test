import React from 'react';
import styled from 'styled-components';

import Nav from './Nav';

function Header() {
  return (
    <Wrapper>
      <Nav />
    </Wrapper>
  );
}

const Wrapper = styled.header`
  height: 80px;
  padding: 15px 0;
  border-bottom: 2px solid #848484;
`;

export default Header;
