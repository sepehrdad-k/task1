import { useEffect, useState } from "react";
import styled, { css } from "styled-components";

const Curser: React.FC = () => {
  const [curserTop, setCurserTop] = useState("300px");
  const [curserLeft, setCurserLeft] = useState("500px");
  const curserPositionHandler = (e: MouseEvent) => {
    setCurserTop(`${e.clientY - 40}px`);
    setCurserLeft(`${e.clientX - 40}px`);
  };
  useEffect(() => {
    document.addEventListener("mousemove", curserPositionHandler);
    return () => {
      document.removeEventListener("mousemove", curserPositionHandler);
    };
  }, []);

  return <PageCurser x={curserLeft} y={curserTop} />;
};

//styles

const PageCurser = styled.div<{ x: string; y: string }>`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: green;
  position: fixed;
  pointer-events: none;
  z-index: 10;
  top: ${({ y }) =>
    css`
      ${y}
    `};
  left: ${({ x }) =>
    css`
      ${x}
    `};
`;

export default Curser;
