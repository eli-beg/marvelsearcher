import styled from "styled-components";

export const ModalBackdrop = styled.dialog`
  position: fixed;
  top: 70px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  border-style: none;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  width: 437px;
  height: 448px;
  border-radius: 5px;
  background-color: white;
`;

export const Header = styled.div`
  height: 15%;
  background-color: pink;
`;
export const ModalContent = styled.div`
  height: 80%;
  background-color: grey;
`;
