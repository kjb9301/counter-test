import React, { useState } from 'react';
import styled from 'styled-components';

import Modal from '../../../components/Modal';
import UserAddrModal from '../../../components/modal/UserAddrModal';

function UserInfo() {
  const [modalVisible, setModalVisible] = useState(false);
  const [address, setAddress] = useState('서울시 강남구 도산대로 17');
  const [inputValue, setInputValue] = useState(address);

  const modifyAddress = () => {
    setAddress(inputValue);
    closeModal();
  };

  const handleChangeAddr = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
  };

  const openModal = () => {
    setModalVisible(!modalVisible);
  };

  const closeModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <>
      <Wrapper>
        <Line>
          <Title>주소</Title>
          <Text>{address}</Text>
          <Button onClick={openModal}>주소 변경하기</Button>
        </Line>
        <Line>
          <Title>가능한 배송방식</Title>
          <Text>{`직접배송, 고속버스 탁승`}</Text>
        </Line>
      </Wrapper>
      <Modal visible={modalVisible}>
        <UserAddrModal
          inputValue={inputValue}
          handleChangeAddr={handleChangeAddr}
          modifyAddress={modifyAddress}
          closeModal={closeModal}
        />
      </Modal>
    </>
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

export default React.memo(UserInfo);
