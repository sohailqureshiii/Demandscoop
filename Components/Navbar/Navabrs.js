import Image from "next/image";
import React from "react";
// import "./navbar.css";
import MainLogo from "../../public/DemandscoopMain-logo.png";
import localFont from "next/font/local";
const myFont = localFont({ src: "../../Fonts/Montserrat-Medium.ttf" });
const Navabrs = () => {
  return (
    <div className="layout-bx-fr-main-navigation-bx-layout">
      <div className="layout-box-fr-navigation-sub-bx">
        <div className="layout-box-fr-logo-in-jdwla">
          {/* <h1 style={{ color: "#fff" }}>My Logo Here</h1> */}
          <Image src={MainLogo} width={"100%"} height={65} />
        </div>
        <ul className="ul-list-for-navtion-btnss-at-nnavabr">
          <li className="nav-tabs-links-at-cntr-pd">Home</li>
          <li className="nav-tabs-links-at-cntr-pd">Why Us</li>
          <li className="nav-tabs-links-at-cntr-pd">Solutions</li>
          <li className="nav-tabs-links-at-cntr-pd">Company</li>
          <li className="nav-tabs-links-at-cntr-pd">Contact</li>
        </ul>
        <div>
          <button
            className="btn-at-nav-with-cnt-us-redirection-at"
            style={myFont.style}
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navabrs;
