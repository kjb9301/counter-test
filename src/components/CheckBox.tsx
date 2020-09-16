import React from 'react';
import styled from 'styled-components';

type CheckBoxProps = {
  text: string;
  checked: boolean;
  onChange: () => void;
};

function CheckBox({ text, checked, onChange }: CheckBoxProps) {
  return (
    <>
      <Input checked={checked} onChange={onChange} />
      {`${text}`}
    </>
  );
}

const Input = styled.input.attrs({
  type: 'checkbox',
})`
  margin-bottom: 10px;
`;

export default CheckBox;
