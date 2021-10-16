import React from "react";
import "styles/Sidebar.scss";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";
import { BsBox } from "react-icons/bs";
import { HiOutlineUsers } from "react-icons/hi";
import { RiUserStarLine } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import { Link, useRouteMatch } from "react-router-dom";

export default function Sidebar() {
  const { url } = useRouteMatch();
  return (
    <div className="sidebar">
      <h3 className="text-center pt-4 px-0 sidebar-title">Shopy Admin Panel</h3>
      <hr />
      <ul className="sidebar-nav">
        <div className="navs">
          <Link to={`${url}/dashboard`}>
            <li className="sidebar-nav-item">
              <AiOutlineDashboard className="sidebar-icon" />
              &nbsp; Dashboard
            </li>
          </Link>
          <hr />
          <Link to={`${url}/products`}>
            <li className="sidebar-nav-item">
              <BsBox className="sidebar-icon" />
              &nbsp; Products
            </li>
          </Link>
          <hr />
          <Link to={`${url}/orders`}>
            <li className="sidebar-nav-item">
              {" "}
              <IoCartOutline className="sidebar-icon" />
              &nbsp; Orders
            </li>
          </Link>
          <hr />
          <Link to={`${url}/customers`}>
            <li className="sidebar-nav-item">
              {" "}
              <HiOutlineUsers className="sidebar-icon" />
              &nbsp; Customers
            </li>
          </Link>
          <hr />
          <Link to={`${url}/employees`}>
            <li className="sidebar-nav-item">
              {" "}
              <RiUserStarLine className="sidebar-icon" />
              &nbsp; Employees
            </li>
          </Link>
        </div>
        <div className="extend"></div>
        {/* <hr /> */}
        <hr />
        <li className="sidebar-nav-item logout-btn">
          <FiLogOut className="sidebar-icon" />
          &nbsp; Logout
        </li>
      </ul>
    </div>
  );
}
