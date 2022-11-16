import React from "react";

function StairsListTableItem(props) {
  return (
    <tr className="list-item">
      <td className="create-time">
        <span className="date">{props.createAt}</span>
        <span className="time">{props.time}</span>
      </td>
      <td className="case-name">{props.name}</td>
      <td className="print">
        <button className="btn-print">列印PDF</button>
      </td>
      <td className="buttons">
        <button className="btn-modify">修改</button>
        <button className="btn-delete">刪除</button>
      </td>
    </tr>
  );
}
export default StairsListTableItem;
