import React, { useState } from "react";
import style from "./dashboard.module.css";
import SideBar from "./sidebar/sidebar";
import Content from "./content/content";
const Dashboard = (props) => {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarIsOpen);
  };
  return (
    <>
      <div className="App">
        <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
        <Content toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen}>
          {props.children}
        </Content>
      </div>
    </>
  );
};

export default Dashboard;
