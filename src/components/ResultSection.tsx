import React from 'react';
import styled from 'styled-components';
import ResultCard from './ResultCard';

function ResultSection() {
  return (
    <ResultSectionWrapper>
      <TotalCount>전체 221개</TotalCount>
      <ResultCardList>
        {new Array(10).fill(0).map((item, index) => (
          <ResultCard key={index} />
        ))}
      </ResultCardList>
    </ResultSectionWrapper>
  );
}

const ResultSectionWrapper = styled.section`
  padding: 2.4rem;
  background-color: #f0f1f3;
`;
const TotalCount = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: #222;
  padding: 1.2rem 0;
  border-bottom: 1px solid rgb(225, 226, 228);
`;

const ResultCardList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default ResultSection;
