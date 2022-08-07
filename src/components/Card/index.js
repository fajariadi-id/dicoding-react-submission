import React, { useState } from "react";
import moment from "moment";
import { MdArchive, MdUnarchive } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import IconContainer from "../IconContainer";

const Card = ({ item, onToggleArchive, onDelete }) => {
  const [isMouseOverTheCard, setIsMouseOverTheCard] = useState(false);
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
    <div
      onMouseEnter={() => setIsMouseOverTheCard(!isMouseOverTheCard)}
      onMouseLeave={() => setIsMouseOverTheCard(!isMouseOverTheCard)}
      className="card"
    >
      <div className="header">
        <h3>{handleLongTitle()}</h3>

        <div className="d-flex justify-content-between">
          <span>{dateFormat}</span>

          <div className="d-flex gap-5">
            <IconContainer
              onClick={onDelete}
              bgColor="red"
              visible={isMouseOverTheCard ? "visible" : ""}
              icon={<FaTrashAlt className="icon" size={9} color="#22222280" />}
            />

            {item.archived ? (
              <IconContainer
                onClick={onToggleArchive}
                bgColor="yellow"
                visible={isMouseOverTheCard ? "visible" : ""}
                icon={
                  <MdUnarchive className="icon" size={12} color="#22222280" />
                }
              />
            ) : (
              <IconContainer
                onClick={onToggleArchive}
                bgColor="yellow"
                visible={isMouseOverTheCard ? "visible" : ""}
                icon={
                  <MdArchive className="icon" size={12} color="#22222280" />
                }
              />
            )}
          </div>
        </div>
      </div>

      <p>{item.body}</p>
    </div>
  );
};

export default Card;
