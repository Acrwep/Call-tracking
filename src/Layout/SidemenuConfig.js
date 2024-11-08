import React, { useState, useEffect } from "react";
import { Menu } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import { FiBarChart, FiPhoneCall } from "react-icons/fi";
import { UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { LuHistory } from "react-icons/lu";
import { FiUsers } from "react-icons/fi";
import "./styles.css";

const SidemenuConfig = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedKey, setSelectedKey] = useState("");

  const menuItems = [
    {
      key: "dashboard",
      icon: <FiBarChart size={16} />,
      label: "Dashboard",
      path: "dashboard",
    },
    {
      key: "call-logs",
      icon: <FiPhoneCall size={16} />,
      label: "Call Logs",
      path: "call-logs",
    },
    {
      key: "messages",
      icon: <VideoCameraOutlined size={17} />,
      label: "Messages",
    },
    {
      key: "contacts",
      icon: <FiUsers size={17} />,
      label: "Contacts",
    },
    {
      key: "browserhistory",
      icon: <LuHistory size={17} />,
      label: "Browser History",
    },
  ];

  useEffect(() => {
    const accessToken = localStorage.getItem("Accesstoken");
    const pathName = location.pathname.split("/")[1];

    if (accessToken === null) {
      navigate("/login");
      return;
    }
    if (location.pathname === "/") {
      setSelectedKey("dashboard");
    }

    setSelectedKey(pathName);
  }, []);

  const handleMenu = (e) => {
    navigate(`/${e.key}`);
    setSelectedKey(e.key);
  };

  return (
    <div style={{ position: "relative" }}>
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[selectedKey]}
        items={menuItems}
        onClick={handleMenu}
        className="sidemenu_button"
      />
    </div>
  );
};
export default SidemenuConfig;
