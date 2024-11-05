import React from "react";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";
import { UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import "./styles.css";

const SidemenuConfig = () => {
  const navigate = useNavigate();
  const menuItems = [
    {
      key: "call-logs",
      icon: <FiPhoneCall />,
      label: "Call Logs",
      path: "call-logs",
    },
    {
      key: "nav2",
      icon: <VideoCameraOutlined />,
      label: "nav 2",
    },
  ];

  const handleMenu = (e) => {
    navigate(`/${e.key}`);
  };

  return (
    <div style={{ position: "relative" }}>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["call-logs"]}
        items={menuItems}
        onClick={handleMenu}
        className="sidemenu_button"
      />
    </div>
  );
};
export default SidemenuConfig;
