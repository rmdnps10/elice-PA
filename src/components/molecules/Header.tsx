import React from 'react';
import styled from 'styled-components';
import { logoUrl, profileButtonUrl } from 'util/imageUrls';

function Header() {
  return (
    <HeaderWrapper>
      <LogoImg src={logoUrl} alt="엘리스 아카데미" />
      <ProfileImg src={profileButtonUrl} alt="프로필 버튼" />
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  width: 100%;
  z-index: 999;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  background-color: white;
  height: 6.4rem;
  padding: 0rem 2.4rem;
`;

const LogoImg = styled.img`
  width: 12.6rem;
  cursor: pointer;
`;

const ProfileImg = styled.img`
  width: 3.2rem;
  border-radius: 100%;
  margin-left: auto;
  cursor: pointer;
`;

export default Header;
