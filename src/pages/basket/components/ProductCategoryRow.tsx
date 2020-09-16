import React from 'react';
import styled from 'styled-components';

function ProductCategoryRow() {
  return (
    <Wrapper>
      <Cell width='5%' />
      <Cell width='20%'>상품정보</Cell>
      <Cell width='20%'>구분</Cell>
      <Cell width='15%'>가격</Cell>
      <Cell width='15%'>수량</Cell>
      <Cell width='15%'>합계</Cell>
      <Cell width='10%'>관리</Cell>
    </Wrapper>
  );
}

const Wrapper = styled.ul`
  display: flex;
  background-color: #f2f2f2;
`;

const Cell = styled.li<{ width: string }>`
  width: ${(props) => props.width};
  text-align: center;
  padding: 5px 0;
`;

export default ProductCategoryRow;
