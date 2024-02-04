import React from 'react';
import styled from 'styled-components';
import { ReactComponent as LeftArrow } from 'assets/icon/left-arrow.svg';
import { ReactComponent as LeftArrowInactive } from 'assets/icon/left-arrow-inactive.svg';
import { ReactComponent as RightArrow } from 'assets/icon/right-arrow.svg';
import { ReactComponent as RightArrowInactive } from 'assets/icon/right-arrow-inactive.svg';
import { useRecoilState } from 'recoil';
import { pageNumAtom } from 'state/atom';
interface PaginationProps {
  totalCount: number;
}
function PaginationList({ totalCount }: PaginationProps) {
  // 페이지 수 계산
  const pageCount = Math.ceil(totalCount / 20);
  const pages = Array.from({ length: pageCount }, (_, index) => index + 1);
  const [pageNum, setPageNum] = useRecoilState(pageNumAtom);
  return (
    <PaginationListWrapper>
      <LeftArrowIcon />
      {pages.slice(0, 5).map((page) => (
        <PageNum key={page} $isActive={true}>
          {page}
        </PageNum>
      ))}
      <RightArrowIcon />
    </PaginationListWrapper>
  );
}

const PaginationListWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeftArrowIcon = styled(LeftArrow)`
  width: 1.4rem;
  color: red;
  cursor: pointer;
  margin: 0 0.6rem 0 0;
`;
const RightArrowIcon = styled(RightArrow)`
  width: 1.4rem;
  cursor: pointer;
  margin: 0 0 0 0.6rem;
`;

const PageNum = styled.div<{ $isActive: boolean }>`
  background: ${(props) => (props.$isActive ? '#524fa1' : 'none')};
  color: ${(props) => (props.$isActive ? '#fff' : '#999')};
  border-radius: 0.25rem;
  text-align: center;
  width: 2.4rem;
  height: 2.4rem;
  align-items: center;
  cursor: pointer;
  display: inline-flex;
  font-size: 1.4rem;
  justify-content: center;
  margin: 0 1.2rem;
  padding: 0.1rem 0.6rem;
`;

export default PaginationList;
