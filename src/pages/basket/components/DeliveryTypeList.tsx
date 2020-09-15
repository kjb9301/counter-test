import React from 'react';
import styled from 'styled-components';

import { DeliveryFee } from '../../../lib/types/basketPageTypes';
import { useBasketDispatch } from '../../../hooks/useContext';

const deliveryTypes = [
  { id: 'direct', text: '직접배송' },
  { id: 'pickup', text: '픽업' },
  { id: 'delivery', text: '택배배송' },
  { id: 'express', text: '고속버스 탁송' },
  { id: 'airline', text: '항공 배송' },
  { id: 'dawn', text: '새벽배송' },
];

type DeliveryTypeListProps = {
  deliveryFees: DeliveryFee[];
};

function DeliveryTypeList({ deliveryFees }: DeliveryTypeListProps) {
  const dispatch = useBasketDispatch();

  const handleClickType = (type: string) => {
    const index = deliveryFees.findIndex((item) => item.deliveryType === type);
    const typePrice = index < 0 ? 0 : deliveryFees[index].deliveryPrice;

    dispatch({
      type: 'SELECT_DELIVERY_TYPE',
      payload: { type, price: typePrice },
    });
  };

  return (
    <Wrapper>
      {deliveryTypes.map((item) => {
        return (
          <TypeItem key={item.id}>
            <Button onClick={() => handleClickType(item.id)}>
              {item.text}
            </Button>
          </TypeItem>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 200px);
  grid-template-rows: repeat(2, 50px);
  margin-bottom: 20px;
`;

const TypeItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #bdbdbd;
  color: #ababab;
`;

const Button = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  background-color: #ffffff;
`;

export default DeliveryTypeList;
