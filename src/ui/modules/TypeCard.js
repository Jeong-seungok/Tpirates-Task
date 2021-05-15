import React from "react";
import styled, { css } from "styled-components";

const TypeCard = ({ data }) => {
  return (
    <TypeInfo>
      <TypeThumb>
        <img src={data.thumb} alt="썸네일" />
      </TypeThumb>
      <TypeListBox>
        <TypeList>
          <TypeDetailBox>
            <TypeDetail rate>{data.label}</TypeDetail>
            <TypeDetail detail>{data.origin}</TypeDetail>
          </TypeDetailBox>
          <TypeDetailBox>
            <TypeDetail unit>{data.unit} 당</TypeDetail>
          </TypeDetailBox>
        </TypeList>
        {data.type.map((type, index) => (
          <TypeList key={index} hover>
            <TypeDetailBox>
              <TypeDetail rate>{type.rate}</TypeDetail>
              {type.detail && <TypeDetail detail>{type.detail}</TypeDetail>}
              {type.detail2 && <TypeDetail detail2>{type.detail2}</TypeDetail>}
            </TypeDetailBox>
            <TypeDetailBox>
              <TypeDetail price>{type.price.toLocaleString()}원</TypeDetail>
            </TypeDetailBox>
          </TypeList>
        ))}
      </TypeListBox>
    </TypeInfo>
  );
};

export default TypeCard;

const TypeInfo = styled.div`
  display: flex;
  padding: 15px 5px;
`;
const TypeThumb = styled.div`
  min-width: 65px;
  width: 65px;
  height: 65px;
`;
const TypeListBox = styled.div`
  flex: 1;
  padding-left: 15px;
`;
const TypeList = styled.div`
  display: flex;
  height: 25px;
  align-items: center;
  justify-content: space-between;
  padding: 0 5px;
  ${({ hover }) =>
    hover &&
    css`
      cursor: pointer;
      &:hover {
        background: #eee;
        border-radius: 2px;
      }
    `}
`;
const TypeDetailBox = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: start;
`;
const TypeDetail = styled.span`
  white-space: nowrap;
  font-size: 14px;
  margin-right: 3px;
  line-height: 20px;
  &:last-child {
    margin-right: 0;
  }
  ${({ rate, detail, detail2, price, unit, theme }) => {
    if (rate) {
      return css`
        font-size: 14px;
        font-weight: 500;
        color: ${theme.color.darkgray};
      `;
    }
    if (detail) {
      return css`
        color: ${theme.color.lightgray};
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 0 3px;
        width: auto;
      `;
    }
    if (detail2) {
      return css`
        color: ${theme.color.red};
      `;
    }
    if (price) {
      return css`
        width: 80px;
        text-align: right;
        color: ${theme.color.primary};
        font-weight: 500;
      `;
    }
    if (unit) {
      return css`
        width: 80px;
        text-align: right;
        color: ${theme.color.gray};
      `;
    }
  }}
`;
