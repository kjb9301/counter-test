import React from 'react';
import styled from 'styled-components';

import Header from '../../components/Header';

function MainPage() {
  return (
    <>
      <Header />
      <Main>
        <span>Main page</span>
      </Main>
    </>
  );
}

const Main = styled.main`
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default MainPage;
