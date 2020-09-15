import React, { useState } from 'react';
import { BsArrowBarUp } from 'react-icons/bs';
import styled from 'styled-components';

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  return (
    <Wrapper>
      <Icon />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  right: 7rem;
  bottom: 0;
  text-align: center;
`;

const Icon = styled(BsArrowBarUp)`
  width: 2.75rem;
  height: 2.75rem;
`;

export default ScrollToTop;
