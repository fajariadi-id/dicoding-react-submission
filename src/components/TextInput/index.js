import React, { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";

const TextInput = ({ reloadKey, inputValue, placeholder, icon }) => {
  const [value, setValue] = useState("");

  const handleInputLength = (e) => {
    if (e.target.value.length > 50) return;

    setValue(e.target.value);
    inputValue(e.target.value);
  };

  useEffect(() => {
    if (reloadKey) setValue("");
  }, [reloadKey]);

  return (
    <div className="text-input">
      {icon && <BiSearchAlt color="#22222280" size={18} />}

      <input
        type="text"
        autoComplete="off"
        value={value}
        onChange={handleInputLength}
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default TextInput;
