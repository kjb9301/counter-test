import React from 'react';
import styled from 'styled-components';

function DeliveryType() {
  return (
    <Wrapper>
      <TypeList>
        <Type>1111</Type>
      </TypeList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 1px solid red;
`;

const TypeList = styled.ul`
  border: 1px solid blue;
`;

const Type = styled.li`
  border: 1px solid green;
`;

export default DeliveryType;
