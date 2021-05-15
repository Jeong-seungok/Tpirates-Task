import React from "react";
import styled from "styled-components";

const SearchWrap = () => {
  return (
    <SearchSection>
      <SearchBox>
        <input type="text" placeholder="검색어를 입력해주세요." />
        <SearchBtn>검색</SearchBtn>
      </SearchBox>
    </SearchSection>
  );
};

export default SearchWrap;

const SearchSection = styled.section`
  padding: 8px 10px;
  background: ${({ theme }) => theme.color.white};
`;
const SearchBox = styled.div`
  display: flex;
  background: #eee;
  border-radius: 5px;
  input {
    width: 100%;
    height: 34px;
    border: none;
    background: transparent;
    text-indent: 8px;
    color: ${({ theme }) => theme.color.darkgray};
    outline: none;
  }
`;
const SearchBtn = styled.button`
  width: 50px;
  height: 34px;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.color.lightgray};
`;
