import React from 'react';
import styled from 'styled-components';

function SearchInput() {
  return <SearchInputWrapper></SearchInputWrapper>;
}

const SearchInputWrapper = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid rgb(201, 202, 204);
  border-radius: 0.25rem;
  background-color: rgb(255, 255, 255);
  transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
`;

export default SearchInput;
