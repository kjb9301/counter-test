import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { useBasketDispatch, useBasketState } from '../../../hooks/useContext';

import DeliveryTypeList from './DeliveryTypeList';
import DeliveryTypeMsg from './DeliveryTypeMsg';

function DeliveryTypeInfo() {
  const { deliveryFees } = useBasketState();
  const dispatch = useBasketDispatch();

  useEffect(() => {
    const getData = async () => {
      await axios
        .get('data/deliveryFee.json')
        .then((res) => {
          dispatch({
            type: 'GET_DELIVERY_FEES',
            payload: res.data.deliveryFee,
          });
        })
        .catch((err) => {
          throw err;
        });
    };
    getData();
  }, [dispatch]);

  if (!deliveryFees) return null;
  return (
    <Wrapper>
      <DeliveryTypeList deliveryFees={deliveryFees} />
      <DeliveryTypeMsg />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-bottom: 20px;
`;

export default React.memo(DeliveryTypeInfo);
