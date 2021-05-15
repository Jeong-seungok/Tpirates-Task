import React, { useCallback, useState } from "react";
import styled, { css } from "styled-components";
import Location from "../../../images/location.svg";
import Time from "../../../images/time.svg";
import Phone from "../../../images/phone.svg";
import Delivery from "../../../images/delivery.svg";
import TagBox from "../../../ui/atoms/TagBox";

const DAYS = [
  "일요일",
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
];
const DAYTEXT = ["오늘", "내일", "모레"];
const Day = new Date().getDay();
const CurrentDays = DAYS.map((...args) => {
  const IDX = Day + args[1] > 6 ? (Day + args[1]) % 7 : Day + args[1];
  return DAYS[IDX];
});

const InfoWrap = () => {
  const [viewmore, setViewmore] = useState(false);
  const hanldeView = useCallback(() => {
    setViewmore(!viewmore);
  }, [viewmore]);

  return (
    <InfoBox>
      <InfoItem location>
        서울특별시 동작구 노들로 674 노량진수산시장 1층 162,63,167호
      </InfoItem>
      <InfoItem time>
        <div>
          {CurrentDays.map((day, index) => {
            if (index <= 2)
              return (
                <TimeDetail key={index}>
                  {day} ({DAYTEXT[index]}): 09:00 ~ 21:00
                </TimeDetail>
              );
            if (viewmore)
              return <TimeDetail key={index}>{day} : 09:00 ~ 21:00</TimeDetail>;
            else return null;
          })}
          {!viewmore && (
            <TimeDetail viewmore onClick={hanldeView}>
              더보기 ▾
            </TimeDetail>
          )}
        </div>
      </InfoItem>
      <InfoItem phone>
        <TagBox layout="phone">
          <a href="tel:010-7299-6364">010-7299-6364</a>
        </TagBox>
        <TagBox layout="phone">
          <a href="tel:02-816-9853">02-816-9853</a>
        </TagBox>
      </InfoItem>
      <InfoItem delivery>
        <div>
          <DeliverDetail>
            <span>퀵서비스</span>
            (전화문의)
          </DeliverDetail>
          <DeliverDetail>
            <span>고속화물</span>
            (전화문의)
          </DeliverDetail>
          <DeliverDetail>
            <span>택배</span>
            (전화문의)
          </DeliverDetail>
        </div>
      </InfoItem>
    </InfoBox>
  );
};

export default InfoWrap;

const InfoBox = styled.ul`
  padding: 15px;
  background: ${({ theme }) => theme.color.primary};
  font-size: 14px;
  color: ${({ theme }) => theme.color.white};
`;
const InfoItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 35px;
  min-height: 20px;
  line-height: 20px;
  margin-bottom: 10px;
  &::before {
    position: absolute;
    left: 0;
    top: 0;
    width: 20px;
    height: 20px;
    content: "";
  }

  ${({ phone, location, time, delivery }) => {
    if (location)
      return css`
        &:before {
          background: url(${Location}) no-repeat;
        }
      `;
    if (time)
      return css`
        &:before {
          background: url(${Time}) no-repeat;
        }
      `;
    if (phone)
      return css`
        &:before {
          background: url(${Phone}) no-repeat;
        }
      `;
    if (delivery)
      return css`
        margin-bottom: 0;
        &:before {
          background: url(${Delivery}) no-repeat;
        }
      `;
  }}
`;

const TimeDetail = styled.div`
  height: 20px;
  line-height: 20px;
  margin-bottom: 5px;
  cursor: ${({ viewmore }) => (viewmore ? "pointer" : "initial")};
  &:last-child {
    margin-bottom: 0;
  }
`;

const DeliverDetail = styled.div`
  height: 20px;
  line-height: 20px;
  margin-bottom: 5px;
  span {
    display: inline-block;
    width: 100px;
    text-align: left;
  }
`;
