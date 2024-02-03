import axios from 'axios';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import Space from 'util/Space';
import { filterListByCategory } from 'util/filterListByCategory';

function CategorySelectSection() {
  return (
    <>
      <Space height="6.4rem" />
      <CategorySelectSectionWrapper>
        <IndicateBox>과목</IndicateBox>
        <ImpactMessage>
          엘리스에서 배우고자 하는 과목의 특성을 선택해주세요.
        </ImpactMessage>
        <FilterBox>
          <FilterBoxRow>
            <FilterCategory>유형</FilterCategory>
            <FilterList>
              {filterListByCategory?.courseType.map((item) => (
                <FilterItem key={item}>{item}</FilterItem>
              ))}
            </FilterList>
          </FilterBoxRow>
          <FilterBoxRow>
            <FilterCategory>진행방식</FilterCategory>
            <FilterList>
              {filterListByCategory?.format.map((item) => (
                <FilterItem key={item}>{item}</FilterItem>
              ))}
            </FilterList>
          </FilterBoxRow>
          <FilterBoxRow>
            <FilterCategory>분야</FilterCategory>
            <FilterList>
              {filterListByCategory?.category.map((item) => (
                <FilterItem key={item}>{item}</FilterItem>
              ))}
            </FilterList>
          </FilterBoxRow>
          <FilterBoxRow>
            <FilterCategory>난이도</FilterCategory>
            <FilterList>
              {filterListByCategory?.level.map((item) => (
                <FilterItem key={item}>{item}</FilterItem>
              ))}
            </FilterList>
          </FilterBoxRow>
          <FilterBoxRow>
            <FilterCategory>언어</FilterCategory>
            <FilterList>
              {filterListByCategory?.programmingLanguage.map((item) => (
                <FilterItem key={item}>{item}</FilterItem>
              ))}
            </FilterList>
          </FilterBoxRow>
          <FilterBoxRow>
            <FilterCategory>가격</FilterCategory>
            <FilterList>
              {filterListByCategory?.price.map((item) => (
                <FilterItem key={item}>{item}</FilterItem>
              ))}
            </FilterList>
          </FilterBoxRow>
        </FilterBox>
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

const FilterBox = styled.div`
  border: 1px solid rgb(225, 226, 228);
`;

const FilterBoxRow = styled.div`
  display: flex;
  border-bottom: 1px solid rgb(225, 226, 228);
`;

const FilterCategory = styled.div`
  font-size: 1.2rem;
  line-height: 150%;
  padding: 1.4rem 1.6rem;
  background: #f9fafc;
  border-right: 1px solid rgb(225, 226, 228);
  color: #5e5f61;
  min-width: 6rem;
  font-weight: 600;
`;

const FilterList = styled.div`
  flex-grow: 1;
  padding: 0 0.5rem;
  display: flex;
  background: white;
  align-items: center;
  flex-wrap: wrap;
`;

const FilterItem = styled.div`
  padding: 0.4rem 1.2rem;
  font-size: 1.4rem;
  margin: 0.8rem;
  line-height: 150%;
  font-weight: 400;
  border-radius: 1.875rem;
  background: #f0f1f3;
  cursor: pointer;
  color: #5e5f61;
`;

export default CategorySelectSection;
