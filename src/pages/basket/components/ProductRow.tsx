import React from 'react';
import styled from 'styled-components';

import QuantityCounter from './QuantityCounter';

function ProductRow() {
  return (
    <Wrapper>
      <Cell width='5%' direction=''>
        <Input type='checkbox' />
      </Cell>
      <Cell width='20%' direction='row'>
        <SubCell padding='10px 10px'>
          <ImgContainer>
            <Image src='https://okkot.s3.ap-northeast-2.amazonaws.com/1578550539502.png' />
          </ImgContainer>
        </SubCell>
        <SubCell padding='5px 5px'>
          <Text>유칼립투스-블랙잭</Text>
        </SubCell>
      </Cell>
      <Cell width='20%' direction='column'>
        <SubCell padding='5px 0px'>
          <Text>옵션</Text>
        </SubCell>
        <SubCell padding='5px 0px'>
          <Text>추가상품</Text>
        </SubCell>
      </Cell>
      <Cell width='15%' direction='column'>
        <SubCell padding='5px 0px'>
          <Text>7500</Text>
        </SubCell>
        <SubCell padding='5px 0px'>
          <Text>1500</Text>
        </SubCell>
      </Cell>
      <Cell width='15%' direction='column'>
        <SubCell padding='5px 0px'>
          <QuantityCounter />
        </SubCell>
        <SubCell padding='5px 0px'>
          <QuantityCounter />
        </SubCell>
      </Cell>
      <Cell width='15%' direction='column'>
        <SubCell padding='5px 0px'>
          <Text>15000</Text>
        </SubCell>
        <SubCell padding='5px 0px'>
          <Text>3000</Text>
        </SubCell>
      </Cell>
      <Cell width='10%' direction=''>
        관리
      </Cell>
    </Wrapper>
  );
}

const Wrapper = styled.ul`
  display: flex;
  height: 100px;
`;

const Cell = styled.li<{ width: string; direction: string }>`
  width: ${(props) => props.width};
  display: flex;
  flex-direction: ${(props) => (props.direction !== '' ? props.direction : '')};
  justify-content: center;
  align-items: center;
`;

const SubCell = styled.div<{ padding: string }>`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: ${(props) => props.padding};
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  width: inherit;
  max-height: 100%;
`;

const Input = styled.input.attrs((props) => ({
  type: props.type,
}))``;

const Text = styled.p`
  font-size: 12px;
`;

export default ProductRow;
