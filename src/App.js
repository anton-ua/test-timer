import { useState } from "react";
import styles from "./App.module.css";
import Button from "./Components/Button/Button";
import Clock from "./Components/Clock/Clock";

const App = () => {
  const [timerStatus, changeTimerStatus] = useState(true);

  const [time, changeTime] = useState(Date.now());

  const [pauseTime, changePauseTime] = useState(0);

  const handleClick = ({ target }) => {
    switch (target.name) {
      case "buttonStart":
        timerStatus ? timeStop() : timeStart();
        break;
      case "buttonReset":
        timeReset();
        break;
      case "buttonWait":
        timeWait();
        break;
      default:
        break;
    }
  };

  const timeStop = () => {
    changeTime(0);
    changeTimerStatus(false);
  };

  const timeStart = () => {
    changeTimerStatus(true);
    changeTime(Date.now());
  };

  const timeReset = () => {
    changeTimerStatus(true);
    changeTime(Date.now());
  };

  const timeWait = () => {
    if (time) {
      if (timerStatus) {
        changeTimerStatus(false);
        changePauseTime(Date.now());
      } else {
        changeTimerStatus(true);
        changeTime(time - pauseTime + Date.now());
      }
    }
  };

  return (
    <div className={styles.App}>
      <main>
        <div className={styles.container}>
          <Clock startTime={time} timerStatus={timerStatus} />
        </div>
        <div className={styles.container}>
          <div className={styles.flexWrap}>
            <Button
              name='buttonStart'
              status={timerStatus}
              onClick={handleClick}
              displayNameStart='Stop'
              displayNameStop='Start'
            />
            <Button
              name='buttonReset'
              status={timerStatus}
              onClick={handleClick}
              displayNameStart='Reset'
              displayNameStop='Reset'
            />
            <Button
              name='buttonWait'
              status={timerStatus}
              onClick={handleClick}
              displayNameStart='Wait'
              displayNameStop='Wait'
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
