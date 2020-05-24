import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import App from "./App";

const Application = (props) => {
  return <App />;
};

ReactDOM.render(<Application />, document.getElementById("root"));
serviceWorker.unregister();
