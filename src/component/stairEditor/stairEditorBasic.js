import React from "react";

function StairEditorBasic(props) {
  return (
    <div className="stair-editor-basic">
      <div className="input-group">
        <label className="input-group-text" htmlFor="case-name">
          姓名
        </label>
        <input
          type="text"
          placeholder="請輸入姓名"
          id="case-name"
          value={props.stairBasicInfo.caseName}
          onChange={(e) => props.handleBasicInfoChange(e, "caseName")}
        />
      </div>
      <div className="input-group">
        <label className="input-group-text" htmlFor="body-weight">
          體重
        </label>
        <input
          type="number"
          inputMode="decimal"
          id="body-weight"
          placeholder="體重"
          value={props.stairBasicInfo.bodyWeight}
          onChange={(e) => props.handleBasicInfoChange(e, "bodyWeight")}
        />
      </div>
      <div className="input-group floor">
        <label className="input-group-text" htmlFor="floor">
          一般樓梯：共
        </label>
        <input
          type="number"
          inputMode="numeric"
          id="floor"
          placeholder="樓層數"
          min="2"
          value={props.floorNumber}
          onChange={(e) => props.handleFloorNumberChange(e)}
          onBlur={(e) => props.handleFloorNumberOnBlur(e)}
        />
        <label className="input-group-text-last" htmlFor="floor">
          層樓
        </label>
      </div>
      <div className="input-group address">
        <label className="input-group-text" htmlFor="address">
          地址
        </label>
        <input
          type="text"
          id="address"
          placeholder="請輸入地址"
          value={props.stairBasicInfo.address}
          onChange={(e) => props.handleBasicInfoChange(e, "address")}
        />
      </div>
    </div>
  );
}
export default StairEditorBasic;
