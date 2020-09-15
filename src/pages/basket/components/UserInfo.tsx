import React, { useState } from 'react';
import styled from 'styled-components';

import Modal from '../../../components/Modal';
import UserAddrModal from '../../../components/modal/UserAddrModal';
import Portal from '../../../components/Portal';

function UserInfo() {
  const [modalVisible, setModalVisible] = useState(false);

  const modifyAddress = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <Wrapper>
      <Line>
        <Title>주소</Title>
        <Text>{`서울시 강남구 도산대로 17`}</Text>
        <Button onClick={modifyAddress}>주소 변경하기</Button>
        <Modal visible={modalVisible}>
          <UserAddrModal />
        </Modal>
      </Line>
      <Line>
        <Title>가능한 배송방식</Title>
        <Text>{`직접배송, 고속버스 탁승`}</Text>
      </Line>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 30px 10px;
`;

const Line = styled.div`
  display: flex;
  font-size: 14px;
  margin-bottom: 5px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Title = styled.p`
  width: 150px;
  font-weight: 600;
`;

const Text = styled.p`
  min-width: 300px;
`;

const Button = styled.button`
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  background-color: #e6e6e6;
  padding: 0 5px;
`;

export default UserInfo;
