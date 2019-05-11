import React from "react";
//fungsi komponen

const List = ({ title, children }) => (
  <div style={{ padding: "10px" }}>
    <i>{title}</i>
    {children}
  </div>
);

export default List;
