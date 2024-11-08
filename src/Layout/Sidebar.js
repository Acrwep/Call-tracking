import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Route, Routes } from "react-router-dom";
import { RiLogoutCircleLine } from "react-icons/ri";
import Login from "../Login/Login";
import Users from "../Users/Users";
import "./styles.css";
import { Button, Layout, Menu, theme } from "antd";
import SidemenuConfig from "./SidemenuConfig";
import { RiMenu3Fill } from "react-icons/ri";
import CallLogs from "../Call-logs/Call-logs";
import Dashboard from "../Dashboard/Dashboard";
import Messages from "../Messages/Messages";
import Contacts from "../Contacts/Contacts";
import BrowserHistory from "../BrowsingHistory/BrowserHistory";
const { Header, Sider, Content } = Layout;
// import { FaHome, FaInfo, FaServicestack, FaEnvelope } from "react-icons/fa"; // Example icons

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);
  const [showLayout, setShowLayout] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  useEffect(() => {
    const AccessToken = localStorage.getItem("Accesstoken");
    if (AccessToken) {
      if (location.pathname === "/") {
        navigate("/dashboard");
        setShowLayout(true);
      } else {
        navigate(location.pathname);
        setShowLayout(true);
      }
    } else {
      navigate("/login");
      setShowLayout(false);
    }
  }, []);

  useEffect(() => {
    const handleStorageUpdate = () => {
      console.log("comes from login");
      const AccessToken = localStorage.getItem("Accesstoken");
      if (AccessToken) {
        navigate(location.pathname);
        setShowLayout(true);
      } else {
        navigate("/login");
        setShowLayout(false);
      }
    };
    window.addEventListener("localStorageUpdated", handleStorageUpdate);

    return () => {
      window.removeEventListener("localStorageUpdated", handleStorageUpdate);
    };
  }, [navigate, location.pathname, setShowLayout]);

  // Toggle sidebar visibility
  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    navigate("/login");
    localStorage.removeItem("Accesstoken");
  };

  return (
    <>
      {location.pathname === "/login" ? (
        <>
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
        </>
      ) : showLayout === true ? (
        <Layout>
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="demo-logo-vertical" />
            <SidemenuConfig />
            <div className="logout_container" onClick={handleLogout}>
              <RiLogoutCircleLine size={24} />
              {collapsed === false ? <p className="logout_text">Logout</p> : ""}
            </div>
          </Sider>
          <Layout>
            <Header
              style={{
                padding: 0,
                background: colorBgContainer,
              }}
            >
              <Button
                type="text"
                icon={<RiMenu3Fill size={20} />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: "16px",
                  width: 64,
                  height: 64,
                }}
                className="header_collapsebutton"
              />
            </Header>
            <Content
              style={{
                padding: "20px 22px",
                minHeight: "100vh",
                backgroundColor: "#f5f6fa",
                borderRadius: borderRadiusLG,
              }}
            >
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/users" element={<Users />} />
                <Route path="/call-logs" element={<CallLogs />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/browserhistory" element={<BrowserHistory />} />
              </Routes>
            </Content>
          </Layout>
        </Layout>
      ) : (
        ""
      )}
    </>
  );
};

export default Sidebar;
