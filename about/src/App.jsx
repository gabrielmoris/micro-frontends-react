import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Header from "home/Header";
import Footer from "home/Footer";
const App = () => (
  <div className="text-3xl mx-auto max-w-6xl flex flex-col justify-between h-screen w-screen">
    <Header />
    <div class="text-center">
      <img src="https://www.gabrielcmoris.com/assets/png/bust.svg" class="rounded-full w-32 mb-4 mx-auto" alt="Avatar" />
      <a href="https://www.gabrielcmoris.com" target="_blank" class="text-xl font-medium leading-tight mb-2">
        Gabriel C. Moris
      </a>
      <p class="text-gray-500">Web developer</p>
    </div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
