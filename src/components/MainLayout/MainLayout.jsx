import { Outlet } from "react-router-dom";
import { MainContainer } from "../../styles/style";
import HeaderFunctionalComponent from "../Header/HeaderFunctionalComponent";

const MainLayout = () => {
  return (
    <MainContainer>
      <HeaderFunctionalComponent />
      <Outlet />
    </MainContainer>
  );
};

export default MainLayout;
