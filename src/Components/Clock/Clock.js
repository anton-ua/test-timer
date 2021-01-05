import React, { useEffect, useState } from "react";
import moment from "moment";
import styles from "./Clock.module.css";

const Clock = ({ startTime, timerStatus }) => {
  const [time, changeTime] = useState(0);

  const calculateTimePassed = () => {
    return Date.now() - startTime;
  };

  useEffect(() => {
    startTimeout();
  });

  const startTimeout = () => {
    let timeout;
    if (timerStatus) {
      timeout = setTimeout(() => {
        changeTime(calculateTimePassed());
      }, 50);
    } else {
      clearTimeout(timeout);
      startTime ? changeTime(calculateTimePassed()) : changeTime(startTime);
    }
  };

  return (
    <div className={styles.clockFace}>{`${Math.trunc(
      moment.duration(time).asHours()
    )}:${moment.utc(time).format("mm:ss")}`}</div>
  );
};

export default Clock;
