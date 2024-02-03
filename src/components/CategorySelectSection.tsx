import axios from 'axios';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import Space from 'util/Space';

function CategorySelectSection() {
  return (
    <>
      <Space height="6.4rem" />
      <CategorySelectSectionWrapper>
        <IndicateBox>과목</IndicateBox>
        <ImpactMessage>
          엘리스에서 배우고자 하는 과목의 특성을 선택해주세요.
        </ImpactMessage>
      </CategorySelectSectionWrapper>
    </>
  );
}

const CategorySelectSectionWrapper = styled.section`
  padding: 2.4rem;
  background-color: #f0f1f3;
`;
const IndicateBox = styled.a`
  display: inline-block;
  color: #524fa1;
  padding: 1.6rem 1.6rem 1.2rem;
  font-size: 1.6rem;
  border-bottom: 4px solid #524fa1;
  font-weight: 600;
`;
const ImpactMessage = styled.div`
  display: flex;
  height: 7.8rem;
  align-items: center;
  font-size: 1.8rem;
  font-weight: 400;
  color: #7d7e80;
`;

export default CategorySelectSection;
