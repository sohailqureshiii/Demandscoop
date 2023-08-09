import React, { useState } from "react";
import { Input } from "../Input/Input";
import localFont from "next/font/local";
import { sendContactForm } from "@/lib/api";
const myFont = localFont({ src: "../../Fonts/Montserrat-Medium.ttf" });

const ContactUsForm = () => {
  // const [message, setMessage] = useState("");
  const [fullName, setFullName] = useState("");
  const [bussinessEmail, setBussinessEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [jobTitle, setJobTitle] = useState("");

  const onSubmit = async (e) => {
    const values = {
      // message,
      fullName,
      bussinessEmail,
      phoneNumber,
      jobTitle,
    };
    console.log("asdasdasd", values);

    try {
      await sendContactForm(values);

      // setState(initState);
      // toast({
      //   title: "Message sent.",
      //   status: "success",
      //   duration: 2000,
      //   position: "top",
      // });
    } catch (error) {
      console.log("error while submitting");
    }
  };

  return (
    <>
      <div className="container-for-contact-us-form">
        <h2 className="header-for-contact-us-form">Send us a message</h2>
        <div className="continer-of-inputs-at-contact-us-form">
          {/* <div className="container-for-inputs">
            <Input
              title="How can we best help you today"
              placeholder="Choose one"
              name="message"
              errorBorderColor="red.300"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
          </div> */}
          <div className="container-for-inputs">
            <Input
              title="Full Name"
              placeholder=""
              name="fullName"
              errorBorderColor="red.300"
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
              }}
            />
          </div>
          <div className="container-for-inputs">
            <Input
              title="Bussiness Email"
              placeholder=""
              value={bussinessEmail}
              onChange={(e) => {
                setBussinessEmail(e.target.value);
              }}
            />
          </div>
          <div className="container-for-inputs">
            <Input
              title="Phone Number"
              placeholder=""
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />
          </div>
          <div className="container-for-inputs">
            <Input
              title="Job Title"
              placeholder=""
              value={jobTitle}
              onChange={(e) => {
                setJobTitle(e.target.value);
              }}
            />
          </div>
          <button
            style={myFont.style}
            className="btn-for-submit-at-contact-screen"
            onClick={(e) => {
              onSubmit(e);
            }}
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
