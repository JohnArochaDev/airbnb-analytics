import { FC } from "react";
import { Navbar } from "../../components/Dashboard/Navbar";
import { SideBar } from "../../components/Dashboard/SideBar";

export const HomeDashboard: FC = () => {
  return (
    <>
      <Navbar />
      <SideBar />
    </>
  );
};
