const IconContainer = ({ icon, bgColor, visible, onClick }) => {
  return (
    <div onClick={onClick} className={`icon-action ${bgColor} ${visible}`}>
      {icon}
    </div>
  );
};

export default IconContainer;
