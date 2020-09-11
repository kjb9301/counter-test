import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from 'react-bootstrap/ProgressBar';

function ProductTableHeader() {
  return (
    <Wrapper>
      <TopContainer>
        <input type='checkbox' /> 호남소재 배송상품
        <InfoText>20000원 추가하면 무료배송</InfoText>
      </TopContainer>
      <ProgressBar now={60} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 1px solid red;
  height: 60px;
  padding: 10px 20px;
`;

const TopContainer = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

const InfoText = styled.p`
  margin-left: auto;
  font-size: 10px;
`;

export default ProductTableHeader;
