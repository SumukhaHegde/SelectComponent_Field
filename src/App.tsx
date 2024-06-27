import React from "react";
import RCSingleSelectDropdown from "./RCSingleSelectDropdown";

const options = [
  { label: "first", value: 1 },
  { label: "second", value: 2 },
  { label: "third", value: 3 },
  { label: "forth", value: 4 },
  { label: "fifth", value: 5 },
];
function App() {
  return (
    <>
      <RCSingleSelectDropdown options={options} value={options[0]} />
    </>
  );
}

export default App;
