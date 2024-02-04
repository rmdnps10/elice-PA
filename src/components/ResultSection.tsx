import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'api/instance';
import ResultCard from './ResultCard';
import PaginationList from './PaginationList';
import { Course } from 'util/type';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { pageNumAtom } from 'state/atom';
import Space from 'util/Space';
import { useLocation } from 'react-router-dom';
import { serialize } from 'v8';

function ResultSection() {
  const [totalCount, setTotalCount] = useState<number | undefined>();
  const [courses, setCourses] = useState<Course[]>();
  const [pageNum, setPageNum] = useRecoilState(pageNumAtom);
  const { search } = useLocation();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const urlSearch = new URLSearchParams(search);

        const orParams = urlSearch?.getAll('price')?.map((item) => {
          return {
            enroll_type: 0,
            is_free: item === 'free' ? 'true' : 'false',
          };
        });
        console.log(orParams);
        const res = await axios.get(
          'https://api-rest.elice.io/org/academy/course/list/',
          {
            params: {
              and: [{ title: '' }, { or: JSON.stringify(orParams) }],
              offset: 0 + 20 * (pageNum - 1),
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
  }, [pageNum, search]);
  return (
    <ResultSectionWrapper>
      <TotalCount>전체 {totalCount}개</TotalCount>
      <ResultCardList>
        {courses?.map((item: Course) => (
          <ResultCard key={item?.id} course={item} />
        ))}
      </ResultCardList>
      <Space height="2.4rem" />
      {totalCount !== undefined && <PaginationList totalCount={totalCount} />}
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
