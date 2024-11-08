import React, { useState, useEffect } from "react";
import CommonSearchField from "../Common/CommonSearchbar";
import { Col, Divider, Row } from "antd";
import CommonDoubleDatePicker from "../Common/CommonDoubleDatePicker";
import { getPreviousandCurrentweekDate } from "../Common/Validation";
import "./styles.css";

const Messages = () => {
  const [selectedDates, setSelectedDates] = useState([]);
  const usersList = [
    { id: 1, name: "Balaji" },
    { id: 2, name: "Allice" },
    { id: 3, name: "Mark" },
    { id: 4, name: "John" },
    { id: 5, name: "Edward" },
  ];
  const messages = [
    {
      id: 1,
      text: "Hello!",
      sender: "received",
      date: "2024-11-06",
      time: "10:15 AM",
    },
    {
      id: 2,
      text: "Hi! How are you?",
      sender: "sent",
      date: "2024-11-06",
      time: "10:16 AM",
    },
    {
      id: 3,
      text: "I'm good, thanks!",
      sender: "received",
      date: "2024-11-06",
      time: "10:17 AM",
    },
  ];

  const [userId, setUserId] = useState(1);

  useEffect(() => {
    const PreviousandCurrentDate = getPreviousandCurrentweekDate();
    setSelectedDates(PreviousandCurrentDate);
  }, []);

  return (
    <div>
      <p className="dashboard_heading">Messages</p>
      <Row>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <CommonSearchField
            style={{ width: "50%" }}
            placeholder="search messages"
          />
        </Col>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={12}
          xl={12}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <CommonDoubleDatePicker value={selectedDates} />
        </Col>
      </Row>
      <Row style={{ marginTop: "22px" }}>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={8}
          xl={8}
          className="messages_userslistContainer"
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
          className="messages_chat-col-container"
        >
          {messages.map((message, index) => {
            return (
              <React.Fragment key={index}>
                <div className="chat-container">
                  <div
                    key={message.id}
                    className={`message ${
                      message.sender === "sent" ? "sent" : "received"
                    }`}
                  >
                    {message.text}
                  </div>
                  <div
                    className={`message-info ${
                      message.sender === "sent" ? "sent-info" : "received-info"
                    }`}
                  >
                    <span className="message-date">{message.date}</span>
                    <span className="message-time">{message.time}</span>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </Col>
      </Row>
    </div>
  );
};
export default Messages;
