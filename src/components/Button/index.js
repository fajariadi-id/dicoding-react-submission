import React from "react";

const Button = ({ btnFor, onClick, title }) => {
  return (
    <button type={btnFor} onClick={onClick} className={`btn ${btnFor}`}>
      {title}
    </button>
  );
};

export default Button;
