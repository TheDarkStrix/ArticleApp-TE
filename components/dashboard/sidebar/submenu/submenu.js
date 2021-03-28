import React, { useState } from "react";
import { Collapse, NavItem, NavLink } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "next/link";

const SubMenu = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggle = () => setCollapsed(!collapsed);
  const { icon, title, items } = props;

  return (
    <div>
      <NavItem onClick={toggle} className={!collapsed ? "menu-open" : ""}>
        <NavLink className="dropdown-toggle">
          <FontAwesomeIcon icon={icon} className="mr-2" />
          {title}
        </NavLink>
      </NavItem>
      <Collapse
        isOpen={!collapsed}
        navbar
        className={["items-menu", !collapsed ? "mb-1" : ""].join(" ")}
      >
        {items.map((item, index) => (
          <NavItem key={index} className="pl-4">
            <NavLink tag={Link} to={item.target}>
              {item.title}
            </NavLink>
          </NavItem>
        ))}
      </Collapse>
    </div>
  );
};

export default SubMenu;
