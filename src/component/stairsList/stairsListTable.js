import React from "react";
import { Link } from "react-router-dom";
import StairsListTableItem from "./stairsListTableItem";

function StairsListTable() {
  let stairListTableItemInfo = [
    { createAt: "2022-10-05", time: "20:08", name: "王小美" },
    { createAt: "2022-10-04", time: "15:03", name: "王大美" },
    { createAt: "2022-10-01", time: "21:15", name: "王小名" },
  ];
  let stairListTableItems = [];
  for (let i = 0; i < stairListTableItemInfo.length; i++) {
    let nowItem = stairListTableItemInfo[i];
    stairListTableItems.push(
      <StairsListTableItem
        createAt={nowItem.createAt}
        time={nowItem.time}
        name={nowItem.name}
        key={i}
      />
    );
  }
  return (
    <table className="stairs-list">
      <thead>
        <tr className="list-item list-title">
          <th className="create-time">建立日期</th>
          <th className="case-name">姓名</th>
          <th className="print">列印</th>
          <th className="buttons">
            <Link to="/stairEditor" className="link-button create-new">
              新增
            </Link>
          </th>
        </tr>
      </thead>
      <tbody>{stairListTableItems}</tbody>
    </table>
  );
}
export default StairsListTable;
