import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { BasketItem, BasketByArea } from '../../../lib/types/basketPageTypes';
import { useBasketState, useBasketDispatch } from '../../../hooks/useContext';

import ProductTableByArea from './ProductTableByArea';

function BasketTable() {
  const { basketList } = useBasketState();
  const dispatch = useBasketDispatch();
  const [deliveryPlaces, setDeliveryPlaces] = useState<string[] | null>(null);
  const [basketListByArea, setBasketListByArea] = useState<BasketByArea | null>(
    null
  );

  useEffect(() => {
    const getData = async () => {
      await axios
        .get('data/basketItems.json')
        .then((res) => {
          if (res.status === 200) {
            const basketList = res.data.basketItems;
            dispatch({
              type: 'GET_BASKET_ITEMS',
              payload: basketList,
            });
          }
        })
        .catch((err) => {
          throw err;
        });
    };
    getData();
  }, [dispatch]);

  useEffect(() => {
    if (basketList) {
      const { basketListByArea, noDupDeliveryPlaces } = createProductListByArea(
        basketList
      );
      setDeliveryPlaces(noDupDeliveryPlaces);
      setBasketListByArea(basketListByArea);
    }
  }, [basketList]);

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
    <>
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
    </>
  );
}

export default BasketTable;
