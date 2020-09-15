import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { BasketItem } from '../../../lib/types/basketPageTypes';
import { useBasketState, useBasketDispatch } from '../../../hooks/useContext';

import ProductTableByArea from './ProductTableByArea';

function BasketTable() {
  // console.log('basket table');
  const { basketItemsByArea } = useBasketState();
  const dispatch = useBasketDispatch();

  useEffect(() => {
    const getData = async () => {
      await axios
        .get('data/basketItems.json')
        .then((res) => {
          if (res.status === 200) {
            const basketItems = res.data.basketItems;
            const basketItemsByArea = createProductListByArea(basketItems);
            dispatch({
              type: 'GET_BASKET_ITEMS',
              payload: { list: basketItems, listByArea: basketItemsByArea },
            });
          }
        })
        .catch((err) => {
          throw err;
        });
    };
    getData();
  }, [dispatch]);

  const createProductListByArea = (basketList: BasketItem[]) => {
    const deliveryPlaceArr = basketList.map((item) => item.deliveryPlace);
    const noDupdeliveryPlaceArr = deliveryPlaceArr.filter(
      (item, index, arr) => arr.indexOf(item) === index
    );

    const basketListByArea: BasketItem[][] = [];
    noDupdeliveryPlaceArr.forEach((place, index) => {
      basketListByArea[index] = basketList.filter(
        (item) => place === item.deliveryPlace
      );
    });

    return basketListByArea;
  };

  if (!basketItemsByArea) return null;
  return (
    <Wrapper>
      <input type='checkbox' /> 전체선택
      {basketItemsByArea.map((list) => {
        return <ProductTableByArea list={list} />;
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 1px solid red;
`;

export default BasketTable;
