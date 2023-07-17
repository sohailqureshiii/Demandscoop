import React from "react";
import MainLogo from "../../public/DemandscoopMain-logo.png";
import Image from "next/image";
import Link from "next/link";

const NavModal = (props) => {
  if (!props.visible) {
    return null;
  }

  return (
    <>
      <div className="modalFixedBg">
        <div style={{ position: "relative" }}>
          <div className="Container-of-mobile-navigationbar">
            <div className="flx-in-logo-and-links-of-pages">
              <div>
                <Image src={MainLogo} width={"100%"} height={65} />
              </div>
              <div style={{ padding: "15px" }}>
                <svg
                  onClick={props.onClose}
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 512.000000 512.000000"
                  preserveAspectRatio="xMidYMid meet"
                  style={{ cursor: "pointer" }}
                >
                  <metadata>
                    Created by potrace 1.16, written by Peter Selinger 2001-2019
                  </metadata>
                  <g
                    transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                    fill="#fff"
                    stroke="none"
                  >
                    <path
                      d="M445 5089 c-229 -27 -406 -215 -422 -449 -7 -94 9 -171 52 -258 31
-61 111 -144 910 -942 l875 -875 -884 -885 c-926 -928 -924 -926 -960 -1049
-22 -76 -21 -213 3 -290 47 -151 157 -257 308 -296 72 -19 241 -19 309 -1 128
34 115 22 1044 951 l875 875 880 -879 c929 -928 907 -908 1036 -945 77 -23
240 -23 316 -1 203 58 333 235 333 454 0 108 -25 196 -76 273 -20 29 -430 445
-912 925 l-877 871 876 879 c829 831 877 881 904 943 83 190 43 411 -99 550
-110 108 -208 145 -369 138 -122 -6 -189 -29 -274 -93 -32 -24 -436 -422 -897
-884 l-840 -840 -873 869 c-620 617 -888 877 -926 898 -92 53 -201 74 -312 61z"
                    />
                  </g>
                </svg>
              </div>
            </div>
            <div className="pad-at-navigatoio-bxds">
              <Link href="/">
                <p className="links-for-mobile-view-innavbar-modla brdr-tp-adk">
                  Home
                </p>
              </Link>
              <Link href="/About">
                <p className="links-for-mobile-view-innavbar-modla">Why Us</p>
              </Link>

              <p className="links-for-mobile-view-innavbar-modla">Services</p>
              <p
                className="header-at-drp-dwn-at-navbar white-clroisj"
                style={{ paddingTop: "15px" }}
              >
                Demand Generation
              </p>
              <Link href="/Service">
                <p className="list-of-under-services-at-dropdwn">
                  Account Based Marketing
                </p>
              </Link>
              <Link href="/Service">
                <p className="list-of-under-services-at-dropdwn">
                  Content Marketing
                </p>
              </Link>
              <Link href="/Service">
                <p className="list-of-under-services-at-dropdwn">
                  Event Promotion
                </p>
              </Link>
              <Link href="/Service">
                <p className="list-of-under-services-at-dropdwn">
                  Marketing Qualified Lead (MQL)
                </p>
              </Link>
              <div>
                <p className="header-at-drp-dwn-at-navbar white-clroisj">
                  Sales Development
                </p>
                <Link href="/Service">
                  <p className="list-of-under-services-at-dropdwn">
                    Appointment Generation
                  </p>
                </Link>
                <Link href="/Service">
                  <p className="list-of-under-services-at-dropdwn">BANT Lead</p>
                </Link>
                <Link href="/Service">
                  <p className="list-of-under-services-at-dropdwn">
                    Confirmed Call Back
                  </p>
                </Link>
                <Link href="/Service">
                  <p className="list-of-under-services-at-dropdwn">
                    Sales Qualified Lead
                  </p>
                </Link>
              </div>
              <div>
                <p className="header-at-drp-dwn-at-navbar white-clroisj">
                  Database Services
                </p>
                <Link href="/Service">
                  <p className="list-of-under-services-at-dropdwn">
                    B2B List Building
                  </p>
                </Link>
                <Link href="/Service">
                  <p className="list-of-under-services-at-dropdwn">
                    Database Cleansing
                  </p>
                </Link>
                <Link href="/Service">
                  <p className="list-of-under-services-at-dropdwn">
                    Install Database
                  </p>
                </Link>
              </div>
              <div>
                <h5 className="header-at-drp-dwn-at-navbar white-clroisj">
                  Digital Marketing
                </h5>
                <Link href="/Service">
                  <p className="list-of-under-services-at-dropdwn">
                    Email Marketing
                  </p>
                </Link>
                <Link href="/Service">
                  <p className="list-of-under-services-at-dropdwn">
                    Market Research
                  </p>
                </Link>
                <Link href="/Service">
                  <p className="list-of-under-services-at-dropdwn">
                    SEO Services
                  </p>
                </Link>
              </div>
              <Link href="/WhitePapers">
                <p className="links-for-mobile-view-innavbar-modla">
                  WhitePapers
                </p>
              </Link>
              <Link href="/Contactus">
                <p className="links-for-mobile-view-innavbar-modla">
                  Contact US
                </p>
              </Link>
            </div>
            <div className="pad-at-navigatoio-bxds">
              <Link href="/Contactus">
                <button
                  // className="lets-cnt-btn-at-main-layout"
                  className="lets-connect-atmobile-view-sect"
                >
                  Lets Connect
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavModal;
