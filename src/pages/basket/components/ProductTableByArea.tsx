import React, { useState } from 'react';
import styled from 'styled-components';

import { BasketItem } from '../../../lib/types/basketPageTypes';

import ProductTableHeader from './ProductTableHeader';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';
import ProductSum from './ProductSum';

type ProductTableByAreaProps = {
  basketListByArea: BasketItem[];
  place: string;
};

function ProductTableByArea({
  basketListByArea,
  place,
}: ProductTableByAreaProps) {
  return (
    <Wrapper>
      <ProductTableHeader place={place} />
      <ProductCategoryRow />
      {basketListByArea.map((product) => {
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
