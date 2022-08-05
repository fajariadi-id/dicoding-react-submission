import React from "react";
import moment from "moment";

const Card = ({ item }) => {
  const dateFormat = moment(item.createdAt).format("dddd, DD MMMM YYYY");
  const maxTitleLength = 18;

  const handleLongTitle = () => {
    if (item.title.length > maxTitleLength) {
      return `${item.title.substr(0, maxTitleLength)}...`;
    } else {
      return item.title;
    }
  };

  return (
    <div className="card">
      <div>
        {/* <div className="d-flex align-items-start justify-content-between"></div> */}
        <h3>{handleLongTitle()}</h3>
        <span>{dateFormat}</span>
      </div>

      <p>{item.body}</p>
    </div>
  );
};

export default Card;
