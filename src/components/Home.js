import React, { useState } from "react";
import "./Home.css";

function Home() {
  return (
    <div className="bg-global vh-100">
      <h1 className="mt-5 header-text">Hi, My Name is Ryan Adams.</h1>
      <div className="container d-flex justify-content-start mt-5">
        <div>
          <h2>I'm a developer.</h2>
        </div>
      </div>
      <div className="container d-flex justify-content-end mt-5">
        <div>
          <h2>I enjoy solving problems and building solutions,</h2>
        </div>
      </div>
      <div className="container d-flex justify-content-start mt-5">
        <div>
          <h2>Client-Side and Server-Side.</h2>
        </div>
      </div>
      <div className="container d-flex justify-content-end mt-5">
        <div>
          <h2>How Can I Help You?</h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
