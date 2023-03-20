import React from "react";
import "./Contact.css";
import Footer from "../Footer/Footer";

export default function Contact() {
  return (
    <div className="contactContainer">
      <div className="cContainer">
        {/* Contact Us Section */}
        <div className="contact">
          <h5>Contact Us</h5>
          <h1>Let's Start a Conversation</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            <br />
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim.
          </p>
        </div>
        {/* End OF Contact Section */}

        {/* Form Section */}
        <div className="formContainer">
          <form action="">
            <input type="text" name="name" id="" placeholder="Full Name" />
            <br />
            <input type="text" name="email" id="" placeholder="Your Email" />
            <br />
            <input type="text" name="email" id="" placeholder="Query Related" />
            <br />
            <textarea name="" id="" cols="30" rows="10">
              Message
            </textarea>
            <button className="btn mt-3">SUBMIT</button>
          </form>
        </div>
        {/* End OF Form Section */}
      </div>
      {/* Footer */}
      <Footer />
      {/* End OF Footer */}
    </div>
  );
}
