import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingSpin = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid red;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: ${spinAnimation} 1s linear infinite;
`;

export const LoadingContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
`;
