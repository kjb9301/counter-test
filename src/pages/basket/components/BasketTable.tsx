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
  const [basketList, setBasketList] = useState<BasketItem[][] | null>(null);

  useEffect(() => {
    const getData = async () => {
      await axios
        .get('data/basketItems.json')
        .then((res) => {
          if (res.status === 200) {
            const basketItems: BasketItem[] = res.data.basketItems;
            // const data = createProductListByArea(basketItems);

            // setBasketList(data);
          }
        })
        .catch((err) => {
          throw err;
        });
    };
    getData();
  }, []);

  const createProductListByArea = (basketList: BasketItem[]) => {
    const deliveryPlaceArr = basketList.map((item) => item.deliveryPlace);
    const noDupdeliveryPlaceArr = deliveryPlaceArr.filter(
      (item, index, arr) => arr.indexOf(item) === index
    );

    const basketListByArea: BasketItem[][] = [];
    noDupdeliveryPlaceArr.forEach((place, index) => {
      basketListByArea[index] = basketList.filter(
        (item) => place == item.deliveryPlace
      );
    });

    return basketListByArea;
  };

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
