import React from "react";
import { Container } from "reactstrap";

import Topbar from "../topbar/topbar";

const Content = (props) => (
  <Container
    fluid
    className={["content", props.sidebarIsOpen ? "is-open" : ""].join(" ")}
  >
    <Topbar toggleSidebar={props.toggleSidebar} />
    {props.children}
  </Container>
);

export default Content;
