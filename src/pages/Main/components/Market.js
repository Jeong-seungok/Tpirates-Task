import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { storeData } from "../../../data/demo_data";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import MarketCard from "../../../ui/modules/MarketCard";

const MarketWrap = () => {
  const TARGET = useRef(null);
  const OFFSET = useRef(0);
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [hasmore, setHasmore] = useState(true);

  const onIntersect = useCallback(
    ([entries], observer) => {
      if (entries.isIntersecting) {
        const currentData = storeData.slice(
          OFFSET.current * 10,
          OFFSET.current * 10 + 10
        );
        if (currentData.length === 0) setHasmore(false);
        else {
          setLoad(true);
          setTimeout(() => {
            setData(data.concat(currentData));
            setLoad(false);
            OFFSET.current++;
          }, 2000);
        }
        observer.unobserve(TARGET.current);
      }
    },
    [data]
  );

  useEffect(() => {
    let observer;
    if (hasmore) {
      observer = new IntersectionObserver(onIntersect, { threshold: 0 });
      observer.observe(TARGET.current);
    }
    return () => observer?.disconnect();
  }, [hasmore, onIntersect]);

  return (
    <>
      <section>
        {data.length === 0 ? (
          <EmptyBox>검색결과가 없습니다.</EmptyBox>
        ) : (
          data.map((data, index) => <MarketCard key={index} data={data} />)
        )}
        <LOADTARGET ref={TARGET} />
      </section>
      {load && (
        <LoaderBox>
          <Loader type="Bars" color="#777" height={50} width={50} />
        </LoaderBox>
      )}
    </>
  );
};

export default MarketWrap;

const EmptyBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh / 3 - 50px);
  text-align: center;
  font-size: 14px;
  color: ${({ theme }) => theme.color.lightgray};
`;

const LOADTARGET = styled.div`
  width: 100%;
  height: 5px;
`;

const LoaderBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
