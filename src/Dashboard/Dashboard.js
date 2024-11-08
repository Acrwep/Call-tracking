import React from "react";
import "./styles.css";
import { Col, Row } from "antd";
import { SiWhatsapp } from "react-icons/si";
import { TbPhoneCall, TbMessageDots } from "react-icons/tb";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";

const Dashboard = () => {
  return (
    <div>
      <p className="dashboard_heading">Dashboard</p>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={24} lg={6} xl={6}>
          <div className="dashboard_cards">
            <div
              className="dashboard_cardiconContainer"
              style={{ backgroundColor: "rgba(0, 200, 63, 0.199)" }}
            >
              <SiWhatsapp color="#00c83f" size={19} />
            </div>
            <div style={{ marginLeft: "19px" }}>
              <p className="dashboard_cardcount">644</p>
              <p className="dashboard_cardtext">Total Messages</p>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={6} xl={6}>
          <div className="dashboard_cards">
            <div
              className="dashboard_cardiconContainer"
              style={{ backgroundColor: "#1784e446" }}
            >
              <TbPhoneCall color="#1784e4" size={20} />
            </div>
            <div style={{ marginLeft: "19px" }}>
              <p className="dashboard_cardcount">359</p>
              <p className="dashboard_cardtext">Total Calls</p>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={6} xl={6}>
          <div className="dashboard_cards">
            <div
              className="dashboard_cardiconContainer"
              style={{ backgroundColor: "#00b0e62d" }}
            >
              <TbMessageDots color="#00b1e6" size={21} />
            </div>
            <div style={{ marginLeft: "19px" }}>
              <p className="dashboard_cardcount">701</p>
              <p className="dashboard_cardtext">Total Messages</p>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={6} xl={6}>
          <div className="dashboard_cards">
            <div
              className="dashboard_cardiconContainer"
              style={{ backgroundColor: "rgba(240,161,87,0.22" }}
            >
              <MdOutlinePhotoSizeSelectActual color="#f0a157" size={21} />
            </div>
            <div style={{ marginLeft: "19px" }}>
              <p className="dashboard_cardcount">644</p>
              <p className="dashboard_cardtext">Total Photos</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Dashboard;
