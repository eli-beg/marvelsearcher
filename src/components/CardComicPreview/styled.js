import styled from "styled-components";

export const Container = styled.div`
  margin-top: 146px;
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  /* padding-bottom: 40px;
  @media (max-width: 480px) {
    flex-direction: column-reverse;
    align-items: center; */
  /* width: 90%;
    height: 100%;
  } */
`;

export const Image = styled.img`
  width: 545px;
  height: 838px;
  object-fit: contain;
  /* 
  @media (max-width: 480px) {
    width: 250px;
    height: 400px;
    padding-top: 10px;
  } */
`;

export const Content = styled.div`
  padding: 20px 20px;
  height: 60%;
  display: flex;
  flex-direction: column;
  /* @media (max-width: 480px) {
    width: 100%;
  } */
`;

export const HeaderContent = styled.div`
  height: 25%;
  /* @media (max-width: 480px) {
    padding: 10px 0px;
    height: 15%;
  } */
`;
