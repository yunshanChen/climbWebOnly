import React, { useEffect, useState } from "react";
import styles from "../../css/clock.module.css";

function Clock() {
  const [time, setTime] = useState(getTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const { hour, minute } = getTime();
      setTime((prevTime) => {
        if (prevTime.minute !== minute) {
          console.log(`timeChage! nowTime ${hour}:${minute}`);
          return { hour, minute };
        }
        return prevTime;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  // 每秒更新一次數字

  /* 取得時間 */
  function getTime() {
    const nowTime = new Date();
    const hour = nowTime.getHours().toString().padStart(2, "0");
    const minute = nowTime.getMinutes().toString().padStart(2, "0");

    return { hour, minute };
  }

  return (
    <section className={styles.container}>
      <div className={styles.board}>
        <div id="hour" className="hour">
          {time.hour}
        </div>
        <div className={styles.colon}>：</div>
        <div id="minute" className={styles.minute}>
          {time.minute}
        </div>
      </div>
    </section>
  );
}
export default Clock;
