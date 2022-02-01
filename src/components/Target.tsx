import styled, { css } from "styled-components";
import { useState } from "react";

type targetPositon =
  | "topright"
  | "bottomright"
  | "bottomleft"
  | "topleft"
  | "center";

const Target: React.FC = () => {
  const [targetPosition, setTargetPosition] =
    useState<targetPositon>("topright");

  const evadeHandler = () => {
    if (targetPosition === "topright") {
      setTargetPosition("bottomright");
    } else if (targetPosition === "bottomright") {
      setTargetPosition("bottomleft");
    } else if (targetPosition === "bottomleft") {
      setTargetPosition("topleft");
    } else if (targetPosition === "topleft") {
      setTargetPosition("center");
    }
  };
  return (
    <TargetBody onMouseEnter={evadeHandler} position={targetPosition}>
      <MainTarget />
    </TargetBody>
  );
};

//styles

const TargetBody = styled.div<{ position: targetPositon }>`
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 2rem;
  right: 2rem;
  transition: transform ease 300ms;
  ${({ position }) => {
    if (position === "topright") {
      return css`
        transform: translateX(0) translateY(0);
      `;
    } else if (position === "bottomright") {
      return css`
        transform: translateX(0) translateY(35rem);
      `;
    } else if (position === "bottomleft") {
      return css`
        transform: translateX(-95rem) translateY(35rem);
      `;
    } else if (position === "topleft") {
      return css`
        transform: translateX(-95rem) translateY(0);
      `;
    } else if (position === "center") {
      return css`
        transform: translateX(-50rem) translateY(12rem);
      `;
    }
  }}
`;
const MainTarget = styled.div`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  background-color: red;
`;

export default Target;
