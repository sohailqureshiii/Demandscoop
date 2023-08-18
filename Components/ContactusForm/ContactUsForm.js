import React, { useState } from "react";
import { Input } from "../Input/Input";
import localFont from "next/font/local";
import { sendContactForm } from "@/lib/api";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const myFont = localFont({ src: "../../Fonts/Montserrat-Medium.ttf" });

const ContactUsForm = () => {
  // const [message, setMessage] = useState("");
  const [fullName, setFullName] = useState("");
  const [bussinessEmail, setBussinessEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();


    // Validation checks
    if (!fullName || fullName.trim().length < 5) {
      toast.error("Please provide a full name with at least 5 words.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(bussinessEmail)) {
      toast.error("Please provide a valid business email.");
      return;
    }

    if (!/^\d{10}$/.test(phoneNumber)) {
      toast.error("Please provide a valid 10-digit phone number.");
      return;
    }

    if (!jobTitle) {
      toast.error("Please provide a job title.");
      return;
    }

    setIsLoading(true);

    const values = {
      fullName,
      bussinessEmail,
      phoneNumber,
      jobTitle,
    };



    try {
      await sendContactForm(values);
      setIsLoading(false);
      toast.success("Your message has been sent successfully!", {
        position: "top-right",
        autoClose: 2000, // Time in milliseconds
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      setIsLoading(false);
      toast.error("An error occurred. Please try again later.", {
        position: "top-right",
        autoClose: 2000, // Time in milliseconds
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

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
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="loading-spinner-container">
                <div className="loading-spinner"></div>
              </div>
            ) : (
              'Submit'
            )}
          </button>
          <p className="terms-and-privacy-text-ahdjsn">
            By submitting this form, you are agreeing to Demandscoop's
            <br /> Privacy Policy and Terms of Service.
          </p>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default ContactUsForm;
