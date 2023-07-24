import styled from "styled-components";

export const Card = styled.div`
  width: 256px;
  height: 380px;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  margin: 20px;
  cursor: pointer;
`;
export const ItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CoverShadowToTop = styled.div`
  position: absolute;
  width: 256px;
  height: 380px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0.2) 20%,
    rgba(0, 0, 0, 0) 100%
  );
`;

export const CoverShadowTopRight = styled.div`
  position: absolute;
  width: 256px;
  height: 380px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: radial-gradient(
    circle at top right,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0) 20%
  );
`;

export const Title = styled.p`
  position: absolute;
  color: #ffffff;
  letter-spacing: -0.25px;
  font-size: 19px;
  font-weight: bold;
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
