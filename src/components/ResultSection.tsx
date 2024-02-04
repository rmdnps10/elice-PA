import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'api/instance';
import ResultCard from './ResultCard';
import { Course } from 'util/type';

function ResultSection() {
  const [totalCount, setTotalCount] = useState<number>();
  const [courses, setCourses] = useState<Course[]>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          'https://api-rest.elice.io/org/academy/course/list/',
          {
            params: {
              offset: 0,
              count: 20,
            },
          },
        );
        setTotalCount(res?.data?.course_count);
        setCourses(res?.data?.courses);
      } catch (err) {
        alert('Error!');
      }
    };
    fetchData();
  }, []);
  return (
    <ResultSectionWrapper>
      <TotalCount>전체 {totalCount}개</TotalCount>
      <ResultCardList>
        {courses?.map((item: Course) => (
          <ResultCard key={item?.id} course={item} />
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
