import { Outlet } from "react-router-dom";
import { MainContainer } from "../../styles/style";
import HeaderFunctional from "../Header/HeaderFunctional";

const MainLayout = () => {
  return (
    <MainContainer>
      <HeaderFunctional />
      <Outlet />
    </MainContainer>
  );
};

export default MainLayout;
