import React from 'react';
import styled, { css } from 'styled-components';

function ProductSum() {
  return (
    <Wrapper>
      <Container>
        <Text>
          총 상품금액 <Value>12000</Value>원
        </Text>
        <Circle>+</Circle>
        <Text>
          배송비 <Value>1500</Value>원
        </Text>
        <Circle>=</Circle>
        <Text>
          총 합계 <Value>20000</Value>원
        </Text>
      </Container>
    </Wrapper>
  );
}

const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  height: 50px;
  background-color: #f2f2f2;
  ${flexCenter}
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

const Text = styled.p`
  font-size: 13px;
  display: flex;
  align-items: center;
`;

const Value = styled.span`
  font-size: 16px;
  margin-left: 5px;
`;

const Circle = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3px solid #b2b2b2;
  margin: 0 10px;
  color: #b2b2b2;
  font-weight: bold;
  text-align: center;
`;

export default ProductSum;
