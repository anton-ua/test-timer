import React from "react";
import styles from "./Button.module.css";

const Button = ({
  name,
  status,
  onClick,
  displayNameStart,
  displayNameStop,
}) => {
  return (
    <button name={name} onClick={onClick} className={styles.button}>
      {status ? displayNameStart : displayNameStop}
    </button>
  );
};

export default Button;
