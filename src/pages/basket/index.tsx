import React from 'react';
import styled from 'styled-components';

import Header from './components/Header';
import UserInfo from './components/UserInfo';

function BasketPage() {
  return (
    <Wrapper>
      <Header />
      <UserInfo />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  border: 1px solid red;
  padding: 30px;
`;

export default BasketPage;
