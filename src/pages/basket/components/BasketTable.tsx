import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../../store/modules';
import { getBaksetItems } from '../../../store/modules/basket';
import { BasketItem } from '../../../lib/types/basketPageTypes';
import { useBasketState } from '../../../hooks/useContext';
import useCustomData from '../hooks/useCustomData';

import CheckBox from '../../../components/CheckBox';
import ProductTableByArea from './ProductTableByArea';
import PayInfo from './PayInfo';

function BasketTable() {
  const { allCheck } = useBasketState();

  const dispatch = useDispatch();
  const { basketItems } = useSelector((state: RootState) => state.basket);
  const { deliveryPlaces, basketItemsByArea } = useCustomData(basketItems);
  console.log(basketItemsByArea);

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

  const handleChangeAllChk = () => {
    dispatch({
      type: 'ALL_CHECK',
      payload: !allCheck,
    });
  };

  if (!basketItemsByArea) return null;
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
            basketListByArea={basketItemsByArea[place]}
          />
        );
      })}
      <PayInfo />
    </>
  );
}

export default BasketTable;
