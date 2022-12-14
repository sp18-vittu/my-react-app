import React from "react";

function Card(props) {
  const { source, fullname, customClass, aboutme } = props;
  return (
    <div className="cardWrapper">
      <div className="profilePicDiv">
        <img src={source} alt=" " className="profilePic" />
      </div>
      <p className="username">{fullname}</p>
      <p className={customClass}>{aboutme}</p>
    </div>
  );
}

export default Card;
