import React from "react";
import { useHistory } from "react-router";
import styled, { css } from "styled-components";
import comment from "../../images/comment.svg";
import TagBox from "../atoms/TagBox";

export const TagsText = {
  "today-price": "오늘시세",
  "day-delivery": "당일배송",
};

const MarketCard = ({ data }) => {
  const history = useHistory();
  return (
    <MarketItem
      onClick={() => {
        history.push(`${data.uri}`);
      }}
    >
      <MarketThum>
        <img src={data.thumbnail} alt="썸네일" />
      </MarketThum>
      <MarketInfo>
        <div>
          <MarketDetail label={1}>
            {data.label}
            <span>{data.market}</span>
          </MarketDetail>
          <MarketDetail description>{data.description}</MarketDetail>
          <MarketDetail>
            {data.tags?.map((data, index) => (
              <TagBox key={index} layout={data}>
                {TagsText[data]}
              </TagBox>
            ))}
          </MarketDetail>
        </div>
        <div>
          <MarketDetail>
            <Summary rating>{data.summary.rating}</Summary>
            <Summary comments>{data.summary.comments}</Summary>
          </MarketDetail>
        </div>
      </MarketInfo>
      <Status state={data.state === "OPEN"}>
        {data.state === "OPEN" ? "영업중" : "영업종료"}
      </Status>
    </MarketItem>
  );
};

export default MarketCard;

const MarketItem = styled.div`
  position: relative;
  display: flex;
  margin: 5px 0;
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.color.lightdarkgray};
  background: ${({ theme }) => theme.color.white};
  cursor: pointer;
`;
const MarketThum = styled.div`
  width: 130px;
  height: 130px;
  min-width: 130px;
  img {
    width: 100%;
    height: 100%;
  }
`;
const MarketInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(100% - 130px);
  padding: 15px 15px 10px;
  background: ${({ theme }) => theme.color.white};
`;

const MarketDetail = styled.div`
  min-height: 20px;
  width: 100%;
  line-height: 20px;
  font-size: 13px;

  ${({ label, description }) => {
    if (label)
      return css`
        font-size: 14px;
        font-weight: 500;
        color: ${({ theme }) => theme.color.darkgray};
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        span {
          margin-left: 5px;
          font-size: 13px;
          font-weight: 400;
          color: ${({ theme }) => theme.color.gray};
        }
      `;
    if (description)
      return css`
        color: ${({ theme }) => theme.color.lightgray};
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      `;
  }}
`;

const Summary = styled.span`
  ${({ rating, comments, theme }) => {
    if (rating)
      return css`
        margin-right: 5px;
        color: ${theme.color.orange};
        &:before {
          content: "★ ";
        }
      `;
    if (comments)
      return css`
        position: relative;
        padding-left: 15px;
        color: ${theme.color.lightgray};
        &:before {
          position: absolute;
          top: 50%;
          left: 0;
          content: "";
          width: 15px;
          height: 15px;
          background: url(${comment}) no-repeat;
          background-position: center;
          transform: translateY(-50%);
        }
      `;
  }}
`;

const Status = styled.span`
  position: absolute;
  bottom: 15px;
  right: 15px;
  font-size: 13px;
  color: ${({ theme, state }) => (state ? theme.color.primary : "#a0a0ac")};
`;
