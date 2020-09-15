import React from 'react';
import styled from 'styled-components';

type Props = {
  type: string;
  quantity: number;
  increase: (type: string) => void;
  decrease: (type: string) => void;
};

function QuantityCounter({ type, quantity, increase, decrease }: Props) {
  return (
    <Wrapper>
      <Button onClick={() => decrease(type)}>-</Button>
      <Input type='number' value={quantity} />
      <Button onClick={() => increase(type)}>+</Button>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Input = styled.input`
  width: 35px;

  &::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    appearance: none;
    margin: 0;
  }
`;

const Button = styled.button`
  width: 20px;
  height: 20px;
`;

export default React.memo(QuantityCounter);
