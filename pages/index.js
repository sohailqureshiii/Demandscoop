import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Clientone from "../public/adobe.svg";
import Clientwo from "../public/okta.svg";
import Clienthree from "../public/loom.svg";
import Clientfour from "../public/hashicorp.svg";
import Category from "../public/category.svg";
import Clock from "../public/clock (1).svg";
import Heart from "../public/heart.svg";
import Image from "next/image";
import Footer from "@/Components/Footer/footer";
import HomeNavabr from "@/Components/Navbar/HomePageNavbar";
import { AboutSection } from "@/Components/AboutSection/AboutSection";
import Modal from "@/Components/Modal.js/Modal";
import { useState } from "react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div
        // className="Main-layout-for-dmdscoop"
        className="main-without--backfround"
      >
        <div
          //  className="background-litj-bl-in-front"
          className="main-without--backfround"
        >
          <HomeNavabr />
          <div className="displayflexat-ns ">
            <div className="header-layout-at-main-section">
              <h1
                //  className="hone-large-title-fr-hdr-in-main-layout animate-charcter"
                className="Main-first-header-at-home-screeen-h-one-tag animate-charcter"
              >
                It’s Our Business to
                <br />
                Grow Yours.
              </h1>
              <p
                //  className="para-at-main-layout-atnew-sec"
                className="para-secound-heaser-at-home-page-layout"
              >
                Get the B2B data and software you need to connect with and close
                your most valuable buyers — all in one operating system.
              </p>
              <div className="displayflexat-ns disapalu-none-at-mobile-setion">
                <button
                  //  className="lets-cnt-btn-at-main-layout"
                  className="get-a-call-back-cta-at-home-page-layout"
                  onClick={() => setShow(true)}
                >
                  Get a callback
                </button>
                <Link href="/Contactus">
                  <button
                    // className="lets-cnt-btn-at-main-layout"
                    className="contac-us-page-btn-cta-sjm"
                  >
                    Lets Connect
                  </button>
                </Link>
              </div>
              <div className="display-block-btns-of-call-back-and-contact">
                <button
                  //  className="lets-cnt-btn-at-main-layout"
                  className="mobile-view-age-talcjks"
                  onClick={() => setShow(true)}
                >
                  Get a callback
                </button>
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
          <Modal visible={show} onClose={() => setShow(false)}></Modal>
          <div className="displayflexat-ns">
            <div className="header-layout-at-main-section paddinglow-atsdj">
              <p
                // className="trusted-para-at-hm-main-layout"
                className="trust-partner-list-at-home-layout"
              >
                TRUSTED BY 30,000+ BUSINESSES.
              </p>
              <div className="flx-in-client-img-cntr">
                <Image
                  src={Clientone}
                  width={100}
                  height={50}
                  alt="Picture of the author"
                />
                <Image
                  src={Clientwo}
                  width={70}
                  height={30}
                  alt="Picture of the author"
                />
                <Image
                  src={Clienthree}
                  width={100}
                  height={50}
                  alt="Picture of the author"
                />
                <Image
                  src={Clientfour}
                  width={100}
                  height={50}
                  alt="Picture of the author"
                />
              </div>
            </div>
          </div>
        </div>
        <>
          <AboutSection />
        </>
        <div className="displayflexat-ns">
          <div className="widtgh-fr-dms-center-layout">
            <h2 className="secoun-home-layout-title-at-main-sec">
              What Makes us Different
            </h2>
            <div className="displayflexat-ns">
              <p className="para-at-secound-para-layout">
                Get the B2B data and software you need to connect with and close
                your most valuable buyers — all in one operating system.
              </p>
            </div>
            <div>
              <div className="displayflexat-ns gap-properties">
                <div className="contain-first-at-home-layout">
                  <div className="colour-full-backgrounds-at-sec blu-at-box"></div>
                  <div className="padd-and-sinc-for-svg">
                    <Image
                      src={Category}
                      width={100}
                      height={50}
                      alt="Picture of the author"
                    />
                  </div>
                  <h4 className="inter-header-sect-at-homme-box-plya">
                    Assisted 15 media agencies across the globe in executing
                    their marketing campaigns
                  </h4>
                  <p className="get-start-btn-at-btm blueclr-of-fnt-get-strd">
                    Get Started
                  </p>
                </div>
                <div className="contain-first-at-home-layout">
                  <div className="colour-full-backgrounds-at-sec next-at-box"></div>
                  <div className="padd-and-sinc-for-svg">
                    <Image
                      src={Clock}
                      width={100}
                      height={50}
                      alt="Picture of the author"
                    />
                  </div>
                  <h4 className="inter-header-sect-at-homme-box-plya">
                    Obtained more than 93% repeat business for a job well done
                  </h4>
                  <p className="get-start-btn-at-btm difffclr-of-fnt-get-strd">
                    Get Started
                  </p>
                </div>
                <div className="contain-first-at-home-layout">
                  <div className="colour-full-backgrounds-at-sec third-color-at-box"></div>
                  <div className="padd-and-sinc-for-svg">
                    <Image
                      src={Heart}
                      width={100}
                      height={50}
                      alt="Picture of the author"
                    />
                  </div>
                  <h4 className="inter-header-sect-at-homme-box-plya">
                    Helped 24 technology enterprises with their sales and
                    marketing strategies
                  </h4>
                  <p className="get-start-btn-at-btm pinksibkclr-of-fnt-get-strd">
                    Get Started
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="Main-layout-for-dmdscoop-service-section">
            {/* -----------------  */}
            <div className="background-litj-bl-in-front-service-section">
              <h2 className="third-home-layout-title-at-third-sec-incolor">
                Choose your Service
              </h2>
              {/* -----------------  */}
              <div className="displayflexat-ns">
                <div className="displayflexat-ns">
                  <button className="Btn-at-service-sec-in-hm-main-layout left-radious">
                    Demand Generation
                  </button>
                  <button className="Btn-at-service-sec-in-hm-main-layout">
                    Sales Development
                  </button>
                  <button className="Btn-at-service-sec-in-hm-main-layout">
                    Digital Marketing
                  </button>
                </div>
              </div>
              <div div className="paddin-fr-service-sec-boxes">
                <div className="displayflexat-ns">
                  <div className="backgrnd-fr-grey-in-service-sec-at-ns">
                    <div className="container">
                      <div className="card">
                        <div className="image">
                          <h4 className="efrdrewde">Account Based Marketing</h4>
                        </div>
                        <div className="content">
                          <p className="secound-para-at-animated-serivece">
                            Unlock revenue potential by captivating and
                            converting high-value accounts with personalized
                            marketing strategies.
                          </p>
                          <p>
                            <Link href="/Contactus">
                              <button
                                // className="lets-cnt-btn-at-main-layout"
                                // className="contac-us-page-btn-cta-sjm"
                                className="btn-fr-get-started-at-animated-bx"
                              >
                                Lets Connect
                              </button>
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="backgrnd-fr-grey-in-service-sec-at-ns">
                    <div className="container">
                      <div className="card">
                        <div className="image">
                          <h4 className="efrdrewde">Content Marketing</h4>
                        </div>
                        <div className="content">
                          <p className="secound-para-at-animated-serivece">
                            Unlock revenue potential by captivating and
                            converting high-value accounts with personalized
                            marketing strategies.
                          </p>
                          <p>
                            <Link href="/Contactus">
                              <button
                                // className="lets-cnt-btn-at-main-layout"
                                // className="contac-us-page-btn-cta-sjm"
                                className="btn-fr-get-started-at-animated-bx"
                              >
                                Lets Connect
                              </button>
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="backgrnd-fr-grey-in-service-sec-at-ns">
                    <div className="container">
                      <div className="card">
                        <div className="image">
                          <h4 className="efrdrewde">Event Promotion</h4>
                        </div>
                        <div className="content">
                          <p className="secound-para-at-animated-serivece">
                            Unlock revenue potential by captivating and
                            converting high-value accounts with personalized
                            marketing strategies.
                          </p>
                          <p>
                            <Link href="/Contactus">
                              <button
                                // className="lets-cnt-btn-at-main-layout"
                                // className="contac-us-page-btn-cta-sjm"
                                className="btn-fr-get-started-at-animated-bx"
                              >
                                Lets Connect
                              </button>
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="displayflexat-ns">
                  <div className="backgrnd-fr-grey-in-service-sec-at-ns">
                    <div className="container">
                      <div className="card">
                        <div className="image">
                          <h4 className="efrdrewde">Appointment Generation</h4>
                        </div>
                        <div className="content">
                          <p className="secound-para-at-animated-serivece">
                            Unlock revenue potential by captivating and
                            converting high-value accounts with personalized
                            marketing strategies.
                          </p>
                          <p>
                            <Link href="/Contactus">
                              <button
                                // className="lets-cnt-btn-at-main-layout"
                                // className="contac-us-page-btn-cta-sjm"
                                className="btn-fr-get-started-at-animated-bx"
                              >
                                Lets Connect
                              </button>
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="backgrnd-fr-grey-in-service-sec-at-ns">
                    <div className="container">
                      <div className="card">
                        <div className="image">
                          <h4 className="efrdrewde">Bant Lead</h4>
                        </div>
                        <div className="content">
                          <p className="secound-para-at-animated-serivece">
                            Unlock revenue potential by captivating and
                            converting high-value accounts with personalized
                            marketing strategies.
                          </p>
                          <p>
                            <Link href="/Contactus">
                              <button
                                // className="lets-cnt-btn-at-main-layout"
                                // className="contac-us-page-btn-cta-sjm"
                                className="btn-fr-get-started-at-animated-bx"
                              >
                                Lets Connect
                              </button>
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="backgrnd-fr-grey-in-service-sec-at-ns">
                    <div className="container">
                      <div className="card">
                        <div className="image">
                          <h4 className="efrdrewde">Email Marketing</h4>
                        </div>
                        <div className="content">
                          <p className="secound-para-at-animated-serivece">
                            Unlock revenue potential by captivating and
                            converting high-value accounts with personalized
                            marketing strategies.
                          </p>
                          <p>
                            <Link href="/Contactus">
                              <button
                                // className="lets-cnt-btn-at-main-layout"
                                // className="contac-us-page-btn-cta-sjm"
                                className="btn-fr-get-started-at-animated-bx"
                              >
                                Lets Connect
                              </button>
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="secoun-home-layout-title-at-main-sec">
            Bringing Creativity Into Action
          </h2>
          <div className="displayflexat-ns">
            <p className="para-at-secound-para-layout">
              Unleash the power of creativity by transforming innovative ideas
              into impactful marketing campaigns that captivate and convert
              target accounts.
            </p>
          </div>
          <div className="Counts-section-container-at-home-layout">
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
        </div>
        <div className="displayflexat-ns">
          <div className="plain-white-box-for-bckrnd">
            <div className="box-for-support-are-in-main-layour">
              <div className="invisble-bx-at-cntr-jskje">
                <h2 className="hedr-of-support-sect-at-sja">
                  Get pro <br />
                  support
                </h2>
                <p className="para-for-support-section-at-ssnm">
                  We’re here to help. If you need a hand <br />
                  switching from your current solution, have
                  <br />
                  questions about why Square is right for your
                  <br />
                  business, or want support getting started,
                  <br />
                  please talk to a member of our team.
                  <br />
                </p>
                <p className="display-at-mobile-section-only-in-sbjfs">
                  We’re here to help. If you need a hand. switching from your
                  current solution, have questions about why Square is right for
                  your business, or want support getting started, please talk to
                  a member of our team.
                </p>
                <Link href="/Contactus">
                  <button className="Btn-fr-cntc-us-sect-cntc-us">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="black-section-for-foorter-at-bottom">
          <div>
            <div>
              <div className="section-center-at-faq-secjks-a">
                <h2 className="font-for-hedr-faq">FAQ</h2>
              </div>
              <div className="cntr-btwn-lines-at-faq-sec"></div>
              <div className="flx-fr-faq-questionand-plus">
                <p className="white-txt-at-faq-sect">
                  Does Square have tools for complex businesses?
                </p>
                <p className="white-txt-at-faq-sect extralarge-font">+</p>
              </div>
              <div className="cntr-btwn-lines-at-faq-sec"></div>
              <div className="flx-fr-faq-questionand-plus">
                <p className="white-txt-at-faq-sect">
                  Does Square have tools for complex businesses?
                </p>
                <p className="white-txt-at-faq-sect extralarge-font">+</p>
              </div>
              <div className="cntr-btwn-lines-at-faq-sec"></div>
              <div className="flx-fr-faq-questionand-plus">
                <p className="white-txt-at-faq-sect">
                  Does Square have tools for complex businesses?
                </p>
                <p className="white-txt-at-faq-sect extralarge-font">+</p>
              </div>
              <div className="cntr-btwn-lines-at-faq-sec"></div>
              <div className="flx-fr-faq-questionand-plus">
                <p className="white-txt-at-faq-sect">
                  Does Square have tools for complex businesses?
                </p>
                <p className="white-txt-at-faq-sect extralarge-font">+</p>
              </div>
              <div className="cntr-btwn-lines-at-faq-sec"></div>
              <div className="flx-fr-faq-questionand-plus">
                <p className="white-txt-at-faq-sect">
                  Does Square have tools for complex businesses?
                </p>
                <p className="white-txt-at-faq-sect extralarge-font">+</p>
              </div>
              <div className="cntr-btwn-lines-at-faq-sec"></div>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

{
  /* <div className="card1">
<img src="http://www.pngmart.com/files/5/Pyramids-PNG-HD.png" alt="" />
<h3>Pyramids</h3>
<p>
  The Egyptian pyramids are ancient pyramid-shaped masonry structures
  located in Egypt. As of November 2008, sources cite either 118 or 138
  as the number of identified Egyptian pyramids.
</p>
</div>

<div className="card2">
<img
  src="https://wallazee.global.ssl.fastly.net/images/dynamic/items/383-1024.png"
  alt="Eiffel Tower"
/>
<h3>Statue of Liberty</h3>
<p>
  The Statue of Liberty is a colossal neoclassNameical sculpture on
  Liberty Island in New York Harbor in New York City, in the United
  States.
</p>
</div>

<div className="card3">
<img
  src="http://pluspng.com/img-png/download-taj-mahal-png-images-transparent-gallery-advertisement-1185.png"
  alt=""
/>
<h3>Taj Mahal</h3>
<p>
  The Taj Mahal is an ivory-white marble mausoleum on the south bank of
  the Yamuna river in the Indian city of Agra. It was commissioned in
  1632 by the Mughal emperor.
</p>
</div> */
}
