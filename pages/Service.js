import ContactUsForm from "@/Components/ContactusForm/ContactUsForm";
import Footer from "@/Components/Footer/footer";
import HomeNavabr from "@/Components/Navbar/HomePageNavbar";
import Link from "next/link";
import React from "react";
import localFont from "next/font/local";
const myFont = localFont({ src: "../Fonts/Montserrat-Medium.ttf" });
const Service = () => {
  return (
    <div style={myFont.style}>
      <div className="Main-layout-for-dmdscoop-for-contact-us-creen">
        <div className="background-litj-bl-in-front-for-contact-us-creen">
          <HomeNavabr />
          <div className="flx-fr-center-layout-at-cnt aling-bottomkdnc">
            <div className="widtgh-fr-dms-center-layout">
              <h1 className="header-at-contact-us-screen-layout">
                B2B Appointment
                <br />
                Generation Services
              </h1>
              <p className="para-at-contact-us-screen-layout">
                Generating appointments are never easy. We achieved the end goal
                by adopting multiple strategies.
                <br />
                Our experienced appointment setting experts comprehend the
                triggers that produce quality leads and meetings <br /> that
                your sales team will acknowledge and close.
              </p>
              <p className="para-at-contact-for-mobile-only-at-sevice">
                Generating appointments are never easy. We achieved the end goal
                by adopting multiple strategies. Our experienced appointment
                setting experts comprehend the triggers that produce quality
                leads and meetings that your sales team will acknowledge and
                close.
              </p>
              {/* <button className="contact-us-small-btn-at-generation-page">
                Contact Us
              </button> */}
              {/* <button>
                Button
                <div className="star-1">
                  <svg
                    xmlnsxlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 784.11 815.53"
                    style={{
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                      imageRendering: "-webkit-optimize-contrast",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                    }}
                    version="1.1"
                    xmlspace="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs></defs>
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                      <path
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                        className="fil0"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="star-2">
                  <svg
                    xmlnsxlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 784.11 815.53"
                    style={{
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                      imageRendering: "-webkit-optimize-contrast",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                    }}
                    version="1.1"
                    xmlspace="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs></defs>
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                      <path
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                        className="fil0"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="star-3">
                  <svg
                    xmlnsxlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 784.11 815.53"
                    style={{
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                      imageRendering: "-webkit-optimize-contrast",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                    }}
                    version="1.1"
                    xmlspace="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs></defs>
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                      <path
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                        className="fil0"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="star-4">
                  <svg
                    xmlnsxlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 784.11 815.53"
                    style={{
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                      imageRendering: "-webkit-optimize-contrast",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                    }}
                    version="1.1"
                    xmlspace="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs></defs>
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                      <path
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                        className="fil0"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="star-5">
                  <svg
                    xmlnsxlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 784.11 815.53"
                    style={{
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                      imageRendering: "-webkit-optimize-contrast",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                    }}
                    version="1.1"
                    xmlspace="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs></defs>
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                      <path
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                        className="fil0"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="star-6">
                  <svg
                    xmlnsxlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 784.11 815.53"
                    style={{
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                      imageRendering: "-webkit-optimize-contrast",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                    }}
                    version="1.1"
                    xmlspace="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs></defs>
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                      <path
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                        className="fil0"
                      ></path>
                    </g>
                  </svg>
                </div>
              </button> */}
              <Link href="/Contactus">
                <button
                  // className="lets-cnt-btn-at-main-layout"
                  className="contac-us-page-btn-cta-sjm margin-left-zero-at-btn"
                >
                  Lets Connect
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flx-fr-center-layout-at-cnt  pad-top-low">
        <div className="widtgh-fr-dms-center-layout">
          <h2 className="header-at-service-page-secound-header ">
            We convert your ideas into workable solutions
          </h2>
          <div className="flx-fr-center-layout-at-cnt">
            <p className="para-at-service-page-secound-para">
              Setting an appointment is not a job suitable for a rookie; it is
              the experience that helps you land a client 10X faster than when
              you go with a god may help attitude. Appointment generation
              service is the epitome of the service industry; it assures you of
              results that might look bleak under ordinary circumstances.
            </p>
          </div>
          <div className="flx-fr-center-layout-at-cnt">
            <div className="contain-of-both-header-and-contact-form gap-property">
              <div>
                <h3 className="extralagreg-font">
                  Why this is, hands down, the best service?
                </h3>
                <p className="font-nd-lnth-andkj padd-top-at-service-page-in-sect">
                  When you generate an appointment, there is an 80% clear cut
                  chance of that account already being in your kitty; all this
                  is left now is to take your team, sit in on a call, pitch the
                  best of your product and count the cash.
                </p>
                <p className="font-nd-lnth-andkj padd-top-at-service-page-in-sect">
                  Statistics show, our clients have absolutely loved our
                  approach, and it has presented extraordinary ROI; our meeting
                  setting techniques have been credited by both the client as
                  well as the customer, we bring the soothing element in your
                  sales pipeline.
                </p>
                <p className="font-nd-lnth-andkj padd-top-at-service-page-in-sect">
                  High-quality efforts on the analytical end dictate our
                  efforts. Each of the calls we make is recorded and highly
                  analyzed to ensure that we deliver nothing but the best. Why
                  we are ahead of the market cure is simply because we treat
                  ourselves as an extension of your team and make it a goal to
                  deliver 1.5X of what you expect.
                </p>
              </div>
              <div>
                <ContactUsForm />
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
      <div className="pad-top-low">
        <Footer />
      </div>
    </div>
  );
};

export default Service;
