import React from "react";
import marked from "marked";

function Editor({ markup, setMarkup }) {
  return (
    <div style={{ width: "100%", height: "100%", border: "solid black 1px" }}>
      <h2>Editor</h2>
      <textarea
        value={markup}
        style={{
          textAlign: "left",
          alignSelf: "left",
          width: "90%",
          height: "30vh"
        }}
        id="editor"
        onChange={(event) => setMarkup(event.target.value)}
      ></textarea>
    </div>
  );
}

export default Editor;
