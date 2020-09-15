import React from 'react';
import styled from 'styled-components';

const deliveryTypes = [
  { id: 'direct', text: '직접배송' },
  { id: 'pickup', text: '픽업' },
  { id: 'delivery', text: '택배배송' },
  { id: 'express', text: '고속버스 탁송' },
  { id: 'airline', text: '항공 배송' },
  { id: 'dawn', text: '새벽배송' },
];

function DeliveryTypeList() {
  return (
    <Wrapper>
      {deliveryTypes.map((item) => {
        return <Type key={item.id}>{item.text}</Type>;
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

const Type = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #bdbdbd;
  color: #ababab;
`;

export default DeliveryTypeList;
