import React, { useMemo } from "react";
import styled from "styled-components";
import { TypeData, MenuData } from "../../../data/demo_data";
import MenuCard from "../../../ui/modules/MenuCard";
import Description from "../../../ui/modules/Description";
import TypeCard from "../../../ui/modules/TypeCard";

const PriceContainer = ({ todayPrice }) => {
  const Today = useMemo(() => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const day = today.getDay();
    const days = ["일", "월", "화", "수", "목", "금", "토"];
    return `${month}.${date}(${days[day]})`;
  }, []);

  return (
    <div>
      <Notice>
        "주문량이 많아 문자는 누락될 수 있으니 전화로 문의 부탁드립니다!"
      </Notice>
      <PriceItem>
        <PriceItemTitle>
          <div>
            메뉴 가격 <span>한 접시 씩 구매 시 추천</span>
          </div>
        </PriceItemTitle>
        <img
          src="https://cdn.tpirates.com/files/etc/2021/0507/8e5b15c7ddf2101a5a44145446ed8b20_FThumb.jpg"
          alt="공지"
        />
        <Description title="메뉴구성">
          {MenuData.map((data, index) => (
            <MenuCard key={index} data={data} />
          ))}
        </Description>
      </PriceItem>
      <PriceItem>
        <PriceItemTitle>
          <div>
            품목 시세 <span>마리당 구매 시 추천</span>
          </div>
          <DateBox today={todayPrice}>
            {Today} {todayPrice ? "오늘시세" : ""}
          </DateBox>
        </PriceItemTitle>
        <Description layout={0} title="품목구성">
          <Notice2 today={todayPrice}>
            {todayPrice
              ? "오늘 조사된 최신시세입니다."
              : "오늘자 시세가 아닙니다. 시세에 변동이 있을 수 있습니다."}
          </Notice2>
          {TypeData.map((type, index) => (
            <TypeCard key={index} data={type} />
          ))}
        </Description>
      </PriceItem>
    </div>
  );
};

export default PriceContainer;

const Notice = styled.div`
  padding: 25px 15px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.color.primary};
  background: ${({ theme }) => theme.color.white};
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  letter-spacing: -0.64px;
`;
const PriceItem = styled.div`
  margin-bottom: 10px;
`;
const PriceItemTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 9px 15px;
  background: #f8f8f8;
  font-size: 15px;
  font-weight: 500;
  border: 1px solid ${({ theme }) => theme.color.lightdarkgray};
  border-width: 1px 0;
  color: ${({ theme }) => theme.color.darkgray};
  span {
    font-size: 13px;
    font-weight: 400;
    color: ${({ theme }) => theme.color.lightgray};
  }
`;

const DateBox = styled.div`
  font-size: 13px;
  color: ${({ today }) => (today ? "#1c79bc" : "#de2222b3")};
`;

const Notice2 = styled.div`
  height: 22px;
  border-radius: 5px;
  background: ${({ today }) => (today ? "#1c79bcb3" : "#de2222b3")};
  font-size: 12px;
  color: ${({ theme }) => theme.color.white};
  text-align: center;
  line-height: 22px;
`;
