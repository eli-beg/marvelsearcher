import styled from "styled-components";
import { devices } from "../../styles/constants";
import { Description, Subtext, Title } from "../../styles/theme";

export const Container = styled.div`
  margin-top: 146px;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
  flex-direction: column-reverse;
  @media ${devices.sm} {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const Image = styled.img`
  width: 300px;
  height: 461px;
  object-fit: contain;

  @media ${devices.lg} {
    width: 545px;
    height: 838px;
  }
`;

export const Content = styled.div`
  padding: 0px 40px;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media ${devices.sm} {
    height: 100%;
  }
`;

export const HeaderContent = styled.div`
  height: 100%;
  padding-bottom: 20px;
  @media ${devices.sm} {
    padding: 40px 0px;
    height: 15%;
  }
`;

export const CustomizedTitle = styled(Title)`
  font-size: 15px;

  @media ${devices.sm} {
    font-size: 20px;
  }
`;

export const CustomizedSubtext = styled(Subtext)`
  font-size: 15px;

  @media ${devices.sm} {
    font-size: 20px;
  }
`;

export const CustomizedDescription = styled(Description)`
  font-size: 12px;
  padding-bottom: 40px;
  @media ${devices.sm} {
    font-size: 16px;
  }
`;
