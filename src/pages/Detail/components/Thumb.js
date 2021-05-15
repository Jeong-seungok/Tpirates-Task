import React, { useCallback, useState } from "react";
import styled from "styled-components";
import TagBox from "../../../ui/atoms/TagBox";
import { TagsText } from "../../../ui/modules/MarketCard";
import favoriteOff from "../../../images/bul_favorite.svg";
import favoriteOn from "../../../images/bul_favorite_on.svg";
const ThumbWrap = ({ tags, favorite }) => {
  const [favoriteStatus, setFavoriteStatus] = useState(
    favorite === "off" ? false : true
  );
  const handleFavorite = useCallback(() => {
    setFavoriteStatus(!favoriteStatus);
  }, [favoriteStatus]);
  return (
    <ThumbSection>
      <img
        src="https://cdn.tpirates.com/files/etc/2019/0715/8259092a3e2d212077b212fa3ec349f7_FThumb.jpg"
        alt="썸네일"
      />
      <TagWrap>
        {tags?.map((tag, index) => (
          <TagBox key={index} layout={tag}>
            {TagsText[tag]}
          </TagBox>
        ))}
      </TagWrap>
      <FavoriteWrap status={favoriteStatus} onClick={handleFavorite} />
    </ThumbSection>
  );
};

export default ThumbWrap;

const ThumbSection = styled.section`
  position: relative;
  font-size: 0;
  img {
    width: 100%;
    max-height: 190px;
  }
`;
const TagWrap = styled.div`
  display: flex;
  position: absolute;
  bottom: 10px;
  left: 10px;
  height: 22px;
`;

const FavoriteWrap = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 22px;
  height: 22px;
  border-radius: 5px;
  background: url(${({ status }) => (status ? favoriteOn : favoriteOff)})
    no-repeat;
  background-size: 13px 13px;
  background-position: center;
  background-color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
`;
