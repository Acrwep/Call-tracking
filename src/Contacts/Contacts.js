import React, { useState, useEffect } from "react";
import CommonSearchField from "../Common/CommonSearchbar";
import { Col, Divider, Row } from "antd";
import CommonDoubleDatePicker from "../Common/CommonDoubleDatePicker";
import { getPreviousandCurrentweekDate } from "../Common/Validation";
import { FiUser } from "react-icons/fi";
import "./styles.css";

const Contacts = () => {
  const [selectedDates, setSelectedDates] = useState([]);
  const usersList = [
    { id: 1, name: "Balaji" },
    { id: 2, name: "Allice" },
    { id: 3, name: "Mark" },
    { id: 4, name: "John" },
    { id: 5, name: "Edward" },
  ];

  const [userId, setUserId] = useState(1);

  useEffect(() => {
    const PreviousandCurrentDate = getPreviousandCurrentweekDate();
    setSelectedDates(PreviousandCurrentDate);
  }, []);

  return (
    <div>
      <p className="dashboard_heading">Contacts</p>
      <CommonSearchField
        style={{ width: "25%" }}
        placeholder="search contacts"
      />
      <Row style={{ marginTop: "22px" }}>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={8}
          xl={8}
          className="contacts_userslistContainer"
        >
          {usersList.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <div
                  className={
                    userId === item.id
                      ? "messages_usersactivediv"
                      : "messages_usersdiv"
                  }
                  onClick={() => setUserId(item.id)}
                >
                  <p className="messages_username">{item.name}</p>
                  <Divider className="messages_usersdivider" />
                </div>
              </React.Fragment>
            );
          })}
        </Col>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={8}
          xl={16}
          className="contacts_user-col-container"
        >
          <div className="contact_container">
            <div className="contacts_usericonContainer">
              <FiUser size={26} />
            </div>
            <p className="contacts_username">Allice</p>
            <Row gutter={16} className="contacts_row">
              <Col span={12} className="contacts_label">
                <p className="contacts_usersdetail_heading">Phone:</p>
              </Col>
              <Col span={12}>
                <p className="contacts_usersdetail_text">9878657878</p>
              </Col>
            </Row>
            <Row gutter={16} className="contacts_row">
              <Col span={12} className="contacts_label">
                <p className="contacts_usersdetail_heading">Mail:</p>
              </Col>
              <Col span={12}>
                <p className="contacts_usersdetail_text">allice@gmail.com</p>
              </Col>
            </Row>
            <Row gutter={16} className="contacts_row">
              <Col span={12} className="contacts_label">
                <p className="contacts_usersdetail_heading">Address:</p>
              </Col>
              <Col span={12}>
                <p
                  className="contacts_usersdetail_text"
                  style={{ width: "150px" }}
                >
                  861 Bringham Avenue , Los Angeles, CA 90049, The United States
                  of America
                </p>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Contacts;
