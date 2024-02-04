import React from 'react';
import styled from 'styled-components';
import Space from 'util/Space';
import noResult from 'assets/icon/no-result.png';
function NoResultSection() {
  return (
    <NoResultSectionWrapper>
      <Space height="5rem" />
      <NoResultImg src={noResult} alt="검색 결과없음" />
      <NoResultGudie>검색 결과가 없습니다.</NoResultGudie>
      <Space height="10rem" />
    </NoResultSectionWrapper>
  );
}

const NoResultSectionWrapper = styled.div`
  padding: 5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
`;

const NoResultImg = styled.img`
  width: 6.4rem;
`;

const NoResultGudie = styled.div`
  font-size: 1.6rem;
  color: #999;
`;

export default NoResultSection;
