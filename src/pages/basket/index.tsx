import React from 'react';
import styled from 'styled-components';

import { BasketProvider } from '../../contexts/BasketProvider';

import Header from './components/Header';
import DeliveryTypeInfo from './components/DeliveryTypeInfo';
import UserInfo from './components/UserInfo';
import BasketTable from './components/BasketTable';

function BasketPage() {
  return (
    <BasketProvider>
      <Wrapper>
        <Header />
        <UserInfo />
        <DeliveryTypeInfo />
        <BasketTable />
      </Wrapper>
    </BasketProvider>
  );
}

const Wrapper = styled.main`
  border: 1px solid red;
  padding: 30px;
`;

export default BasketPage;
