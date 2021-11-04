import React, { useState } from "react";
import "./collapsible.css";

function Collapsible(props) {
  const [open, setOpen] = useState(false);
  const [label] = useState(props.label);
  const [children] = useState(props.children);
  const [contentClass, setContentClass] = useState("content");

  return (
    <div className="container">
    <div
      className="toggle"
      onClick={() => {
        setOpen(!open);
        setContentClass(open ? "content expand" : "content");
      }}
    >
      {label}
      <div className={contentClass}>{children}</div>
    </div>
    
   </div>
  );
}

export default Collapsible;
