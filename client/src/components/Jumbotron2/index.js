import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 700, clear: "both", padding: 40, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
