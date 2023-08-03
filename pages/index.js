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
import { Open_Sans } from "next/font/google";
import localFont from "next/font/local";
import { Slider } from "@/Components/SliderofPartners/Slider";
import { CountUp } from "use-count-up";

// const inter = Inter({ subsets: ["latin"] });
// const openSans = Open_Sans({ subsets: ["latin"] });
const myFont = localFont({ src: "../Fonts/Montserrat-Medium.ttf" });
export default function Home() {
  const [show, setShow] = useState(false);

  // FAQ----
  const [faq1, setFaq1] = useState(false);
  const [faq2, setFaq2] = useState(false);
  const [faq3, setFaq3] = useState(false);
  const [faq4, setFaq4] = useState(false);
  const [faq5, setFaq5] = useState(false);

  return (
    <>
      {/* <Head>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        <script>AOS.init();</script>
      </Head> */}

      <div
        // style={openSans.style}
        style={myFont.style}
        // className="Main-layout-for-dmdscoop"

        className="main-without--backfround"
      >
        {" "}
        <HomeNavabr />
        <div
          //  className="background-litj-bl-in-front"
          className="main-without--backfround"
        >
          <div className="displayflexat-ns ">
            <div className="header-layout-at-main-section">
              <h1
                //  className="hone-large-title-fr-hdr-in-main-layout animate-charcter"
                className="Main-first-header-at-home-screeen-h-one-tag animate-charcter"
              >
                Your Success, Our Expertise
                <br />
                Unstoppable Growth.
              </h1>
              <p
                //  className="para-at-main-layout-atnew-sec"
                className="para-secound-heaser-at-home-page-layout"
              >
                Acquire the essential B2B data and software, enabling seamless
                connections and conversions with your most valuable prospects,
                all integrated within a single operating system.
              </p>
              <div className="displayflexat-ns disapalu-none-at-mobile-setion">
                <button
                  //  className="lets-cnt-btn-at-main-layout"
                  className="get-a-call-back-cta-at-home-page-layout"
                  onClick={() => setShow(true)}
                  style={myFont.style}
                >
                  Get a callback
                </button>
                <Link href="/Contactus">
                  <button
                    // className="lets-cnt-btn-at-main-layout"
                    className="contac-us-page-btn-cta-sjm"
                    style={myFont.style}
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
                  style={myFont.style}
                >
                  Get a callback
                </button>
                <Link href="/Contactus">
                  <button
                    // className="lets-cnt-btn-at-main-layout"
                    className="lets-connect-atmobile-view-sect"
                    style={myFont.style}
                  >
                    Lets Connect
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <Modal visible={show} onClose={() => setShow(false)}></Modal>
          <Slider />
          {/* <div className="displayflexat-ns">
            <div className="header-layout-at-main-section paddinglow-atsdj margin-btm-at-mobview">
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
          </div> */}
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
                At Demanscoop we stand out from other B2B lead generation
                companies with our unparalleled expertise, data-driven
                strategies, and exceptional ROI-focused results.
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
                  <Link href="/Contactus">
                    <p className="get-start-btn-at-btm blueclr-of-fnt-get-strd">
                      Get Started
                    </p>
                  </Link>
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
                  <Link href="/Contactus">
                    <p className="get-start-btn-at-btm difffclr-of-fnt-get-strd">
                      Get Started
                    </p>
                  </Link>
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
                  <Link href="/Contactus">
                    <p className="get-start-btn-at-btm pinksibkclr-of-fnt-get-strd">
                      Get Started
                    </p>
                  </Link>
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
                Your Best Choice!
              </h2>
              {/* -----------------  */}
              <div className="displayflexat-ns">
                <div className="displayflexat-ns">
                  <button
                    style={myFont.style}
                    className="Btn-at-service-sec-in-hm-main-layout left-radious"
                  >
                    Demand Generation
                  </button>
                  <button
                    style={myFont.style}
                    className="Btn-at-service-sec-in-hm-main-layout"
                  >
                    Sales Development
                  </button>
                  <button
                    style={myFont.style}
                    className="Btn-at-service-sec-in-hm-main-layout"
                  >
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
                            Account Based Marketing: Personalized, Profitable,
                            Powerful
                          </p>
                          <p>
                            <Link href="/Contactus">
                              <button
                                style={myFont.style}
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
                            A powerful strategy for B2B success.
                          </p>
                          <p>
                            <Link href="/Contactus">
                              <button
                                style={myFont.style}
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
                            Unlock the potential of your events with strategic
                            event promotion!
                          </p>
                          <p>
                            <Link href="/Contactus">
                              <button
                                style={myFont.style}
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
                            Generating appointments are never easy. We achieved
                            the end goal by adopting multiple strategies.
                          </p>
                          <p>
                            <Link href="/Contactus">
                              <button
                                style={myFont.style}
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
                            Opt for BANT Leads to maximize success. Choose BANT
                            Leads for targeted success.
                          </p>
                          <p>
                            <Link href="/Contactus">
                              <button
                                style={myFont.style}
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
                            Amplify Your Business Reach.Choose Email Marketing
                            for cost-effective, measurable.
                          </p>
                          <p>
                            <Link href="/Contactus">
                              <button
                                style={myFont.style}
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
                  {/* We’re here to help. If you need a hand <br />
                  switching from your current solution, have
                  <br />
                  questions about why Demandscoop is right for your business, or
                  want support getting started,
                  <br />
                  please talk to a member of our team.
                  <br /> */}
                  Seamless B2B support for your success. Personalized
                  assistance, timely resolutions, and dedicated expertise.
                  Partner with us for confident and efficient business
                  operations.
                </p>
                <p className="display-at-mobile-section-only-in-sbjfs">
                  Seamless B2B support for your success. Personalized
                  assistance, timely resolutions, and dedicated expertise.
                  Partner with us for confident and efficient business
                  operations.
                </p>
                <Link href="/Contactus">
                  <button
                    className="Btn-fr-cntc-us-sect-cntc-us"
                    style={myFont.style}
                  >
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
              <div
                className="flx-fr-faq-questionand-plus"
                onClick={() => setFaq1(!faq1)}
              >
                <p className="white-txt-at-faq-sect">
                  What is Demand Generation, and how can it benefit my B2B
                  business?
                </p>
                {faq1 ? (
                  <p className="white-txt-at-faq-sect extralarge-font">-</p>
                ) : (
                  <p className="white-txt-at-faq-sect extralarge-font">+</p>
                )}
              </div>
              {faq1 ? (
                <p className="faq-answer-at-faq-sectionsk">
                  Demand generation is a marketing strategy aimed at creating
                  awareness and interest in your products or services among
                  potential B2B customers. It involves various tactics like
                  content marketing, email campaigns, social media, and SEO to
                  attract leads and drive them through the sales funnel.
                </p>
              ) : null}
              <div className="cntr-btwn-lines-at-faq-sec"></div>
              <div
                className="flx-fr-faq-questionand-plus"
                onClick={() => setFaq2(!faq2)}
              >
                <p className="white-txt-at-faq-sect">
                  How can Sales Development Services enhance my B2B lead
                  generation efforts?
                </p>
                {faq2 ? (
                  <p className="white-txt-at-faq-sect extralarge-font">-</p>
                ) : (
                  <p className="white-txt-at-faq-sect extralarge-font">+</p>
                )}
              </div>
              {faq2 ? (
                <p className="faq-answer-at-faq-sectionsk">
                  Sales Development Services focus on identifying and qualifying
                  potential leads through outbound prospecting and personalized
                  communication. These services help in warming up prospects,
                  understanding their needs, and setting appointments for your
                  sales team to close deals more effectively.
                </p>
              ) : null}
              <div className="cntr-btwn-lines-at-faq-sec"></div>
              <div
                className="flx-fr-faq-questionand-plus"
                onClick={() => setFaq3(!faq3)}
              >
                <p className="white-txt-at-faq-sect">
                  What are Database Services in the context of B2B marketing,
                  and why are they essential?
                </p>
                {faq3 ? (
                  <p className="white-txt-at-faq-sect extralarge-font">-</p>
                ) : (
                  <p className="white-txt-at-faq-sect extralarge-font">+</p>
                )}
              </div>
              {faq3 ? (
                <p className="faq-answer-at-faq-sectionsk">
                  Database services involve maintaining and updating a clean,
                  accurate, and up-to-date database of potential B2B customers
                  and leads. This database is crucial for targeted marketing
                  campaigns, personalized communications, and effective lead
                  nurturing, ultimately improving your conversion rates and ROI.
                </p>
              ) : null}
              <div className="cntr-btwn-lines-at-faq-sec"></div>
              <div
                className="flx-fr-faq-questionand-plus"
                onClick={() => setFaq4(!faq4)}
              >
                <p className="white-txt-at-faq-sect">
                  How can Digital Marketing benefit my B2B business, and what
                  specific strategies are employed in this field?
                </p>
                {faq4 ? (
                  <p className="white-txt-at-faq-sect extralarge-font">-</p>
                ) : (
                  <p className="white-txt-at-faq-sect extralarge-font">+</p>
                )}
              </div>
              {faq4 ? (
                <p className="faq-answer-at-faq-sectionsk">
                  Digital marketing encompasses various online marketing
                  strategies like search engine optimization (SEO), content
                  marketing, pay-per-click (PPC) advertising, social media
                  marketing, email marketing, and more. These strategies help
                  B2B businesses reach their target audience, generate leads,
                  and increase brand visibility and credibility in the digital
                  space.
                </p>
              ) : null}
              <div className="cntr-btwn-lines-at-faq-sec"></div>
              <div
                className="flx-fr-faq-questionand-plus"
                onClick={() => setFaq5(!faq5)}
              >
                <p className="white-txt-at-faq-sect">
                  What metrics should I track to measure the effectiveness of my
                  B2B marketing and sales efforts?
                </p>
                {faq5 ? (
                  <p className="white-txt-at-faq-sect extralarge-font">-</p>
                ) : (
                  <p className="white-txt-at-faq-sect extralarge-font">+</p>
                )}
              </div>
              {faq5 ? (
                <p className="faq-answer-at-faq-sectionsk">
                  To gauge the success of your B2B marketing and sales
                  campaigns, track metrics such as lead conversion rate,
                  customer acquisition cost (CAC), customer lifetime value
                  (CLV), return on investment (ROI), click-through rates (CTR),
                  website traffic, and engagement on various digital channels.
                  These metrics provide valuable insights into the performance
                  and efficiency of your marketing strategies and help in making
                  data-driven decisions.
                </p>
              ) : null}
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

// In the fast-paced world of B2B,
// our dedicated support team is here to ensure your business
// never misses a beat. With a deep understanding of your unique
//  needs, we offer timely and personalized assistance, resolving
//  challenges swiftly. From technical queries to account management,
//   we've got you covered. Partner with us and experience seamless support,
// empowering your B2B endeavors with confidence and success.
