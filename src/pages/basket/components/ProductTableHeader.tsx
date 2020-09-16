import React, { useEffect } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from 'react-bootstrap/ProgressBar';

import { useBasketDispatch } from '../../../hooks/useContext';
import { getPlaceName } from '../../../lib/utils/changeIntoKorean';

type ProductTableHeaderProps = {
  place: string;
  total: number;
};

const MAX = 20000;

function ProductTableHeader({ place, total }: ProductTableHeaderProps) {
  const dispatch = useBasketDispatch();
  const placeName = getPlaceName(place);
  const percent = (total / MAX) * 100;

  useEffect(() => {
    const free = total >= MAX;
    dispatch({
      type: 'FREE_DELIVERY_PRICE',
      payload: free,
    });
  }, [total, dispatch]);

  return (
    <Wrapper>
      <TopContainer>
        <input type='checkbox' /> {placeName}소재 배송상품
        <InfoText>{`${MAX}원 추가하면 무료배송`}</InfoText>
      </TopContainer>
      <ProgressBar now={percent} />
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
