import React from 'react';
import styled from 'styled-components';

import ProductTableHeader from './ProductTableHeader';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';
import ProductSum from './ProductSum';

function ProductTableByArea() {
  return (
    <Wrapper>
      <ProductTableHeader />
      <ProductCategoryRow />
      <ProductRow />
      <ProductSum />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 1px solid blue;
`;

export default ProductTableByArea;
