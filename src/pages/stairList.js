import React, { useEffect, useState } from "react";
import { setDownloadState } from "../component/utils";
import StairsListTable from "../component/stairsList/stairsListTable";
import StairListSystemMessage from "../component/stairsList/stairListSystemMessage";
import "../css/stairList.css";
import { deleteStairInfo, getStairInfo } from "../component/webAPI";
// 引入時間套件
import strftime from "strftime";

function StartList() {
  // 初始資料
  let [stairListShow, setStairListShow] = useState([
    { createAt: "0000-00-00", time: "00:00", name: "沒有資料", stairId: "" },
  ]);
  //打Api取得資料並寫入 stairListShow
  function fetchGetStairInfo() {
    getStairInfo().then((response) => {
      // console.log(response.stairinfos);
      // 不是空值 -> 填入資料
      if (response.stairinfos) {
        let newStairListShow = response.stairinfos.map((item) => {
          let timeStemp = new Date(item.createdat);
          return {
            createAt: strftime("%F", timeStemp),
            time: strftime("%H:%M", timeStemp),
            name: item.casename,
            stairId: item.stairid,
          };
        });
        setStairListShow(newStairListShow);
      }
    });
  }

  useEffect(() => {
    console.log("useEffect");
    fetchGetStairInfo();
  }, []);

  //監聽搜尋輸入，根據輸入值判斷要顯示的項目
  function handleSearch(e) {
    let searchValue = e.target.value;
    let newStairListShow = [];
    for (let i = 0; i < stairListShow.length; i++) {
      let nowItemInfo = stairListShow[i];
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
    deleteStairId: "",
    isMessageCardShow: false,
    isDeleteItemSuccess: false,
    message: "",
  });
  function clickDeleteItem(deleteMsg, stairId) {
    let newDeleteItemMessage = structuredClone(deleteItemMessage);
    newDeleteItemMessage.deleteStairId = stairId;
    newDeleteItemMessage.isMessageCardShow = true;
    newDeleteItemMessage.message = deleteMsg;
    setdeleteItemMessage(newDeleteItemMessage);
  }
  function closeMessageCard() {
    //關閉時重設
    let newDeleteItemMessage = structuredClone(deleteItemMessage);
    newDeleteItemMessage = {
      deleteStairId: "",
      isMessageCardShow: false,
      isDeleteItemSuccess: false,
      message: "",
    };
    setdeleteItemMessage(newDeleteItemMessage);
  }
  // 打Api刪除資料
  function deleteItem(stairId) {
    deleteStairInfo(stairId).then((response) => {
      alert(response.message);
      //關閉提示卡片
      closeMessageCard();
      //取得新資料
      fetchGetStairInfo();
    });
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
        deleteItem={deleteItem}
      />
    </>
  );
}
export default StartList;
