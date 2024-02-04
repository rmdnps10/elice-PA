import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Search } from 'assets/icon/search.svg';
import Space from 'util/Space';
import { useRecoilState } from 'recoil';
import { searchTextAtom } from 'state/atom';

function SearchInput() {
  const [text, setText] = useRecoilState(searchTextAtom);
  const [isFocus, setIsFocus] = useState(false);
  return (
    <>
      <Space height="1.6rem" />
      <SearchInputWrapper $isFocus={isFocus}>
        <SearchIconBox>
          <SearchIcon />
        </SearchIconBox>
        <SearchPureInputBox>
          <SearchPureInput
            onFocus={() => {
              setIsFocus(true);
            }}
            onBlur={() => {
              setIsFocus(false);
            }}
            value={text}
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setText(e.target.value)
            }
            placeholder="배우고 싶은 언어, 기술을 검색해보세요."
          />
        </SearchPureInputBox>
      </SearchInputWrapper>
      <Space height="1.6rem" />
    </>
  );
}

const SearchInputWrapper = styled.div<{ $isFocus: boolean }>`
  display: flex;
  width: 100%;
  border: 1px solid
    ${(props) => (props.$isFocus ? 'rgb(82,79,161)' : 'rgb(201, 202, 204)')};
  border-radius: 0.5rem;
  background-color: rgb(255, 255, 255);
  transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
`;
const SearchIconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 1.6rem;
`;
const SearchIcon = styled(Search)`
  width: 1.3rem;
`;
const SearchPureInputBox = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 4.6rem;
  margin: 0px 1rem;
  overflow: hidden;
`;
const SearchPureInput = styled.input`
  outline: none;
  border: none;
  width: 100%;
  font-size: 1.4rem;
  padding: 1.2rem 0;
`;

export default SearchInput;
