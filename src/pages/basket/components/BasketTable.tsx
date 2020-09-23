import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../../store/modules';
import { getBaksetItems } from '../../../store/modules/basket';
import { BasketItem, BasketByArea } from '../../../lib/types/basketPageTypes';
import { useBasketState } from '../../../hooks/useContext';

import CheckBox from '../../../components/CheckBox';
import ProductTableByArea from './ProductTableByArea';
import PayInfo from './PayInfo';

function BasketTable() {
  const { allCheck } = useBasketState();
  const [deliveryPlaces, setDeliveryPlaces] = useState<string[] | null>(null);
  const [
    baksetItemsByArea,
    setBaksetItemsByArea,
  ] = useState<BasketByArea | null>(null);

  const dispatch = useDispatch();
  const { basketItems } = useSelector((state: RootState) => state.basket);
  console.log(basketItems);

  useEffect(() => {
    const getData = async () => {
      await axios
        .get('data/basketItems.json')
        .then((res) => {
          if (res.status === 200) {
            const data: BasketItem[] = res.data.basketItems;
            const basketItems = data.map((item) => {
              return (item = { ...item, checked: false });
            });

            dispatch(getBaksetItems(basketItems));
          }
        })
        .catch((err) => {
          throw err;
        });
    };
    getData();
  }, []);

  useEffect(() => {
    if (!basketItems) return;
    const { basketListByArea, noDupDeliveryPlaces } = createBasketListByArea(
      basketItems
    );
    setDeliveryPlaces(noDupDeliveryPlaces);
    setBaksetItemsByArea(basketListByArea);
  }, [basketItems, dispatch]);

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

  if (!baksetItemsByArea) return null;
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
            basketListByArea={baksetItemsByArea[place]}
          />
        );
      })}
      <PayInfo />
    </>
  );
}

export default BasketTable;
