import React from "react";
// import { dayJs } from "../Utils";
import dayjs from "dayjs";
import moment from "moment";
import { DatePicker, Space } from "antd";
import { CommonToaster } from "./CommonToaster";
const { RangePicker } = DatePicker;

export default function CommonDoubleDatePicker({ onChange, value }) {
  const handleRangePickerChange = (dates, dateStrings) => {
    // If dates are selected
    if (dates && dates.length === 2) {
      const startDate = dates[0];
      const endDate = dates[1];
      const diffDays = endDate.diff(startDate, "days");

      if (diffDays > 15) {
        CommonToaster("Please select a date range of 15 days or less", "error");
        // Reset the date picker value
        return;
      }
    }
    // Pass the onChange event to parent component if provided
    if (onChange) {
      onChange(dates, dateStrings);
    }
  };
  const disabledDate = (current) => {
    // Disable dates that are after today
    return current && current > moment().endOf("day");
  };
  return (
    <div>
      <Space direction="vertical" size={12}>
        <RangePicker
          className="common_inputfield"
          value={value ? [dayjs(value[0]), dayjs(value[1])] : null}
          onChange={handleRangePickerChange}
          disabledDate={disabledDate}
          allowClear={false}
        />
      </Space>
    </div>
  );
}
