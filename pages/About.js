import { AboutSection } from "@/Components/AboutSection/AboutSection";
import Footer from "@/Components/Footer/footer";
import HomeNavabr from "@/Components/Navbar/HomePageNavbar";
import TeamsImg from "../public/group.svg";
import ExperienceImg from "../public/quality.svg";
import SuccessImg from "../public/growth.svg";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      <div>
        <div>
          <HomeNavabr />
          <div className="displayflexat-ns">
            <div className="header-layout-at-main-section">
              <h1 className="hone-large-title-fr-hdr-in-main-layout">
                We are in the business of
              </h1>
              <h1 className="hone-large-title-fr-hdr-in-main-layout">
                building entrepreneurs.
              </h1>
              <p className="para-at-main-layout-atnew-sec">
                Get the B2B data and software you need to connect with and close
                your most valuable buyers — all in one operating system.
              </p>
              <p className="third-para-header-at-ijnck">ACHIEVEMENTS</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flx-fr-center-layout-at-cnt  pad-top-low">
        <div className="widtgh-fr-dms-center-layout">
          <div className="contatciner-for-counts-gradient-background">
            <div className="container-for-sinlge-count">
              <h2 className="hedr-of-count-at-about">1,387,536</h2>
              <p className="para-at-count-at-about">Leads Generated</p>
            </div>
            <div className="container-for-sinlge-count">
              <h2 className="hedr-of-count-at-about">7,526</h2>
              <p className="para-at-count-at-about">Campaigns Launched</p>
            </div>
            <div className="container-for-sinlge-count">
              <h2 className="hedr-of-count-at-about">60M</h2>
              <p className="para-at-count-at-about">Audience Reached</p>
            </div>
            <div className="container-for-sinlge-count no-border-at-right">
              <h2 className="hedr-of-count-at-about">97.6%</h2>
              <p className="para-at-count-at-about">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div> */}
      <div
        className="Counts-section-container-at-home-layout"
        style={{ marginTop: "0" }}
      >
        <div className="container-for-sinlge-count-ahome-layout">
          <h2 className="counts-of-new-hdr-sfs">1,387,536</h2>
          <p className="para-at-count-at-about">Leads Generated</p>
        </div>
        <div className="container-for-sinlge-count-ahome-layout">
          <h2 className="counts-of-new-hdr-sfs">7,526</h2>
          <p className="para-at-count-at-about">Campaigns Launched</p>
        </div>
        <div className="container-for-sinlge-count-ahome-layout">
          <h2 className="counts-of-new-hdr-sfs">60M</h2>
          <p className="para-at-count-at-about">Audience Reached</p>
        </div>
        <div className="container-for-sinlge-count-ahome-layout no-border-at-right">
          <h2 className="counts-of-new-hdr-sfs">97.6%</h2>
          <p className="para-at-count-at-about">Client Satisfaction</p>
        </div>
      </div>
      <div>
        <AboutSection />
      </div>
      <div>
        <p className="third-para-header-at-ijnck">WHY CHOOSE US</p>
        <h1 className="hone-large-title-fr-hdr-in-main-layout pad-left-for-hdr-in-mob">
          The Right Decision for
        </h1>
        <h1 className="hone-large-title-fr-hdr-in-main-layout pad-left-for-hdr-in-mob">
          Your Marketing Strategy
        </h1>
      </div>

      <div className="efioefkls-esolk-dsk ">
        {" "}
        <div className="flx-section-wihtjd">
          <div className="flx-with-img-and-hdr-and-para">
            <div className="border-for-backgrnd-img-left">
              <Image src={TeamsImg} width={50} height={50} alt="Demandscoop" />
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
            <div className="border-for-backgrnd-img-left">
              <Image
                src={ExperienceImg}
                width={50}
                height={50}
                alt="Demandscoop"
              />
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
            <div className="border-for-backgrnd-img-left">
              <Image
                src={SuccessImg}
                width={50}
                height={50}
                alt="Demandscoop"
              />
            </div>
            <div>
              <h5 className="hdr-at-three-section-of-why">
                Success Guaranteed
              </h5>
              <p className="para-at-three-section-of-why-choose-us">
                We at DemandEye help you undertake your marketing and sales
                initiatives by recognising your buyers’ persona and their
                intentions to purchase. That's why we have a recurring business
                ratio of 96.8%
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ paddingTop: "5em" }}>
        <Footer />
      </div>
    </>
  );
};

export default About;
