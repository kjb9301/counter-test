import React from 'react';
import styled from 'styled-components';

type Props = {
  type: string;
  quantity: number;
  increase: (type: string) => void;
  decrease: (type: string) => void;
  onChange: (type: string, e: React.ChangeEvent<HTMLInputElement>) => void;
};

function QuantityCounter({
  type,
  quantity,
  increase,
  decrease,
  onChange,
}: Props) {
  return (
    <Wrapper>
      <Button onClick={() => decrease(type)}>-</Button>
      <Input
        type='number'
        value={quantity}
        onChange={(e) => onChange(type, e)}
      />
      <Button onClick={() => increase(type)}>+</Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 20px;
`;

const Input = styled.input`
  width: 35px;
  height: inherit;

  &::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    appearance: none;
    margin: 0;
  }
`;

const Button = styled.button`
  width: 20px;
  height: inherit;
  border: none;
  background-color: #b8b7b4;
`;

export default React.memo(QuantityCounter);
