import React from 'react';
import styled from 'styled-components';
import { logoUrl } from 'util/imageUrls';

function Header() {
  return (
    <HeaderWrapper>
      <Logo src={logoUrl} alt="엘리스 아카데미" />
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  background-color: white;
  height: 6.4rem;
`;

const Logo = styled.img``;

export default Header;
