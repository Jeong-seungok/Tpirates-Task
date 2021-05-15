import React from "react";
import styled, { css } from "styled-components";

const TagBox = ({ children, layout }) => {
  return <TagSpan layout={layout}>{children}</TagSpan>;
};

export default TagBox;

const TagSpan = styled.span`
  display: inline-flex;
  align-items: center;
  font-size: 10.8px;
  color: ${({ theme }) => theme.color.white};
  padding: 0 3px;
  border-radius: 3px;
  margin-right: 3px;
  ${({ layout, theme }) => {
    if (layout === "day-delivery")
      return css`
        background: ${theme.color.green};
      `;
    if (layout === "today-price")
      return css`
        background: ${theme.color.primary};
      `;
    if (layout === "phone")
      return css`
        padding: 5px 10px;
        background: ${theme.color.white};
        color: ${theme.color.primary};
        font-size: 14px;
        font-weight: 500;
        a {
          color: ${theme.color.primary};
        }
      `;
  }}
`;
