import React from 'react';
import styled from 'styled-components';

import { BasketItem } from '../../../lib/types/basketPageTypes';

import ProductTableHeader from './ProductTableHeader';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';
import ProductSum from './ProductSum';

type ProductTableByAreaProps = {
  list: BasketItem[];
};

function ProductTableByArea({ list }: ProductTableByAreaProps) {
  return (
    <Wrapper>
      <ProductTableHeader />
      <ProductCategoryRow />
      {list.map((product) => {
        return <ProductRow key={product.id} product={product} />;
      })}
      <ProductSum />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 1px solid blue;
`;

export default ProductTableByArea;
