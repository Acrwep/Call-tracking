import React from "react";
import { Input, Space } from "antd";
import "./commonstyles.css";
import CommonInputField from "./CommonInputField";
import { IoSearch } from "react-icons/io5";

export default function CommonSearchField({
  placeholder,
  value,
  style,
  className,
  onChange,
}) {
  return (
    <div className="common_searchfieldContainer" style={style}>
      {/* <Space direction="vertical">
        <Search
          className={`commonsearchbar ${className}`}
          placeholder={placeholder}
          allowClear
          onSearch={onSearch}
          onChange={onChange}
          style={{
            width: 240,
          }}
          value={value}
        />
      </Space> */}
      {/* <input className="form-control common_searchfield" /> */}
      <Input
        className="common_searchfield"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        allowClear
      />
      <div className="common_searchiconContainer">
        <IoSearch size={17} />
      </div>
    </div>
  );
}
