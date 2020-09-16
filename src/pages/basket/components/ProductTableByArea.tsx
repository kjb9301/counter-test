import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { BasketItem } from '../../../lib/types/basketPageTypes';
import { useBasketState } from '../../../hooks/useContext';

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
  const { rowInfoes } = useBasketState();
  const [total, setTotal] = useState(0);

  const filteredRows = rowInfoes.filter((item) => item.deliveryPlace === place);

  const getTotal = filteredRows.reduce((acc: any, obj: any) => {
    const { price, quantity, etcPrice, etcQuantity } = obj;
    const total = price * quantity + etcPrice * etcQuantity;
    return acc + total;
  }, 0);

  useEffect(() => {
    setTotal(getTotal);
  }, [rowInfoes]);

  return (
    <Wrapper>
      <ProductTableHeader place={place} total={total} />
      <ProductCategoryRow />
      {basketListByArea.map((product) => {
        return <ProductRow key={product.id} product={product} />;
      })}
      <ProductSum total={total} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 1px solid blue;
`;

export default ProductTableByArea;
