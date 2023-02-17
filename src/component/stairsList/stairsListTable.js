import React from "react";
import { Link } from "react-router-dom";
import { setStairId } from "../utils";
import StairsListTableItem from "./stairsListTableItem";

function StairsListTable(props) {
  let stairListTableItems = [];
  for (let i = 0; i < props.stairListShow.length; i++) {
    let nowItem = props.stairListShow[i];
    stairListTableItems.push(
      <StairsListTableItem
        createAt={nowItem.createAt}
        time={nowItem.time}
        name={nowItem.name}
        stairId={nowItem.stairId}
        handleDownload={props.handleDownload}
        clickDeleteItem={props.clickDeleteItem}
        key={i}
      />
    );
  }
  //新增時所需要的資訊(設定localStorage)
  function addNewStairEditor() {
    setStairId("New");
  }

  return (
    <table className="stairs-list">
      <thead>
        <tr className="list-item list-title">
          <th className="create-time">建立日期</th>
          <th className="case-name">姓名</th>
          <th className="print">列印</th>
          <th className="buttons">
            <Link
              to="/stairEditor"
              className="link-button create-new"
              onClick={() => {
                addNewStairEditor();
              }}
            >
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
