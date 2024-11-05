import React, { useState } from "react";
import CommonTable from "../Common/CommonTable";
import { RxArrowBottomLeft, RxArrowTopRight } from "react-icons/rx";
import "./styles.css";

export default function CallLogs() {
  const columns = [
    { title: "Name", dataIndex: "name", key: "1" },
    { title: "Mobile", dataIndex: "mobile", key: "2" },
    { title: "Date", dataIndex: "date", key: "3" },
    {
      title: "Type",
      dataIndex: "type",
      key: "4",
      render: (text, record) => {
        return (
          <>
            {text === "Incoming" ? (
              <div style={{ display: "flex" }}>
                <RxArrowBottomLeft size={20} color="green" />
                <p style={{ marginLeft: "6px" }}>{text}</p>
              </div>
            ) : (
              <div style={{ display: "flex" }}>
                <RxArrowTopRight size={20} color="green" />
                <p style={{ marginLeft: "6px" }}>{text}</p>
              </div>
            )}
          </>
        );
      },
    },
    { title: "Duration", dataIndex: "duration", key: "5" },
  ];
  const data = [
    {
      id: 1,
      name: "Balaji R",
      mobile: "8777989895",
      date: "02/11/2024",
      type: "Incoming",
      duration: "12m:14s",
    },
    {
      id: 2,
      name: "Suresh",
      mobile: "9577675535",
      date: "01/11/2024",
      type: "Outgoing",
      duration: "19m:4s",
    },
  ];
  return (
    <div>
      <p className="calllogs_heading">Call Logs</p>
      <CommonTable
        columns={columns}
        dataSource={data}
        //   loading={loading}
        checkBox="false"
        size="small"
        className="users_table"
      />
    </div>
  );
}