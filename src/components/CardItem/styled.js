import styled from "styled-components";
import { CoverShadowImageToTop, Title } from "../../styles/theme";

export const Card = styled.div`
  height: 380px;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
`;

export const ItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CoverShadowImageToRight = styled(CoverShadowImageToTop)`
  background: radial-gradient(
    circle at top right,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0) 20%
  );
`;

export const CustomizedTitle = styled(Title)`
  position: absolute;
  font-size: 19px;
  color: #ffffff;
  bottom: 20px;
  z-index: 999;
  margin-left: 12px;
`;

export const FavIconContainer = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 999;
`;
