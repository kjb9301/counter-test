import React from 'react';
import styled from 'styled-components';

function Step() {
  return (
    <Wrapper>
      <p>{`장바구니 > 주문결제 > 주문완료`}</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-left: auto;
  padding: 10px 0;
`;

export default Step;
