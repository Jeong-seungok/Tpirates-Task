import React from "react";
import styled from "styled-components";

const MoreButton = ({ children, EventHandler }) => {
  return <ButtonBox onClick={EventHandler}>{children}</ButtonBox>;
};

export default MoreButton;

const ButtonBox = styled.button`
  width: 100%;
  padding: 11px 15px;
  border: 1px solid ${({ theme }) => theme.color.primary};
  background: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.primary};
  border-radius: 5px;
  font-size: 15px;
  font-weight: 500;
  outline: none;
  cursor: pointer;
`;
