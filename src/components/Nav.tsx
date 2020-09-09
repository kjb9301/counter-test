import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { menuInfo } from '../lib/utils/settings';

function Nav() {
  return (
    <Wrapper>
      <Menues>
        {menuInfo.map((info) => {
          return (
            <Menu key={`menu-${info.id}`}>
              <Link to={info.path}>{info.text}</Link>
            </Menu>
          );
        })}
      </Menues>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  float: right;
  height: 100%;
`;

const Menues = styled.ul`
  display: flex;
  height: inherit;
`;

const Menu = styled.li`
  width: 150px;
  line-height: 30px;
  padding: 10px;
  color: #bdbdbd;
  text-align: center;
  font-weight: bolder;

  &:hover {
    cursor: pointer;
    color: #000000;
  }
`;

export default Nav;
