import React from 'react';
import styled from 'styled-components';

function ResultCard() {
  return (
    <ResultCardWrapper>
      <ResultCardImg />
    </ResultCardWrapper>
  );
}

const ResultCardWrapper = styled.div`
  width: calc(25% - 2.4rem);
  height: 38.4rem;
  border-radius: 0.4rem;
  overflow: hidden;
  margin: 1.2rem;
  background-color: white;
`;

const ResultCardImg = styled.div`
  display: inline-block;
  width: 100%;
  height: 14.5rem;
  min-width: 100%;
  background-color: rgb(58, 58, 76);
  background-image: url(https://cdn-api.elice.io/api/file/7a34a8e…/%EC%8D%B8%EB%84%A4%EC%9D%BC.png?se=2024-02-15T00%3A15%3A00Z&sp=r&sv=2021-12-02&sr=b&sig=Zfiix0SmDN0yH1IvmED9U3jW1FkYEDccdToZzQ1MTc4%3D);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export default ResultCard;
