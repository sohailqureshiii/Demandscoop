import Footer from "@/Components/Footer/footer";
import HomeNavabr from "@/Components/Navbar/HomePageNavbar";
import Navabrs from "@/Components/Navbar/Navabrs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import WhitePaperImg from "../public/whitepapers.png";
import localFont from "next/font/local";

const myFont = localFont({ src: "../Fonts/Montserrat-Medium.ttf" });
// import WhitePaperOne from "../WhitePaperspdf/testwhitepaper.pdf";
const WhitePapers = () => {
  const WhitePaper = () => {
    return (
      <>
        <a href="testwhitepaper.pdf" download={"testwhitepaper.pdf"}>
          <div className="conatainers-for-white-papers-at-section">
            <div className="inside-container-at-white-paper-section">
              <Image
                src={WhitePaperImg}
                width={"100%"}
                height={428}
                alt="Picture of the author"
              />{" "}
            </div>
            <h3 className="hedr-at-white-paper-cnt">
              Guide To Better Tco And Agility With Hyper Converged
              Infrastructure
            </h3>
            <p className="para-at-white-paper-cnt">
              It’s not easy being today’s CIO. As employees bring growing
              numbers of their own computing devices to work, CIOs are faced
              with a tough choice. They must either figure out a secure way to
              allow employees to conduct business on their own devices —no easy
              job—or they must simply say no.
            </p>
          </div>
        </a>
      </>
    );
  };
  return (
    <div style={myFont.style}>
      <div className="Main-layout-for-dmdscoop-for-contact-us-creen">
        <div className="background-litj-bl-in-front-for-contact-us-creen">
          <HomeNavabr />
          <div className="flx-fr-center-layout-at-cnt aling-bottomkdnc">
            <div className="widtgh-fr-dms-center-layout">
              <h1 className="header-at-contact-us-screen-layout">
                B2B Whitepapers
              </h1>
              <p className="para-at-contact-us-screen-layout">
                Our B2B Whitepapers offer valuable insights, addressing industry
                challenges and emerging trends. Crafted with thorough research
                and expertise, they empower decision-makers to drive business
                growth. Unlock a wealth of knowledge to stay ahead, navigate
                complexities, and seize opportunities in the dynamic B2B
                landscape.
              </p>

              <Link href="/Contactus">
                <button
                  // className="lets-cnt-btn-at-main-layout"
                  className="contac-us-page-btn-cta-sjm"
                  style={{ marginLeft: "0px" }}
                >
                  Lets Connect
                </button>
              </Link>
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
            </div>
          </div>
        </div>
      </div>
      <div className="flx-fr-center-layout-at-cnt  pad-top-low">
        <div className="widtgh-fr-dms-center-layout">
          <h2 className="header-at-service-page-secound-header text-aling-left-atdfv">
            We convert your ideas into workable solutions
          </h2>
          <div>
            <p className="para-at-service-page-secound-para text-aling-left-atdfv">
              Creating a white paper that is engaging takes a lot of time and
              effort. Learn how to get your content in front of as many people
              as possible and attract more leads by making the most of your
              investment. Content marketing projects like white papers and
              guides require a lot of time and effort. However, investing in
              these marketing powerhouses can boost engagement with buyers and
              help you develop a convincing business case for your products.
            </p>
            <p className="para-at-service-page-secound-para text-aling-left-atdfv ">
              White papers provide buyers with in-depth information they need to
              make informed purchasing decisions, especially for technology
              buyers. According to Statista, 71% of B2B technology buyers have
              read white papers in the past 12 months. Creating your white paper
              is only half the battle. It is not uncommon for B2B marketers to
              spend lots of time and resources on producing a white paper before
              burying it deep within their website, where no one can read it.
            </p>
          </div>
        </div>{" "}
      </div>
      <div className="flx-fr-center-layout-at-cnt  pad-top-low">
        <div className="widtgh-fr-dms-center-layout">
          <h2 className="header-at-service-page-secound-header font-size-small">
            Daily Source Of B2B Industry Whitepapers To Enhance Your Source Of
            Knowledge In The B2B Industry
          </h2>

          <div className="flxin-wrap-sections-at-white-paper">
            {/* ----------- */}
            <WhitePaper />
            <WhitePaper />
            <WhitePaper />
            <WhitePaper />
            <WhitePaper />
            <WhitePaper />
          </div>
        </div>
      </div>
      <div style={{ paddingTop: "6em" }}>
        <Footer />
      </div>
    </div>
  );
};

export default WhitePapers;
