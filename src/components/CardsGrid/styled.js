import styled from "styled-components";
import { devices } from "../../styles/constants";

export const CardsGridContainer = styled.div`
  top: 148px;
  width: 100%;
  max-width: 1280px;
  display: grid;
  grid-template-columns: 256px;
  gap: 20px;
  justify-content: center;
  position: relative;

  @media ${devices.sm} {
    grid-template-columns: repeat(2, 256px);
  }
  @media ${devices.md} {
    grid-template-columns: repeat(3, 256px);
  }
  @media ${devices.lg} {
    grid-template-columns: repeat(4, 256px);
  }
`;
