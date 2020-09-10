import React from 'react';
import styled from 'styled-components';

import ProductTableByArea from './ProductTableByArea';

function BasketTable() {
  return (
    <Wrapper>
      <input type='checkbox' /> 전체선택
      <ProductTableByArea />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 1px solid red;
`;

export default BasketTable;
