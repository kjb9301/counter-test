import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { useBasketDispatch, useBasketState } from '../../../hooks/useContext';

import DeliveryTypeList from './DeliveryTypeList';

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
  }, []);

  if (!deliveryFees) return null;
  return (
    <Wrapper>
      <DeliveryTypeList />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 1px solid red;
  margin-bottom: 20px;
`;

export default DeliveryTypeInfo;