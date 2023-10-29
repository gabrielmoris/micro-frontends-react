import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: home</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Tailwind</div>
    <a href="https://blog.logrocket.com/build-micro-frontend-application-react/?ref=dailydev"> LINK to the project</a>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
