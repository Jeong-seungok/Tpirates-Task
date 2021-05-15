import React, { useCallback, useState } from "react";
import styled, { css } from "styled-components";
import MoreButton from "../atoms/MoreButton";
import arrow from "../../images/barrowdown.svg";

const Description = ({ children, layout, title }) => {
  const [viewmore, setViewmore] = useState(false);

  const hanldeView = useCallback(() => {
    setViewmore(!viewmore);
  }, [viewmore]);

  return (
    <DescriptionBox layout={layout} viewmore={viewmore}>
      {children}
      <PriceDetailMoreBtn viewmore={viewmore}>
        <MoreButton EventHandler={hanldeView}>
          {title} {viewmore ? "접기" : "상세보기"}
          <MoreIcon rotate={viewmore ? 1 : 0} />
        </MoreButton>
      </PriceDetailMoreBtn>
    </DescriptionBox>
  );
};

export default Description;

const DescriptionBox = styled.div`
  position: relative;
  max-height: ${({ viewmore }) => (viewmore ? "initial" : "752px")};
  overflow: ${({ viewmore }) => (viewmore ? "initial" : "hidden")};
  ${({ layout, theme }) => {
    if (layout === 0)
      return css`
        padding: 10px;
        background: ${theme.color.white};
      `;
  }}
`;

const PriceDetailMoreBtn = styled.div`
  position: ${({ viewmore }) => (viewmore ? "relative" : "absolute")};
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0 10px 40px;
  color: ${({ theme }) => theme.color.primary};
  background: ${({ theme }) => theme.color.white};
  &::before {
    content: "";
    position: absolute;
    display: ${({ viewmore }) => (viewmore ? "none" : "block")};
    top: -100px;
    left: 0;
    right: 0;
    width: 100%;
    height: 100px;
    background: transparent linear-gradient(181deg, #ffffff12 0%, #ffffff 100%)
      0% 0% no-repeat padding-box;
  }
`;
const MoreIcon = styled.span`
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-left: 16px;
  background: url(${arrow}) no-repeat;
  background-size: 25px 25px;
  background-position: center;
  vertical-align: middle;
  transform: ${({ rotate }) => (rotate ? "rotateX(180deg)" : "none")};
`;
