import React, { Fragment, useCallback, useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { bannerData } from "../../../data/demo_data";
import arrowup from "../../../images/arrowup.svg";
import arrowdown from "../../../images/arrowdown.svg";

const BannerWrap = () => {
  const [openBanner, setOpenBanner] = useState(false);
  const [activeBanner, setActiveBanner] = useState(0);

  const handleOpen = useCallback(() => {
    setOpenBanner(!openBanner);
    setActiveBanner(!openBanner ? null : 0);
  }, [openBanner]);

  useEffect(() => {
    if (activeBanner === null) return;
    const handleBanner = setTimeout(() => {
      setActiveBanner(
        activeBanner === bannerData.length - 1 ? 0 : activeBanner + 1
      );
    }, 2000);
    return () => clearTimeout(handleBanner);
  }, [activeBanner]);

  return (
    <BannerSection>
      {bannerData.map((data, index) => {
        return (
          <Fragment key={index}>
            <BannerItem activeBanner={activeBanner} index={index}>
              {data.label}&nbsp;
              {data.price}&nbsp;
              {`(${data.comment})`}
            </BannerItem>
            {index === 0 && (
              <ArrowBtn openBanner={openBanner} onClick={handleOpen}>
                <span />
              </ArrowBtn>
            )}
          </Fragment>
        );
      })}
    </BannerSection>
  );
};

export default BannerWrap;

const BannerSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 9fr 1fr;
  grid-template-rows: 40px auto;
  background: ${({ theme }) => theme.color.primary};
  overflow: hidden;
`;
const BannerKeyFrame = keyframes`
  from {
    margin-top:40px;
  }
  to {
    margin-top:0;
  }
`;

const BannerItem = styled.div`
  grid-column-start: 2;
  display: ${({ activeBanner, index }) =>
    activeBanner === null || activeBanner === index ? "flex" : "none"};
  justify-content: center;
  align-items: center;
  height: 40px;
  font-size: 14px;
  color: #fff;
  ${({ activeBanner }) =>
    activeBanner !== null &&
    css`
      animation: ${BannerKeyFrame} 2s infinite;
    `}
`;
const ArrowBtn = styled.div`
  grid-row-start: 1;
  grid-column-start: 3;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  span {
    width: 15px;
    height: 15px;
    background: url(${({ openBanner }) => (openBanner ? arrowup : arrowdown)})
      no-repeat;
    background-size: contain;
    background-position: center;
    pointer-events: none;
  }
`;
