import React, { useState } from "react";

function Section(props) {
  return (
    <div class="body dark-background">
      <div class="container">
        <div className="Row">{props.children}</div>
      </div>
    </div>
  );
}

export default Section;
