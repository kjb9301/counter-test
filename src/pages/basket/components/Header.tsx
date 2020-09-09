import React from 'react';
import styled from 'styled-components';

import Step from './Step';

function Header() {
  return (
    <Wrapper>
      <h3>장바구니</h3>
      <Step />
    </Wrapper>
  );
}

const Wrapper = styled.header`
  border-bottom: 1px solid #bdbdbd;
  display: flex;

  h3 {
    padding: 10px 0;
  }
`;

export default Header;
