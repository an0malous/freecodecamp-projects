import React from "react";
import marked from "marked";

function Previewer({ markup }) {
  const HTML = marked(markup);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        height: "100%",
        border: "solid black 1px"
      }}
    >
      <h2>Markup Previewer</h2>
      <div
        id="preview"
        style={{
          textAlign: "left",
          border: "solid black 1px",
          minHeight: "10px",
          width: "90%"
        }}
        dangerouslySetInnerHTML={{ __html: HTML }}
      ></div>
    </div>
  );
}
export default Previewer;
