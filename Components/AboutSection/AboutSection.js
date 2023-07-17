import Link from "next/link";
import React from "react";
import localFont from "next/font/local";
const myFont = localFont({ src: "../../Fonts/Montserrat-Medium.ttf" });
export const AboutSection = () => {
  return (
    <div className="displayflexat-ns with-backgrnd-blck">
      <div className="widtgh-fr-dms-center-layout">
        <div className="display-flx-with-about-dems-andblx">
          <div className="flx-in-of-hder-and-line">
            <h2 className="about-hdr-at-in-jka">About Demandscoop</h2>
            <div className="line-btwn-about-and-dhdr"></div>
          </div>
          <div className="width-for-left-section-at-sjk">
            <h2 className="hdr-aof-htwo-tag-at-about-sec">
              Engaging More, Refreshing Result
            </h2>
            <p className="para-at-about-sec-of-home-paly">
              The search for quality leads is never-ending, but with the right
              solutions, your business can reach the pinnacle of success.
            </p>
            <p className="para-at-about-sec-of-home-paly">
              With our 20+ years of rich experience, DemandScoop bridges the gap
              between the demand for quality leads and delivering the best leads
              to your enterprise. Our experience in the B2B arena has helped us
              collaborate with clients and deliver high-quality data, metrics,
              and analytics that drives value and satisfaction. DemandScoop goes
              the distance in giving its clients what they rightly
              deserve—unparalleled and sales-focused services.
            </p>
            <Link href="/Contactus">
              <button
                // className="lets-cnt-btn-at-main-layout"
                style={myFont.style}
                className="contac-us-page-btn-cta-sjm margin-noleft"
              >
                Lets Connect
              </button>
            </Link>
            <div className="display-block-btns-of-call-back-and-contact padobjdsosdv-sk">
              <Link href="/Contactus">
                <button
                  style={myFont.style}
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
    </div>
  );
};
