import { ReactNode } from "react"

export type ListOptions = {
    text: PageTypes,
    icon: ReactNode
}

export enum PageTypes {
    Dashboard = "Dashboard",
    PropertyStatistics = "Property Statistics",
    CRMManagement = "CRM Management",
    PropertySearch = "Property Search",
    ProfileSettings = "Profile Settings"
}

export const drawrWidth = 280;
