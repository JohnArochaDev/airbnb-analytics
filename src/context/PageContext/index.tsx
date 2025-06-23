import React, { createContext, useContext, useState, ReactNode } from "react";

import { PageTypes } from "../../utils/types";

type PageContextType = {
  currentPage: PageTypes;
  setCurrentPage: (page: PageTypes) => void;
};

const PageContext = createContext<PageContextType | undefined>(undefined);

export const PageProvider = ({ children }: { children: ReactNode }) => {
  const [currentPage, setCurrentPage] = useState<PageTypes>(PageTypes.Dashboard);

  return (
    <PageContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePage = () => {
  const context = useContext(PageContext);
  if (!context) throw new Error("usePage must be used within a PageProvider");
  return context;
};