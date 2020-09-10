import React from 'react';
import styled from 'styled-components';

import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

function ProductTableByArea() {
  return (
    <Wrapper>
      <input type='checkbox' /> 전체선택
      <ProductCategoryRow />
      <ProductRow />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 1px solid blue;
`;

export default ProductTableByArea;
