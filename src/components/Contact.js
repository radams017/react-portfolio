import React, { useState } from "react";
import "./Contact.css";

function Contact(props) {
  return (
    <div className="vh-100 contact-form-div mt-5">
      <form id="contact-form mt-4">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group mt-4">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group mt-4">
          <label htmlFor="message">Message</label>
          <textarea className="form-control" rows="5"></textarea>
        </div>
        <button type="submit" className="btn btn-primary mt-4">
          Submit
        </button>
      </form>
      <h4 className="mt-5">Form Under Construction</h4>
    </div>
  );
}

export default Contact;
