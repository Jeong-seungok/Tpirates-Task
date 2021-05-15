import React, { useCallback, useState } from "react";
import styled from "styled-components";
import logo from "../../../images/logo.png";

const navItems = [
  "홈",
  "시장",
  "쇼핑",
  "콘텐츠",
  "시세",
  "도매",
  "후기",
  "문의",
];

const HeaderWrap = () => {
  const [select, setSelect] = useState(0);
  const handleSelect = useCallback(index => {
    setSelect(index);
  }, []);

  return (
    <Header>
      <LogoLoginBox>
        <Logo />
        <Login>로그인/가입</Login>
      </LogoLoginBox>
      <NavBox>
        {navItems.map((item, index) => (
          <NavItem
            key={index}
            selected={index === select}
            onClick={() => {
              handleSelect(index);
            }}
          >
            {item}
          </NavItem>
        ))}
      </NavBox>
    </Header>
  );
};

export default HeaderWrap;

const Header = styled.header`
  background: ${({ theme }) => theme.color.white};
`;
const LogoLoginBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.h2`
  width: 162px;
  height: 36px;
  margin: 7px 10px;
  background: url(${logo}) no-repeat;
  background-size: cover;
  background-position: center;
`;
const Login = styled.div`
  padding: 10px;
  font-size: 13px;
  color: ${({ theme }) => theme.color.lightgray};
`;

const NavBox = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;
const NavItem = styled.li`
  padding: 3px 1%;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme, selected }) =>
    selected ? theme.color.primary : theme.color.gray};
  cursor: pointer;
`;
