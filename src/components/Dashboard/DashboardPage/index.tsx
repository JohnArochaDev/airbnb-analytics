import { FC } from "react";

import { usePage } from "../../../context/PageContext";

import { PageTypes } from "../../../utils/types";

import { DashboardGrid } from "../../../pages/Dashboard";
import { CrmManagementGrid } from "../../../pages/CrmManagement";
import { ProfileSettingsGrid } from "../../../pages/ProfileSettings";
import { PropertySearchGrid } from "../../../pages/PropertySearch";
import { PropertyStatisticsGrid } from "../../../pages/PropertyStatistics";

export const DashboardPage: FC = () => {
  const { currentPage } = usePage();

  const pageComponents = [
    { page: PageTypes.Dashboard, component: <DashboardGrid /> },
    { page: PageTypes.CRMManagement, component: <CrmManagementGrid /> },
    { page: PageTypes.ProfileSettings, component: <ProfileSettingsGrid /> },
    { page: PageTypes.PropertySearch, component: <PropertySearchGrid /> },
    {
      page: PageTypes.PropertyStatistics,
      component: <PropertyStatisticsGrid />,
    },
  ];

  const current = pageComponents.find((p) => p.page === currentPage);

  return current!.component;
};
