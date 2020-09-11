import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from 'react-bootstrap/ProgressBar';

function ProductTableHeader() {
  return (
    <Wrapper>
      <input type='checkbox' /> 호남소재 배송상품
      <ProgressBar />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 1px solid red;
  height: 60px;
  padding: 5px 20px;
`;

export default ProductTableHeader;
