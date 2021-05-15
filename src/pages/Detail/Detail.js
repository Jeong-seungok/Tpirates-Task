import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useRouteMatch } from "react-router";
import styled from "styled-components";
import { storeData } from "../../data/demo_data";
import ExplorerContainer from "./components/ExplorerContainer";
import HeadWrap from "./components/Header";
import InfoWrap from "./components/Info";
import PrepareContainer from "./components/PrepareContainer";
import PriceContainer from "./components/PriceContainer";
import ThumbWrap from "./components/Thumb";

const TabList = ["가격 정보", "탐방기", "리뷰", "위치"];

const Detail = () => {
  const match = useRouteMatch();
  const data = storeData.filter(data =>
    data.uri.includes(match.params.market)
  )[0];
  const [selectedTab, setSelectedTab] = useState(0);

  const handleSelected = useCallback(index => {
    setSelectedTab(index);
  }, []);

  const SelectedContainer = useMemo(() => {
    if (selectedTab === 0)
      return <PriceContainer todayPrice={data.tags.includes("today-price")} />;
    if (selectedTab === 1) return <ExplorerContainer />;
    else return <PrepareContainer />;
  }, [selectedTab, data]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeadWrap market={data.market} label={data.label} />
      <main>
        <ThumbWrap tags={data.tags} favorite={data.favorite} />
        <InfoWrap />
        <ContentSection>
          <TabBox>
            {TabList.map((list, index) => (
              <TabItem
                key={index}
                selected={selectedTab === index}
                onClick={() => {
                  handleSelected(index);
                }}
              >
                {list}
              </TabItem>
            ))}
          </TabBox>
          {SelectedContainer}
        </ContentSection>
      </main>
    </>
  );
};

export default Detail;

const ContentSection = styled.section`
  margin-top: 10px;
`;
const TabBox = styled.ul`
  display: flex;
`;
const TabItem = styled.li`
  width: calc(100% / 4);
  height: 42px;
  line-height: 42px;
  text-align: center;
  background: ${({ theme, selected }) =>
    selected ? theme.color.white : "#eee"};
  color: ${({ theme, selected }) =>
    selected ? theme.color.primary : theme.color.gray};
  border: 1px solid ${({ theme }) => theme.color.lightdarkgray};
  border-bottom-width: ${({ selected }) => (selected ? 0 : "1px")};
  border-right-width: 0;
  font-size: 14px;
  cursor: pointer;
  &:last-child {
    border-right-width: 1px;
  }
`;
