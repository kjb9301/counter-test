import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from 'react-bootstrap/ProgressBar';

import { useBasketDispatch } from '../../../hooks/useContext';
import { getPlaceName } from '../../../lib/utils/changeIntoKorean';
import { checkAllArea } from '../../../store/modules/basket';
import { RootState } from '../../../store/modules';

import useTest from '../hooks/test';
import CheckBox from '../../../components/CheckBox';

type ProductTableHeaderProps = {
  place: string;
  total: number;
};

const MAX = 20000;

function ProductTableHeader({ place, total }: ProductTableHeaderProps) {
  const dispatch1 = useBasketDispatch();
  const placeName = getPlaceName(place);
  const percent = (total / MAX) * 100;

  const { checkArea, handleChange } = useTest(place);

  const dispatch = useDispatch();
  // const { checkArea } = useSelector((state: RootState) => state.basket);

  useEffect(() => {
    const free = total >= MAX;
    dispatch1({
      type: 'FREE_DELIVERY_PRICE',
      payload: free,
    });
  }, [total, dispatch]);

  const handleAllCheckArea = () => {
    dispatch(checkAllArea(place));
  };

  return (
    <Wrapper>
      <TopContainer>
        <CheckBox
          text={`${placeName}소재 배송상품`}
          checked={checkArea}
          onChange={handleChange}
        />
        <InfoText>{`${MAX}원 추가하면 무료배송`}</InfoText>
      </TopContainer>
      <ProgressBar now={percent} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 60px;
  padding: 10px 20px;
  background-color: #f8efcf;
  margin-bottom: 10px;
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
