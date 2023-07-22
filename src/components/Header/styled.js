import styled from "styled-components";

export const Header = styled.header`
  background-color: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  top: 0;
  position: fixed;
  width: 100%;
  z-index: 2;
`;

export const LogoImage = styled.img`
  width: 80px;
  object-fit: contain;
`;
export const VerticalSeparator = styled.div`
  border-right: 1px solid #a8a8a8;
  opacity: 0.5;
  height: 30px;
  margin: 5px 20px;
`;

export const Input = styled.input`
  width: 90%;
  height: 30px;
  margin: 5px 20px;
  border: 0px;
  &:focus {
    outline: none;
  }
`;

export const FormContainer = styled.div`
  flex-grow: 1;
`;
