import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  const List = useMemo(
    () => ["이용약관", "개인정보방침", "위치기반서비스이용약관"],
    []
  );
  return (
    <FooterWrap>
      <ListBox>
        {List.map((list, index) => (
          <ListItem key={index}>
            <Link to="#">{list}</Link>
          </ListItem>
        ))}
      </ListBox>
      <div>(주)더파이러츠</div>
    </FooterWrap>
  );
};

export default Footer;

const FooterWrap = styled.footer`
  background: #eee;
  padding: 20px 0 10px;
  font-size: 13px;
  line-height: 19px;
  color: #969696;
  text-align: center;
`;
const ListBox = styled.ul`
  display: flex;
  justify-content: center;
  a {
    position: relative;
    color: #969696;
    margin: 0 5px;
    &:after {
      content: "";
      position: absolute;
      width: 2px;
      height: 2px;
      background: #969696;
      border-radius: 50%;
      top: 50%;
      right: -6px;
      transform: translateY(-50%);
    }
  }
`;
const ListItem = styled.li`
  a {
    position: relative;
    color: #969696;
    margin: 0 5px;
    &:after {
      content: "";
      position: absolute;
      width: 2px;
      height: 2px;
      background: #969696;
      border-radius: 50%;
      top: 50%;
      right: -6px;
      transform: translateY(-50%);
    }
  }
  &:last-child {
    a {
      &::after {
        display: none;
      }
    }
  }
`;
