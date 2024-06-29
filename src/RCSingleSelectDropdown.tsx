import React, { useState } from "react";
import styles from "./styles.module.css";

export type selectOption = { label: string; value: number };

type singleSelectProps = {
  multiple?: false;
  value?: selectOption;
  onChange: (value: selectOption | undefined) => void;
};

type multiSelectProps = {
  multiple: true;
  value?: selectOption[];
  onChange: (value: selectOption[]) => void;
};
type selectProps = {
  options: selectOption[];
} & (singleSelectProps | multiSelectProps);

const RCSingleSelectDropdown = ({
  multiple,
  options,
  value,
  onChange,
}: selectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>();

  const selectOption = (option: selectOption) => {
    setSelectedOption(option.label);
    if (multiple) {
      onChange((prev) => [...prev, option]);
    } else {
      if (option !== value) onChange(option);
    }
  };
  const handleClear = () => {
    multiple ? onChange([]) : onChange(undefined);
  };
  return (
    <div
      tabIndex={0}
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen((prev) => !prev)}
      className={`${styles.container}`}
    >
      <span className={styles.value}>{value?.label}</span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleClear();
        }}
        className={`${styles["clear-btn"]}`}
      >
        &times;
      </button>
      <div className={`${styles.divider}`}></div>
      <div className={styles.caret}></div>
      <ul className={`${styles.options} ${isOpen ? styles.show : ""}`}>
        {options.map((option) => (
          <li
            key={option.value}
            className={`${styles.option} ${
              selectedOption === option.label ? styles.selected : ""
            }`}
            onClick={() => selectOption(option)}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RCSingleSelectDropdown;
