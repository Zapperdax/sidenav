import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./sidebarStyles.css";
import {
  FaHome,
  FaFile,
  FaEnvelope,
  FaShoppingCart,
  FaSave,
  FaUsers,
  FaBars,
  FaSearch,
} from "react-icons/fa";
import { IoMdAnalytics } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const routes = [
  {
    path: "/",
    name: "Home",
    icon: <FaHome />,
  },
  {
    path: "/analytics",
    name: "Analytics",
    icon: <IoMdAnalytics />,
  },
  {
    path: "/fileManager",
    name: "FileManager",
    icon: <FaFile />,
  },
  {
    path: "/messages",
    name: "Messages",
    icon: <FaEnvelope />,
  },
  {
    path: "/order",
    name: "Order",
    icon: <FaShoppingCart />,
  },
  {
    path: "/saved",
    name: "Saved",
    icon: <FaSave />,
  },
  {
    path: "/settings",
    name: "Settings",
    icon: <IoSettingsSharp />,
  },
  {
    path: "/users",
    name: "Users",
    icon: <FaUsers />,
  },
];

const Sidebar = ({ children }) => {
  const [open, setOpen] = useState(false);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      opacity: 0,
    },
    show: {
      width: "9.5rem",
      padding: "0.5rem 0.7rem",
      opacity: 1,
      transition: {
        duration: 0.1,
      },
    },
  };
  const showAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "auto",
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };
  const toggle = () => {
    setOpen((preValue) => !preValue);
  };
  return (
    <div className="main-container">
      <motion.div
        animate={{
          width: open ? "200px" : "40px",
          transition: {
            duration: 0.2,
            type: "spring",
            damping: 20,
          },
        }}
        className="sidebar"
      >
        <div className="topSection">
          {open && (
            <motion.h1
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={showAnimation}
              className="logo"
            >
              MawTsu
            </motion.h1>
          )}
          <div className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        <div className="search">
          <div className="searchIcon">
            <FaSearch />
          </div>
          <AnimatePresence>
            {open && (
              <motion.input
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={inputAnimation}
                type="text"
                placeholder="Search"
              />
            )}
          </AnimatePresence>
        </div>
        <section className="routes">
          {routes.map((route) => (
            <NavLink
              activeClassName="active"
              to={route.path}
              key={route.name}
              className="link"
            >
              <div className="icon">{route.icon}</div>
              <AnimatePresence>
                {open && (
                  <motion.div
                    initial="hidden"
                    exit="hidden"
                    animate="show"
                    variants={showAnimation}
                    className="linkText"
                  >
                    {route.name}
                  </motion.div>
                )}
              </AnimatePresence>
            </NavLink>
          ))}
        </section>
      </motion.div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
