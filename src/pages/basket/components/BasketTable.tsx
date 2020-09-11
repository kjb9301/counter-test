import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import ProductTableByArea from './ProductTableByArea';

type BasketItem = {
  id: number;
  title: string;
  deliveryPlace: string;
  deliveryType: string;
  productOption: string;
  productImage: string;
  price: number;
  etcTitle: string;
  etcPrice: number;
};

function BasketTable() {
  const [basketList, setBasketList] = useState<BasketItem[] | null>(null);
  console.log(!basketList);
  useEffect(() => {
    const getData = async () => {
      await axios
        .get('data/basketItems.json')
        .then((res) => {
          if (res.status === 200) {
            const basketItems = res.data.basketItems;
            setBasketList(basketItems);
          }
        })
        .catch((err) => {
          throw err;
        });
    };
    getData();
  }, []);

  if (!basketList) return null;
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
