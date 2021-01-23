import React, { useState } from "react";
import "./styles.css";
import Editor from "./components/editor";
import Previewer from "./components/previewer";

function App() {
  function placeHolder() {
    return `
<h2>Hi There</h2>
`;
  }
  const [markup, setMarkup] = useState(placeHolder());
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        width: "100%",
        maxWidth: "800px"
      }}
      className="App"
    >
      <Editor markup={markup} setMarkup={setMarkup} />
      <Previewer markup={markup} />
    </div>
  );
}

export default App;
