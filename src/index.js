// React
// React
import React from "react";
import ReactDOM from "react-dom";

// Components
import {App} from "./components/app/app";

// Application initialization
const init = () => {
  ReactDOM.render(<App />, document.getElementById(`root`));
};

init();
