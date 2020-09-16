import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { BasketItem, BasketByArea } from '../../../lib/types/basketPageTypes';
import { useBasketState, useBasketDispatch } from '../../../hooks/useContext';

import ProductTableByArea from './ProductTableByArea';

function BasketTable() {
  // console.log('basket table');
  const { basketListByArea } = useBasketState();
  const dispatch = useBasketDispatch();
  const [deliveryPlaces, setDeliveryPlaces] = useState<string[] | null>(null);
  useEffect(() => {
    const getData = async () => {
      await axios
        .get('data/basketItems.json')
        .then((res) => {
          if (res.status === 200) {
            const basketList = res.data.basketItems;
            const {
              basketListByArea,
              noDupDeliveryPlaces,
            } = createProductListByArea(basketList);

            setDeliveryPlaces(noDupDeliveryPlaces);
            dispatch({
              type: 'GET_BASKET_ITEMS',
              payload: { basketList, basketListByArea },
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
    const deliveryPlaces = basketList.map((item) => item.deliveryPlace);
    const noDupDeliveryPlaces = deliveryPlaces.filter(
      (item, index, arr) => arr.indexOf(item) === index
    );

    const basketListByArea: BasketByArea = {};
    noDupDeliveryPlaces.forEach((place) => {
      basketListByArea[place] = basketList.filter(
        (item) => place === item.deliveryPlace
      );
    });

    return { basketListByArea, noDupDeliveryPlaces };
  };

  if (!basketListByArea) return null;
  return (
    <Wrapper>
      <input type='checkbox' /> 전체선택
      {deliveryPlaces.map((place) => {
        return (
          <ProductTableByArea
            key={place}
            place={place}
            basketListByArea={basketListByArea[place]}
          />
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 1px solid red;
`;

export default BasketTable;
