import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElement";
const Sidebar = ({  isOpen , toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about me" onClick={toggle}>
            About Me
          </SidebarLink>
          <SidebarLink to="resume" onClick={toggle}>
            Skills And Projects
          </SidebarLink>
          <SidebarLink to="connect" onClick={toggle}>
            Connect
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
