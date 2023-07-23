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
  padding: 0px 10px;
`;

export const Header = styled.div`
  height: 15%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 15px;
`;
export const ModalContent = styled.div`
  height: 85%;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #797979;
    border-radius: 20px;
  }
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 20px;
  color: #505050;
`;
