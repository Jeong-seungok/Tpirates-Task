import React from "react";
import { Carousel } from "react-responsive-carousel";
import styled, { css } from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const MenuCard = ({ data }) => {
  return (
    <MenuBox>
      <MenuTitle>{data.label}</MenuTitle>
      <CarouselBox>
        <Carousel showThumbs={false} showStatus={false} showArrows={false}>
          {data.thumbs.map((thumb, index) => (
            <div key={index}>
              <img src={thumb} alt="메뉴 이미지" />
            </div>
          ))}
        </Carousel>
      </CarouselBox>
      <MenuItems>
        {data.type.map((type, index) => (
          <MenuItem key={index}>
            <div>
              <MenuText rate>{type.rate}</MenuText>
              <MenuText detail>{type.detail}</MenuText>
            </div>
            <div>
              <MenuText price={type.saleprice ? "sale" : "origin"}>
                {type.price.toLocaleString()}&nbsp;원
              </MenuText>
              {type.saleprice && (
                <MenuText saleprice>
                  {type.saleprice.toLocaleString()}&nbsp;원
                </MenuText>
              )}
            </div>
          </MenuItem>
        ))}
      </MenuItems>
      {data.message.map((message, index) => (
        <MessageBox key={index}>{message}</MessageBox>
      ))}
    </MenuBox>
  );
};

export default MenuCard;
const MenuBox = styled.div`
  padding: 13px 15px;
  margin-top: 20px;
  background: ${({ theme }) => theme.color.white};
`;
const MenuTitle = styled.h2`
  font-size: 15px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.darkgray};
`;
const CarouselBox = styled.div`
  padding: 10px 0;
  img {
    height: 90%;
  }
`;
const MenuItems = styled.div`
  padding: 0 0 10px;
`;
const MenuItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 26px;
`;
const MenuText = styled.span`
  ${({ rate, detail, price, saleprice, theme }) => {
    if (rate)
      return css`
        padding-right: 5px;
        font-size: 13px;
        font-weight: 700;
        color: ${theme.color.darkgray};
      `;
    if (detail)
      return css`
        font-size: 13px;
        color: ${theme.color.gray};
      `;
    if (price === "origin")
      return css`
        font-size: 14px;
        color: #0e0e0e;
      `;
    if (price === "sale")
      return css`
        font-size: 13px;
        text-decoration: line-through;
        color: ${theme.color.lightgray};
      `;
    if (saleprice)
      return css`
        margin-left: 10px;
        font-size: 14px;
        font-weight: 700;
        color: ${theme.color.red};
      `;
  }}
`;
const MessageBox = styled.p`
  min-height: 23px;
  letter-spacing: -0.65px;
  line-height: 23px;
  font-size: 13px;
  color: ${({ theme }) => theme.color.gray};
`;
