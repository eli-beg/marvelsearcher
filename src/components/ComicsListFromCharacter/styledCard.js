import styled from "styled-components";

export const CardContainer = styled.div`
  height: 90px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 20px;
  cursor: pointer;
`;
export const Image = styled.img`
  width: 90px;
  border-radius: 5px;
  object-fit: fill;
`;
export const Content = styled.div`
  width: 70%;
  padding: 5px 15px;
  height: 100%;
  overflow: hidden;
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 12px;
  line-height: 1.5;
  color: #505050;
`;
export const Description = styled.p`
  font-size: 12px;
  height: 48px;
  font-weight: 400;
  line-height: 1.4;
  color: #505050;
  margin: 3px 0px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;

export const IconContainer = styled.span`
  margin-left: 5px;
`;
