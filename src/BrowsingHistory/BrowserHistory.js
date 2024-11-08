import React, { useEffect, useState } from "react";
import CommonTable from "../Common/CommonTable";
import { RxArrowBottomLeft, RxArrowTopRight } from "react-icons/rx";
import "./styles.css";
import CommonSearchField from "../Common/CommonSearchbar";

export default function BrowserHistory() {
  const columns = [
    { title: "Title", dataIndex: "title", key: "1" },
    {
      title: "Url",
      dataIndex: "url",
      key: "2",
      render: (text, record) => {
        return (
          <a className="browsinghistory_tablelink" href={text} target="_blank">
            {text}
          </a>
        );
      },
    },
    { title: "Status", dataIndex: "status", key: "3" },
    { title: "Date", dataIndex: "date", key: "4" },
    { title: "Duration", dataIndex: "duration", key: "5" },
  ];
  const [data, setData] = useState([
    {
      id: 1,
      title: "www.google.com",
      url: "https://www.google.com/",
      date: "02/11/2024",
      status: "Visited",
      duration: "12m:14s",
    },
    {
      id: 2,
      title: "www.whatsapp.com",
      url: "https://www.whatsapp.com/",
      date: "02/11/2024",
      status: "Visited",
      duration: "19m:4s",
    },
  ]);
  const [dummyData, setDummyData] = useState([]);

  useEffect(() => {
    setDummyData(data);
  }, []);

  const handleSearch = (event) => {
    const value = event.target.value;
    console.log("valll", value);
    const filterData = dummyData.filter((f) => {
      return f.title.toLowerCase().includes(value.toLowerCase());
    });

    setData(filterData);
  };

  return (
    <div>
      <p className="calllogs_heading">Browser History</p>
      <CommonSearchField
        placeholder="search history"
        style={{ width: "25%", marginBottom: "20px" }}
        onChange={handleSearch}
      />
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
