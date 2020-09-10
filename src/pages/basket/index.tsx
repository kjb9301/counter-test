import React from 'react';
import styled from 'styled-components';

import Header from './components/Header';
import UserInfo from './components/UserInfo';
import ProductTableByArea from './components/ProductTableByArea';

function BasketPage() {
  return (
    <Wrapper>
      <Header />
      <UserInfo />
      <ProductTableByArea />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  border: 1px solid red;
  padding: 30px;
`;

export default BasketPage;
