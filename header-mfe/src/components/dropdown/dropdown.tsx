import React, { useState } from "react";

export const Dropdown = ({ label, children }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className={"dropdown"}>
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className={"iconButton"}
      >
        {label}
      </button>
      {isDropdownOpen && <div className={"dropdownMenu"}>{children}</div>}
    </div>
  );
};
