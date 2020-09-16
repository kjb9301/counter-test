import React, { useState, useEffect } from 'react';

import { BasketItem } from '../../../lib/types/basketPageTypes';
import { useBasketState } from '../../../hooks/useContext';

import ProductTableHeader from './ProductTableHeader';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';
import ProductSum from './ProductSum';

type ProductTableByAreaProps = {
  basketListByArea: {
    list: BasketItem[];
    allCheckArea: boolean;
  };
  place: string;
};

function ProductTableByArea({
  basketListByArea,
  place,
}: ProductTableByAreaProps) {
  const { list, allCheckArea } = basketListByArea;
  const { rowInfoes } = useBasketState();
  const [total, setTotal] = useState(0);

  const filteredRows = rowInfoes.filter((item) => item.deliveryPlace === place);

  const getTotal = filteredRows.reduce((acc, obj) => {
    const { price, quantity, etcPrice, etcQuantity } = obj;
    const total = price * quantity + etcPrice * etcQuantity;
    return acc + total;
  }, 0);

  useEffect(() => {
    setTotal(getTotal);
  }, [rowInfoes, getTotal]);

  return (
    <>
      <ProductTableHeader
        place={place}
        total={total}
        allCheckArea={allCheckArea}
      />
      <ProductCategoryRow />
      {list.map((product) => {
        return <ProductRow key={product.id} product={product} />;
      })}
      <ProductSum total={total} />
    </>
  );
}

export default ProductTableByArea;
