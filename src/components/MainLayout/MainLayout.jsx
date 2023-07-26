import { Outlet } from "react-router-dom";
import HeaderFunctional from "../Header/HeaderFunctional";
import { MainContainer } from "../../styles/theme";

const MainLayout = () => {
  return (
    <MainContainer>
      <HeaderFunctional />
      <Outlet />
    </MainContainer>
  );
};

export default MainLayout;
