import React from "react";
import { Input } from "../Input/Input";
import localFont from "next/font/local";
const myFont = localFont({ src: "../../Fonts/Montserrat-Medium.ttf" });

const ContactUsForm = () => {
  return (
    <>
      <div className="container-for-contact-us-form">
        <h2 className="header-for-contact-us-form">Send us a message</h2>
        <div className="continer-of-inputs-at-contact-us-form">
          <div className="container-for-inputs">
            <Input
              title="How can we best help you today"
              placeholder="Choose one"
            />
          </div>
          <div className="container-for-inputs">
            <Input title="Full Name" placeholder="" />
          </div>
          <div className="container-for-inputs">
            <Input title="Bussiness Email" placeholder="" />
          </div>
          <div className="container-for-inputs">
            <Input title="Phone Number" placeholder="" />
          </div>
          <div className="container-for-inputs">
            <Input title="Job Title" placeholder="" />
          </div>
          <button
            style={myFont.style}
            className="btn-for-submit-at-contact-screen"
          >
            Submit
          </button>
          <p className="terms-and-privacy-text-ahdjsn">
            By submitting this form, you are agreeing to Demandscoop's
            <br /> Privacy Policy and Terms of Service.
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactUsForm;
