import React from "react";

const Button = ({ btnFor, onClick, title }) => {
  return (
    <button onClick={onClick} className={`btn ${btnFor}`}>
      {title}
    </button>
  );
};

export default Button;
