import React, { useState } from "react";
import style from "./dashboard.module.css";
import SideBar from "./sidebar/sidebar";
import Content from "./content/content";
const Dashboard = () => {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarIsOpen);
    console.log("toggle Sidebar");
  };
  return (
    <>
      <div className="App">
        <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
        <Content toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen}>
          Some Text
        </Content>
      </div>
    </>
  );
};

export default Dashboard;
