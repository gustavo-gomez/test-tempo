import React, { useState } from "react";
import { Drawer, DrawerTrigger, DrawerContent, DrawerClose } from "./ui/drawer";
import { Button } from "./ui/button";
import { Icons } from "./ui/icons";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Button onClick={toggleSidebar} className="hamburger-menu">
        <span className="sr-only">Open sidebar</span>
        <Icons.logo className="w-6 h-6" />
      </Button>
      <Drawer isOpen={isOpen} onClose={toggleSidebar}>
        <DrawerContent className="w-64 bg-white p-4">
          <DrawerClose asChild>
            <Button className="close-button">Close</Button>
          </DrawerClose>
          <div className="logo mb-4">
            <Icons.logo className="w-12 h-12" />
          </div>
          <div className="user-info mb-4">
            <p>User Name</p>
            <p>user@example.com</p>
          </div>
          <nav className="menu">
            <ul>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
              <li>
                <Link to="/settings">Settings</Link>
              </li>
              <li>
                <Link to="/payments">Payments</Link>
              </li>
            </ul>
          </nav>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Sidebar;
