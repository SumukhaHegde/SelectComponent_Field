import React from "react";
import styles from "./styles.module.css";

type selectOption = { label: string; value: number };
type selectProps = {
  options: selectOption[];
  value?: selectOption;
  onChange: (value: selectOption | undefined) => void;
};

const RCSingleSelectDropdown = ({ options, value, onChange }: selectProps) => {
  return (
    <div className={`${styles.container}`}>
      <span className={styles.value}>value</span>
      <button className={`${styles["clear-btn"]}`}>&times;</button>
      <div className={`${styles.divider}`}></div>
      <div className={`${styles.caret}`}></div>
      <ul>
        {options.map((option) => (
          <li key={option.value} className={styles.optionsList}>
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RCSingleSelectDropdown;
