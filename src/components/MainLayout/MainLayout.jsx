import { Outlet } from "react-router-dom";
import HeaderFunctional from "../Header/HeaderFunctional";
import { MainContainer } from "./styled";

const MainLayout = () => {
  return (
    <MainContainer>
      <HeaderFunctional />
      <Outlet />
    </MainContainer>
  );
};

export default MainLayout;
