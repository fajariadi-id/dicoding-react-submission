import React from "react";
import moment from "moment";

const Card = ({ item }) => {
  const dateFormat = moment(item.createdAt).format("dddd, DD MMMM YYYY");
  return (
    <div className="card">
      <h3>{item.title}</h3>
      <span>{dateFormat}</span>

      <p>{item.body}</p>
    </div>
  );
};

export default Card;
