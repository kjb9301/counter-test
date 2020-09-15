import React from 'react';
import styled from 'styled-components';

import { BasketProvider } from '../../contexts/BasketProvider';

import Header from './components/Header';
import DeliveryTypeInfo from './components/DeliveryTypeInfo';
import UserInfo from './components/UserInfo';
import BasketTable from './components/BasketTable';
import ScrollToTop from '../../components/ScrollToTop';

function BasketPage() {
  return (
    <BasketProvider>
      <Wrapper>
        <Header />
        <UserInfo />
        <DeliveryTypeInfo />
        <BasketTable />
        <ScrollToTop />
      </Wrapper>
    </BasketProvider>
  );
}

const Wrapper = styled.main`
  width: 80%;
  padding: 30px 50px;
  margin: 0 auto;
`;

export default BasketPage;
