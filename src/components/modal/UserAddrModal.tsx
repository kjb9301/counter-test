import React from 'react';
import styled from 'styled-components';

function UserAddrModal() {
  return (
    <Wrapper>
      <Text>주소 변경</Text>
      <Input type='text' />
      <Buttons>
        <Button bgColor='red'>취소</Button>
        <Button bgColor='#33A27A  '>변경</Button>
      </Buttons>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 400px;
  height: 200px;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 40px 20px 20px 20px;
`;

const Text = styled.p`
  margin-bottom: 15px;
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 40px;
`;

const Buttons = styled.div`
  display: flex;
  bottom: 0;
`;

const Button = styled.button<{ bgColor: string }>`
  flex: 1;
  padding: 10px 0;
  border-radius: 5px;
  border: none;
  color: #fff;
  background-color: ${(props) => props.bgColor};

  &:last-child {
    margin-left: 10px;
  }
`;

export default UserAddrModal;
