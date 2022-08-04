import React from "react";
import { FiMaximize, FiMinimize } from "react-icons/fi";

const ToggleExpand = ({ isExpanded }) => {
  return (
    <div className="icon-container">
      {isExpanded && <FiMinimize size={10} color="#1A4D2E" />}
      {!isExpanded && <FiMaximize size={10} color="#1A4D2E" />}
    </div>
  );
};

export default ToggleExpand;
