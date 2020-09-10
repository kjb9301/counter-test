import React from 'react';
import styled from 'styled-components';

function QuantityCounter() {
  return (
    <Wrapper>
      <Button>-</Button>
      <Input type='number' />
      <Button>+</Button>
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

export default QuantityCounter;
