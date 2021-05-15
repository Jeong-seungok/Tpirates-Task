import React from "react";
import HeaderWrap from "./components/Header";
import BannerWrap from "./components/Banner";
import FilterWrap from "./components/Filter";
import MarketWrap from "./components/Market";
import SearchWrap from "./components/Search";
import styled from "styled-components";

const Main = () => {
  return (
    <>
      <HeaderWrap />
      <MainWrap>
        <BannerWrap />
        <FilterWrap />
        <SearchWrap />
        <MarketWrap />
      </MainWrap>
    </>
  );
};

export default Main;
const MainWrap = styled.main`
  min-height: 100vh;
`;
