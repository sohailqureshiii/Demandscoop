import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import MainLogo from "../../public/DemandscoopMain-logo.png";
import Hamburger from "../../public/hamburgerig.png";
import NavModal from "../NavBarModal/NavBarModal";

const HomeNavabr = () => {
  const [show, setShow] = useState(false);
  const router = useRouter();
  return (
    <>
      <div className="background-for-home-navigationbar">
        <div className="layout-box-fr-navigation-sub-bx">
          <div className="layout-box-fr-logo-in-jdwla">
            {/* <h1 style={{ color: "#fff" }}>My Logo Here</h1> */}
            <Link href="/">
              <Image src={MainLogo} width={"100%"} height={65} />
            </Link>
          </div>
          <ul className="ul-list-for-navtion-at-home-screen-ajk">
            <li
              className={
                router.pathname == "/"
                  ? "nav-tabs-links-at-Homescreen"
                  : "Inactive-nav-tabs-links-at-Homescreen"
              }
            >
              <Link href="/"> Home</Link>
            </li>
            <li
              className={
                router.pathname == "/About"
                  ? "nav-tabs-links-at-Homescreen"
                  : "Inactive-nav-tabs-links-at-Homescreen"
              }
            >
              <Link href="/About"> Why Us</Link>
            </li>
            <li
              className={
                router.pathname == "/Service"
                  ? "nav-tabs-links-at-Homescreen"
                  : "Inactive-nav-tabs-links-at-Homescreen"
              }
            >
              <Link href="/Service">Services</Link>
            </li>
            <li
              className={
                router.pathname == "/WhitePapers"
                  ? "nav-tabs-links-at-Homescreen"
                  : "Inactive-nav-tabs-links-at-Homescreen"
              }
            >
              <Link href="/WhitePapers">WhitePapers</Link>
            </li>
            <li
              className={
                router.pathname == "/Contactus"
                  ? "nav-tabs-links-at-Homescreen"
                  : "Inactive-nav-tabs-links-at-Homescreen"
              }
            >
              <Link href="/Contactus">Contact US</Link>
            </li>
          </ul>

          <button className="btn-at-homepage-navbar-jsd">Contact Us</button>

          <div
            className="display-none-at-hamburger-iohs"
            onClick={() => setShow(true)}
          >
            <Image src={Hamburger} width={25} height={25} />
          </div>
        </div>
      </div>
      <NavModal visible={show} onClose={() => setShow(false)}></NavModal>
    </>
  );
};

export default HomeNavabr;
