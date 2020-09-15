import React from 'react';
import styled from 'styled-components';
import { useBasketState } from '../../../hooks/useContext';

const messages = [
  {
    id: 'direct',
    message: '판매자가 예약된 상품을 배송지까지 직접 배송하는 상품입니다.',
  },
  { id: 'pickup', message: '픽업배송 상품입니다.' },
  { id: 'delivery', message: '택배배송 상품입니다.' },
  { id: 'express', message: '고속버스 탁송 상품입니다.' },
  { id: 'airline', message: '항공배송 상품입니다.' },
  { id: 'dawn', message: '새벽배송 상품입니다.' },
];

function DeliveryTypeMsg() {
  const { deliveryType } = useBasketState();

  const index = messages.findIndex((item) => item.id === deliveryType.type);
  const message = index < 0 ? deliveryType.type : messages[index].message;

  return <Text>{message}</Text>;
}

const Text = styled.p`
  font-size: 12px;
  padding: 5px;
`;

export default DeliveryTypeMsg;
