import React, { useState } from "react";
import "./Home.css";
import background from "./images/background-min.jpeg";

function Home() {
  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="bg-global vh-100"
    >
      <h1 className="mt-5 mb-5 header-text">Hi, My Name is Ryan Adams.</h1>
      <div>
        <div className="about-me mt-5 p-3">
          <h2 className="text-center">I'm A Developer</h2>
          <h2 className="text-center mt-5">
            I enjoy solving problems and creating solutions.
          </h2>
          <h2 className="text-center mt-5">
            Some of the languages I work with are JS, HTML, CSS, React, Express,
            Node, MongoDB, and SQL.
          </h2>
          <h2 className="text-center mt-5">Lets build something!</h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
