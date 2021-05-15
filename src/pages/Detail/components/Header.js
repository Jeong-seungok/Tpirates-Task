import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import backbtn from "../../../images/backbtn.svg";
import view from "../../../images/view.svg";

const HeaderWrap = ({ market, label }) => {
  const history = useHistory();
  return (
    <Header>
      <BackBtn
        onClick={() => {
          history.push("/");
        }}
      />
      <MarketName>
        {label}&nbsp;{market}
      </MarketName>
      <ViewBox>32.7 만</ViewBox>
    </Header>
  );
};

export default HeaderWrap;

const Header = styled.header`
  display: flex;
  padding: 10px;
  color: ${({ theme }) => theme.color.darkgray};
  background: ${({ theme }) => theme.color.white};
  line-height: 29px;
`;
const BackBtn = styled.div`
  width: 29px;
  height: 29px;
  padding: 7px;
  background: url(${backbtn}) no-repeat;
  background-size: 15px;
  background-position: 3px 7px;
  cursor: pointer;
`;
const MarketName = styled.span`
  flex: 1;
  max-width: 316px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 500;
`;
const ViewBox = styled.div`
  position: relative;
  padding-left: 20px;
  font-size: 13px;
  color: ${({ theme }) => theme.color.lightgray};
  &:before {
    position: absolute;
    content: "";
    top: 50%;
    left: 0;
    width: 20px;
    height: 20px;
    transform: translateY(-50%);
    background: url(${view}) no-repeat;
    background-size: contain;
  }
`;
