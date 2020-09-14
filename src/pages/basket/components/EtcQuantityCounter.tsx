import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

type EtcQuantityCoutnerProps = {
  etcQuan: number;
  getEtcQuantity: (value: number) => void;
  increment: (type: string) => void;
  decrement: (type: string) => void;
};

function EtcQuantityCounter({
  etcQuan,
  decrement,
  increment,
  getEtcQuantity,
}: EtcQuantityCoutnerProps) {
  const [quantity, setQuantity] = useState(1);

  // useEffect(() => {
  //   console.log('useeffect');
  //   getEtcQuantity(quantity);
  // }, []);

  // const decrement = () => {
  //   setQuantity((quantity) => quantity - 1);
  //   getEtcQuantity(quantity);
  // };

  // const increment = () => {
  //   setQuantity((quantity) => quantity + 1);
  //   getEtcQuantity(quantity);
  // };

  return (
    <Wrapper>
      <Button onClick={() => decrement('etc')}>-</Button>
      <Input type='number' value={etcQuan} />
      <Button onClick={() => increment('etc')}>+</Button>
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

export default EtcQuantityCounter;
