import { AboutSection } from "@/Components/AboutSection/AboutSection";
import Footer from "@/Components/Footer/footer";
import HomeNavabr from "@/Components/Navbar/HomePageNavbar";
import TeamsImg from "../public/group.svg";
import ExperienceImg from "../public/quality.svg";
import SuccessImg from "../public/growth.svg";
import Image from "next/image";
import React from "react";
import localFont from "next/font/local";
const myFont = localFont({ src: "../Fonts/Montserrat-Medium.ttf" });
import { CountUp } from "use-count-up";

const About = () => {
  return (
    <div style={myFont.style}>
      <div>
        <div>
          <HomeNavabr />
          <div className="displayflexat-ns">
            <div className="header-layout-at-main-section">
              <h1 className="hone-large-title-fr-hdr-in-main-layout">
                We are in the business of
              </h1>
              <h1 className="hone-large-title-fr-hdr-in-main-layout">
                Seamless B2B Solutions
              </h1>
              <p className="para-at-main-layout-atnew-sec">
                Choose our B2B services for expert lead generation, tailored
                solutions, and exceptional results. We drive growth, increase
                ROI, and deliver outstanding value. Partner with us for a
                thriving business.
              </p>
              <p className="third-para-header-at-ijnck">ACHIEVEMENTS</p>
            </div>
          </div>
        </div>
      </div>{" "}
      <div
        className="Counts-section-container-at-home-layout"
        style={{ marginTop: "0" }}
      >
        <div className="container-for-sinlge-count-ahome-layout">
          <h2 className="counts-of-new-hdr-sfs">
            <CountUp isCounting end={1387536} duration={3.2} />
          </h2>
          <p className="para-at-count-at-about">Leads Generated</p>
        </div>
        <div className="container-for-sinlge-count-ahome-layout">
          <h2 className="counts-of-new-hdr-sfs" data-val="7,526">
            <CountUp isCounting end={7526} duration={3.2} />
          </h2>
          <p className="para-at-count-at-about">Campaigns Launched</p>
        </div>
        <div className="container-for-sinlge-count-ahome-layout">
          <h2 className="counts-of-new-hdr-sfs" data-val="M">
            <CountUp isCounting end={60} duration={3.2} />M
          </h2>
          <p className="para-at-count-at-about">Audience Reached</p>
        </div>
        <div className="container-for-sinlge-count-ahome-layout no-border-at-right">
          <h2 className="counts-of-new-hdr-sfs">
            {" "}
            <CountUp isCounting end={97.6} duration={3.2} />%
          </h2>
          <p className="para-at-count-at-about">Client Satisfaction</p>
        </div>
      </div>
      <div className="top-minus-padd-in-mobile-view">
        <AboutSection />
      </div>
      <div>
        <p className="third-para-header-at-ijnck" data-aos="fade-up">
          WHY CHOOSE US
        </p>
        <h1 className="hone-large-title-fr-hdr-in-main-layout pad-left-for-hdr-in-mob only-center-this-dhr">
          The Right Decision for
        </h1>
        <h1 className="hone-large-title-fr-hdr-in-main-layout pad-left-for-hdr-in-mob only-center-this-dhr">
          Your Marketing Strategy
        </h1>
      </div>
      <div className="efioefkls-esolk-dsk ">
        {" "}
        <div className="flx-section-wihtjd">
          <div className="flx-with-img-and-hdr-and-para">
            <div className="flx-fr-im-of-hwye-dis">
              <div className="border-for-backgrnd-img-left">
                <Image
                  src={TeamsImg}
                  width={50}
                  height={50}
                  alt="Demandscoop"
                />
              </div>
            </div>
            <div>
              <h5 className="hdr-at-three-section-of-why">Professional Team</h5>
              <p className="para-at-three-section-of-why-choose-us">
                HUMBLE, YET HONORED. Thats how our team defines themselves.
                We’ve also earned a few accolades. Sure, rewards and recognition
                are nice, but we don’t do it for the bragging rights.
              </p>
            </div>
          </div>
          <div className="flx-with-img-and-hdr-and-para">
            <div className="flx-fr-im-of-hwye-dis">
              <div className="border-for-backgrnd-img-left">
                <Image
                  src={ExperienceImg}
                  width={50}
                  height={50}
                  alt="Demandscoop"
                />
              </div>{" "}
            </div>
            <div>
              <h5 className="hdr-at-three-section-of-why">Years Experience</h5>
              <p className="para-at-three-section-of-why-choose-us">
                We've learned in past 17 years that it's not about the tactics
                but the strategy. And that's made all difference. We've helped
                57+ businesses who need an outsourced team of experts to carry
                out their marketing vision
              </p>
            </div>
          </div>
          <div className="flx-with-img-and-hdr-and-para">
            <div className="flx-fr-im-of-hwye-dis">
              {" "}
              <div className="border-for-backgrnd-img-left">
                <Image
                  src={SuccessImg}
                  width={50}
                  height={50}
                  alt="Demandscoop"
                />
              </div>{" "}
            </div>
            <div>
              <h5 className="hdr-at-three-section-of-why">
                Success Guaranteed
              </h5>
              <p className="para-at-three-section-of-why-choose-us">
                We at DemandScoop help you undertake your marketing and sales
                initiatives by recognising your buyers’ persona and their
                intentions to purchase. That's why we have a recurring business
                ratio of 96.8%
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
