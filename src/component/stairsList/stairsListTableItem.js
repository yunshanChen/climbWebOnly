import React from "react";
import { useNavigate } from "react-router-dom";
import { setStairId } from "../utils";

function StairsListTableItem(props) {
  let deleteMsg = props.createAt + " " + props.time + " " + props.name;
  let printItemId = props.createAt + "-" + props.name;

  //跳轉
  const navigate = useNavigate();

  //「修改」時需要設定localStorage
  function editStair() {
    setStairId(props.id);
    navigate("/stairEditor");
  }

  return (
    <tr className="list-item">
      <td className="create-time">
        <span className="date">{props.createAt}</span>
        <span className="time">{props.time}</span>
      </td>
      <td className="case-name">{props.name}</td>
      <td className="print">
        <button
          type="button"
          className="btn-print"
          onClick={() => {
            props.handleDownload(printItemId);
          }}
        >
          列印PDF
        </button>
      </td>
      <td className="buttons">
        <button
          type="button"
          className="btn-modify"
          onClick={() => {
            editStair();
          }}
        >
          修改
        </button>
        <button
          type="button"
          className="btn-delete"
          onClick={() => props.clickDeleteItem(deleteMsg)}
        >
          刪除
        </button>
      </td>
    </tr>
  );
}
export default StairsListTableItem;
