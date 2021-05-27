// React
import React from "react";
import ReactDOM from "react-dom";

// Router
import {BrowserRouter} from "react-router-dom";

// Components
import {App} from "./components/app/app";

// Application initialization
const init = () => {
  ReactDOM.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      document.getElementById(`root`)
  );
};

init();
