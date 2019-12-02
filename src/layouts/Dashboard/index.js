import React from "react";
import { Layout, MainContent } from "./styles";

import DashboardNavbar from "components/Navbars/Dashboard";
import Sidebar from "components/Sidebar";
import DashboardFooter from "components/Footers/Dashboard";

const DashboardLayout = () => {
  return (
    <>
      <Layout>
        <DashboardNavbar />
        <Sidebar />
        <MainContent></MainContent>
        <DashboardFooter />
      </Layout>
    </>
  );
};

export default DashboardLayout;
