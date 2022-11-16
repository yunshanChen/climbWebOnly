import React from "react";
import StairsListTable from "../component/stairsList/stairsListTable";
import SystemMessage from "../component/systemMessage";
import "../css/stairList.css";

function StartList() {
  return (
    <>
      <main>
        <section className="stairs">
          <div className="card">
            <div className="card-top">
              <h2 className="card-title">樓梯列表</h2>
            </div>
            <form action="#">
              <div className="input-group">
                <input type="search" id="search" placeholder="搜尋" />
                <button className="submit">搜尋</button>
              </div>
            </form>
            <div className="card-txt">
              <StairsListTable />
            </div>
          </div>
        </section>
      </main>
      <SystemMessage />
    </>
  );
}
export default StartList;
