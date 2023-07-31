import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import MainLogo from "../../public/DemandscoopMain-logo.png";
import Hamburger from "../../public/hamburgerig.png";
import NavModal from "../NavBarModal/NavBarModal";
import DropdownMenu from "../DropdownService/DropdownService";
import localFont from "next/font/local";
const myFont = localFont({ src: "../../Fonts/Montserrat-Medium.ttf" });
const HomeNavabr = () => {
  const [show, setShow] = useState(false);
  const router = useRouter();
  return (
    <>
      <div className="background-for-home-navigationbar">
        <div className="layout-box-fr-navigation-sub-bx">
          <div className="layout-box-fr-logo-in-jdwla">
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
            <li className="Inactive-nav-tabs-links-at-Homescreen">
              <DropdownMenu menu={<Link href="/Service">Services</Link>}>
                <div className="internal-box-for-drop-down-in-navbar">
                  <div>
                    <h5 className="header-at-drp-dwn-at-navbar">
                      Demand Generation
                    </h5>
                    <Link href="/service/account-based-marketing">
                      <p className="list-of-under-services-at-dropdwn">
                        Account Based Marketing
                      </p>
                    </Link>
                    <Link href="/service/content-marketing">
                      <p className="list-of-under-services-at-dropdwn">
                        Content Marketing
                      </p>
                    </Link>
                    <Link href="/service/event-promotion">
                      <p className="list-of-under-services-at-dropdwn">
                        Event Promotion
                      </p>
                    </Link>
                    <Link href="/service/marketing-qualified-lead">
                      <p className="list-of-under-services-at-dropdwn">
                        Marketing Qualified Lead (MQL)
                      </p>
                    </Link>
                  </div>
                  <div>
                    <h5 className="header-at-drp-dwn-at-navbar">
                      Sales Development
                    </h5>
                    <Link href="/service/appointment-generation">
                      <p className="list-of-under-services-at-dropdwn">
                        Appointment Generation
                      </p>
                    </Link>
                    <Link href="/service/bant-lead">
                      <p className="list-of-under-services-at-dropdwn">
                        BANT Lead
                      </p>
                    </Link>
                    <Link href="/service/confirmed-call-back">
                      <p className="list-of-under-services-at-dropdwn">
                        Confirmed Call Back
                      </p>
                    </Link>
                    <Link href="/service/sales-qualified-lead">
                      <p className="list-of-under-services-at-dropdwn">
                        Sales Qualified Lead
                      </p>
                    </Link>
                  </div>
                  <div>
                    <h5 className="header-at-drp-dwn-at-navbar">
                      Database Services
                    </h5>
                    <Link href="/service/b2b-list-building">
                      <p className="list-of-under-services-at-dropdwn">
                        B2B List Building
                      </p>
                    </Link>
                    <Link href="/service/database-cleansing">
                      <p className="list-of-under-services-at-dropdwn">
                        Database Cleansing
                      </p>
                    </Link>
                    <Link href="/service/install-database">
                      <p className="list-of-under-services-at-dropdwn">
                        Install Database
                      </p>
                    </Link>
                  </div>
                  <div>
                    <h5 className="header-at-drp-dwn-at-navbar">
                      Digital Marketing
                    </h5>
                    <Link href="/service/email-marketing">
                      <p className="list-of-under-services-at-dropdwn">
                        Email Marketing
                      </p>
                    </Link>
                    <Link href="/service/market-research">
                      <p className="list-of-under-services-at-dropdwn">
                        Market Research
                      </p>
                    </Link>
                    <Link href="/service/seo-services">
                      <p className="list-of-under-services-at-dropdwn">
                        SEO Services
                      </p>
                    </Link>
                  </div>
                </div>
              </DropdownMenu>
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
          <Link href="/Contactus">
            <button className="btn-at-homepage-navbar-jsd" style={myFont.style}>
              Get Started
            </button>
          </Link>
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
