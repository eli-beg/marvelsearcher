import styled from "styled-components";

export const MainContainer = styled.main`
  width: 100%;
  height: 100vh;
  background-color: #f7f8fa;
`;

export const Header = styled.header`
  background-color: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
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
  flex-grow: 1;
  height: 30px;
  margin: 5px 20px;
  border-style: none;
`;
