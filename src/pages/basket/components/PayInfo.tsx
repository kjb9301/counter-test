import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

type PayInfoProps = {
  history: {
    push(url: string): void;
  };
};

function PayInfo({ history }: PayInfoProps) {
  const goToMain = () => {
    history.push('/');
  };

  return (
    <Wrapper>
      <InfoBox>
        <Text>{`총 업체수: 개 총 상품 수량: 개 총 상품 금액: 원`}</Text>
        <Text>{`(+)총 배송비: 원`}</Text>
        <Text>{`(=)총 결제하실 금액: 원`}</Text>
      </InfoBox>
      <ButtonGroup>
        <Button color='gray' bgColor='#fff' onClick={goToMain}>
          계속 쇼핑하기
        </Button>
        <Button color='#fff' bgColor='gray'>
          주문하기
        </Button>
      </ButtonGroup>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 150px;
  padding: 10px 50px 10px 100px;
`;

const InfoBox = styled.div`
  border: 1px solid gray;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 20px 50px 20px 100px;
  margin-bottom: 20px;
`;

const Text = styled.p`
  margin-bottom: 20px;
`;

const ButtonGroup = styled.div`
  float: right;
`;

const Button = styled.button<{ color: string; bgColor: string }>`
  width: 150px;
  height: 30px;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  border: 1px solid gray;

  &:first-child {
    margin-right: 10px;
  }
`;

export default withRouter(PayInfo);
