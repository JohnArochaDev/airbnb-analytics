import { FC } from "react";
import { Navbar } from "../../components/Dashboard/Navbar";
import { SideBar } from "../../components/Dashboard/SideBar";
import { DashboardPage } from "../../components/Dashboard/DashboardPage";

export const HomeDashboard: FC = () => {
  return (
    <>
      <Navbar />
      <SideBar />
      <DashboardPage />
    </>
  );
};
