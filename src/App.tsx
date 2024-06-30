import React, { useState } from "react";
import RCSingleSelectDropdown, { selectOption } from "./RCSingleSelectDropdown";

const options = [
  { label: "first", value: 1 },
  { label: "second", value: 2 },
  { label: "third", value: 3 },
  { label: "forth", value: 4 },
  { label: "fifth", value: 5 },
];
function App() {
  const [value1, setValue1] = useState<selectOption[]>([]);
  const [value2, setValue2] = useState<selectOption | undefined>(options[0]);

  return (
    <>
      <RCSingleSelectDropdown
        multiple={false}
        options={options}
        value={value2}
        onChange={(o) => setValue2(o)}
      />
      <br />
      <RCSingleSelectDropdown
        multiple={true}
        options={options}
        value={value1}
        onChange={(o) => setValue1(o)}
      />
    </>
  );
}

export default App;
