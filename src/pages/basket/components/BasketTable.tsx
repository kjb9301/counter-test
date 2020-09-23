import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

import { RootState } from '../../../store/modules';
import { BasketItem, BasketByArea } from '../../../lib/types/basketPageTypes';
import { useBasketState, useBasketDispatch } from '../../../hooks/useContext';

import CheckBox from '../../../components/CheckBox';
import ProductTableByArea from './ProductTableByArea';
import PayInfo from './PayInfo';

function BasketTable() {
  const { basketList, basketListByArea, allCheck } = useBasketState();
  const dispatch = useBasketDispatch();
  const [deliveryPlaces, setDeliveryPlaces] = useState<string[] | null>(null);

  const { basketItems } = useSelector((state: RootState) => state.basket);
  console.log(basketItems);

  useEffect(() => {
    const getData = async () => {
      await axios
        .get('data/basketItems.json')
        .then((res) => {
          if (res.status === 200) {
            const basketItems: BasketItem[] = res.data.basketItems;
            const basketList = basketItems.map((item) => {
              return (item = { ...item, checked: false });
            });

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
      const { basketListByArea, noDupDeliveryPlaces } = createBasketListByArea(
        basketList
      );
      setDeliveryPlaces(noDupDeliveryPlaces);
      dispatch({
        type: 'GET_BASKET_LIST_BY_AREA',
        payload: basketListByArea,
      });
    }
  }, [basketList, dispatch]);

  useEffect(() => {
    dispatch({
      type: 'GET_BASKET_LIST_BY_AREA',
      payload: basketListByArea,
    });
  }, [basketListByArea, dispatch]);

  const createBasketListByArea = (basketList: BasketItem[]) => {
    const deliveryPlaces = basketList.map((item) => item.deliveryPlace);
    const noDupDeliveryPlaces = deliveryPlaces.filter(
      (item, index, arr) => arr.indexOf(item) === index
    );

    const basketListByArea: BasketByArea = {};
    noDupDeliveryPlaces.forEach((place) => {
      basketListByArea[place] = {
        list: basketList.filter((item) => place === item.deliveryPlace),
        allCheckArea: false,
      };
    });

    return { basketListByArea, noDupDeliveryPlaces };
  };

  const handleChangeAllChk = () => {
    dispatch({
      type: 'ALL_CHECK',
      payload: !allCheck,
    });
  };

  if (!basketListByArea) return null;
  return (
    <>
      <CheckBox
        text='전체선택'
        checked={allCheck}
        onChange={handleChangeAllChk}
      />
      {deliveryPlaces.map((place) => {
        return (
          <ProductTableByArea
            key={place}
            place={place}
            basketListByArea={basketListByArea[place]}
          />
        );
      })}
      <PayInfo />
    </>
  );
}

export default BasketTable;
