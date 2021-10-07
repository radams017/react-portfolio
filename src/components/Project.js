import React, { useState } from "react";
import "./Project.css";
import sword from "./images/sword_new.png";
import defi from "./images/defi_new.png";
import cors from "./images/cors_sol.png";
import notes from "./images/notes_new.png";

function Project() {
  return (
    <div className="container">
      <div className="mb-3">
        <h2 className="mb-5 mt-5">Projects</h2>
      </div>
      <div className="row">
        <div className="col">
          <div className="card mb-3">
            <img className="card-img-top" src={sword} alt="Card image cap" />
            <div className="card-body text-center">
              <h5 className="card-title">S.W.O.R.D</h5>
              <p className="card-text">Full-Stack Web Application</p>
              <div className="row w-50 mx-auto">
                <button
                  id="sword-deployed"
                  className="btn btn-outline-dark mb-1"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href =
                      "https://frozen-harbor-76666.herokuapp.com/";
                  }}
                >
                  Deployed
                </button>
                <button
                  id="sword-repo"
                  className="btn btn-outline-dark"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href =
                      "https://github.com/radams017/S.W.O.R.D";
                  }}
                >
                  Repository
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card text-center mb-3">
            <img className="card-img-top" src={defi} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">DeFi 101</h5>
              <p className="card-text">An Exercise In Decentralization.</p>
              <div className="row w-50 mx-auto">
                <button
                  id="crypto-deployed"
                  className="btn btn-outline-dark mb-1"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href =
                      "https://radams017.github.io/Defi-101/";
                  }}
                >
                  Deployed
                </button>
                <button
                  id="crypto-repo"
                  className="btn btn-outline-dark"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href =
                      "https://github.com/radams017/Defi-101";
                  }}
                >
                  Repository
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-100"></div>

        <div className="col mb-5">
          <div className="card mb-3 text-center">
            <img className="card-img-top" src={cors} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Referrer Compliance Tool</h5>
              <p className="card-text">CORS Solution</p>
              <div className="row w-50 mx-auto">
                <button
                  id="cors-deployed"
                  className="btn btn-outline-dark mb-1"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href =
                      "https://radams017.github.io/chrome-referrer-compliance-tool/";
                  }}
                >
                  Deployed
                </button>
                <button
                  id="cors-repo"
                  className="btn btn-outline-dark"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href =
                      "https://github.com/radams017/chrome-referrer-compliance-tool/";
                  }}
                >
                  Repository
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col mb-5">
          <div className="card mb-3 text-center">
            <img className="card-img-top" src={notes} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Notes App</h5>
              <p className="card-text">Note Manager</p>
              <div className="row w-50 mx-auto">
                <button
                  id="notes-deployed"
                  className="btn btn-outline-dark mb-1"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href =
                      "https://stark-lake-38210.herokuapp.com/";
                  }}
                >
                  Deployed
                </button>
                <button
                  id="notes-repo"
                  className="btn btn-outline-dark"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href =
                      "https://github.com/radams017/notetaker-app";
                  }}
                >
                  Repository
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
