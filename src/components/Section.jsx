import React from "react";
function Section(props) {
  return (
    <div className="sectionWrapper">
      <p className="sectionHeading">{props.heading}</p>
      <div className="childrenWrapper">{props.child}</div>
    </div>
  );
}

export default Section;
