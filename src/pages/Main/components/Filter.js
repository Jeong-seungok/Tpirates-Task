import React, { useCallback, useMemo, useState } from "react";
import styled, { css } from "styled-components";
import { zoneData, itemData } from "../../../data/demo_data";

const FilterList = ["모든지역", "모든품목", "기본순"];

const FilterWrap = () => {
  const [selectFilter, setSelectFilter] = useState(null);
  const handleSelect = useCallback(
    index => {
      setSelectFilter(selectFilter === index || index === 2 ? null : index);
    },
    [selectFilter]
  );
  const selectedData = useMemo(
    () => selectFilter !== null && (selectFilter === 0 ? zoneData : itemData),
    [selectFilter]
  );
  return (
    <section>
      <FilterBox>
        {FilterList.map((list, index) => (
          <FilterItem
            key={index}
            type="head"
            selected={selectFilter}
            index={index}
            onClick={() => {
              handleSelect(index);
            }}
          >
            {list}
            <span />
          </FilterItem>
        ))}
        {selectedData &&
          selectedData?.map((data, index) => (
            <FilterItem type="body" key={index}>
              {data.label}
            </FilterItem>
          ))}
      </FilterBox>
    </section>
  );
};

export default FilterWrap;

const FilterBox = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 41px auto;
`;
const FilterItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  font-size: 14px;
  color: ${({ theme }) => theme.color.primary};
  border: 1px solid ${({ theme }) => theme.color.lightdarkgray};
  border-top-width: 0;
  border-left-width: 0;
  cursor: pointer;
  span {
    display: inline-block;
    margin-left: 2px;
    border-color: ${({ theme }) => theme.color.primary};
    border-top: 5px solid;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
  }

  ${({ type, theme, selected, index }) => {
    if (type === "head")
      return css`
        background: ${selected === null || selected === index
          ? theme.color.white
          : "#eee"};
        font-weight: 500;
        color: ${selected === null || selected === index
          ? theme.color.primary
          : theme.color.gray};
      `;
    if (type === "body")
      return css`
        color: ${theme.color.gray};
        background: ${theme.color.white};
      `;
  }}
`;
