import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'api/instance';
import ResultCard from './molecules/ResultCard';
import PaginationList from './molecules/PaginationList';
import { Course } from 'util/type';
import { useRecoilState, useRecoilValue } from 'recoil';
import { pageNumAtom, searchTextAtom } from 'state/atom';
import Space from 'util/Space';
import { useLocation } from 'react-router-dom';
import useDebounce from 'hook/useDebounce';
import NoResultSection from './NoResultSection';

function ResultSection() {
  const [totalCount, setTotalCount] = useState<number | undefined>();
  const [courses, setCourses] = useState<Course[]>();
  const [pageNum, setPageNum] = useRecoilState(pageNumAtom);
  const { search } = useLocation();
  const searchText = useRecoilValue(searchTextAtom);
  const fetchData = async () => {
    try {
      const searchParams = new URLSearchParams(search);
      const filterConditions = {
        $and: [
          { title: `%${searchText}%` },
          {
            $or: [
              {
                enroll_type: 0,
                is_free: searchParams.get('isFare') === 'true' ? false : true,
              },
              {
                enroll_type: 0,
                is_free: searchParams.get('isFree') === 'true' ? true : false,
              },
            ],
          },
        ],
      };
      const res = await axios.get(
        'https://api-rest.elice.io/org/academy/course/list/',
        {
          params: {
            filter_conditions: JSON.stringify(filterConditions),
            offset: 20 * (pageNum - 1),
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
  useEffect(() => {
    fetchData();
  }, [pageNum, search]);
  const debounceFunc = useDebounce(fetchData, 1000);
  useEffect(() => {
    debounceFunc();
    setPageNum(1);
  }, [searchText]);
  useEffect(() => {
    window.scrollTo(0, 500);
  }, [pageNum]);
  return (
    <ResultSectionWrapper>
      <Space height="2.4rem" />
      {totalCount !== undefined && (
        <>
          {totalCount === 0 ? (
            <NoResultSection />
          ) : (
            <>
              <TotalCount>전체 {totalCount}개</TotalCount>
              <ResultCardList>
                {courses?.map((item: Course) => (
                  <ResultCard key={item?.id} course={item} />
                ))}
              </ResultCardList>
              <PaginationList totalCount={totalCount} />
            </>
          )}
        </>
      )}
    </ResultSectionWrapper>
  );
}

const ResultSectionWrapper = styled.section`
  @media (min-width: 1200px) {
    padding: 2.4rem 6rem;
  }
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
