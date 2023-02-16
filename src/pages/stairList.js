import React, { useEffect, useState } from "react";
import { setDownloadState } from "../component/utils";
import StairsListTable from "../component/stairsList/stairsListTable";
import StairListSystemMessage from "../component/stairsList/stairListSystemMessage";
import "../css/stairList.css";
import { getStairInfo } from "../component/webAPI";

function StartList() {
  // 初始資料
  let stairListTableItemInfo = [
    { createAt: "0000-00-00", time: "00:00", name: "沒有資料" },
  ];
  let [stairListShow, setStairListShow] = useState(stairListTableItemInfo);

  useEffect(() => {
    getStairInfo().then((response) => {
      // console.log(response.stairinfos);
      let newStairListShow = response.stairinfos.map((item) => {
        return {
          createAt: "2022-10-00",
          time: "99:99",
          name: item.casename,
          id: item.stairid,
        };
      });
      setStairListShow(newStairListShow);
    });
  }, []);

  //監聽搜尋輸入，根據輸入值判斷要顯示的項目
  function handleSearch(e) {
    let searchValue = e.target.value;
    let newStairListShow = [];
    for (let i = 0; i < stairListTableItemInfo.length; i++) {
      let nowItemInfo = stairListTableItemInfo[i];
      //判斷三個值是否有包含
      let isCreateAtInclude = nowItemInfo.createAt.includes(searchValue);
      let isTimeInclude = nowItemInfo.time.includes(searchValue);
      let isNameInclude = nowItemInfo.name.includes(searchValue);
      if (isCreateAtInclude || isTimeInclude || isNameInclude) {
        //三個之中任一為true就顯示
        newStairListShow.push(nowItemInfo);
      }
    }
    //設定為新的值
    setStairListShow(newStairListShow);
  }
  //處理刪除按鈕
  const [deleteItemMessage, setdeleteItemMessage] = useState({
    isMessageCardShow: false,
    isDeleteItemSuccess: false,
    message: "",
  });
  function clickDeleteItem(deleteMsg) {
    let newDeleteItemMessage = structuredClone(deleteItemMessage);
    newDeleteItemMessage.isMessageCardShow = true;
    newDeleteItemMessage.message = deleteMsg;
    setdeleteItemMessage(newDeleteItemMessage);
  }
  function closeMessageCard() {
    //關閉時重設
    let newDeleteItemMessage = structuredClone(deleteItemMessage);
    newDeleteItemMessage = {
      isMessageCardShow: false,
      isDeleteItemSuccess: false,
      message: "",
    };
    setdeleteItemMessage(newDeleteItemMessage);
  }

  //列印
  const handleDownload = (printItemId) => {
    console.log("click! " + printItemId);
    //產出要印的資料
    if (printItemId === "2022-10-05-王小美") {
      setDownloadState(true); //localStorage
      console.log("open window!");
      //開新視窗
      window.open("/stairPreview");
    }
  };

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
                <label htmlFor="search" className="search-txt">
                  搜尋
                </label>
                <input
                  type="search"
                  id="search"
                  placeholder="輸入要搜尋的資訊"
                  onChange={(e) => handleSearch(e)}
                />
              </div>
            </form>
            <div className="card-txt">
              <StairsListTable
                stairListShow={stairListShow}
                clickDeleteItem={clickDeleteItem}
                handleDownload={handleDownload}
              />
            </div>
          </div>
        </section>
      </main>
      <StairListSystemMessage
        deleteItemMessage={deleteItemMessage}
        closeMessageCard={closeMessageCard}
      />
    </>
  );
}
export default StartList;
