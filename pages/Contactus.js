import ContactUsForm from "@/Components/ContactusForm/ContactUsForm";
import Footer from "@/Components/Footer/footer";
import HomeNavabr from "@/Components/Navbar/HomePageNavbar";
import React from "react";
import localFont from "next/font/local";
const myFont = localFont({ src: "../Fonts/Montserrat-Medium.ttf" });
const Contactus = () => {
  return (
    <div style={myFont.style}>
      <div className="Main-layout-for-dmdscoop-for-contact-us-creen">
        <div className="background-litj-bl-in-front-for-contact-us-creen">
          <HomeNavabr />
          <div className="flx-fr-center-layout-at-cnt">
            <div className="contain-of-both-header-and-contact-form">
              <div>
                <h1 className="header-at-contact-us-screen-layout">
                  We’re Here to Help
                </h1>
                <p className="para-at-contact-us-screen-layout">
                  Unlock the door to possibilities! Connect with our team of{" "}
                  experts <br /> and open a world of innovative solutions. Don't
                  let questions linger <br />
                  we're just a click or call away. Reach out now, and let's
                  embark on a <br />
                  journey of collaboration, turning your visions into reality.{" "}
                  <br /> Your ideas matter, and together, we'll forge a path
                  towards success. <br /> Embrace the future, and let's create
                  something extraordinary together. <br /> Contact us today!
                </p>
              </div>
              <ContactUsForm />
            </div>
          </div>
          <div className="displayflexat-ns">
            <div className="center-layout-at-cont-wid">
              <h3 className="header-three-at-contactus-layout">
                ​Additional Resources
              </h3>
              <p className="para-for-address-in-contact-layout">
                USA Address - DemandScoop Pvt. Ltd. 444 Alaska Avenue Suite
                <br />
                #BPN742 Torrance, CA 90503 USA
              </p>
              <p className="para-for-address-in-contact-layout">
                India Address - Kalyani Nagar West Avenue, Marigold complex
                <br />
                Maharashtra 411014, IN
              </p>
              <p className="para-for-address-in-contact-layout">
                Dubai Address - 87556 - Hamsah A Building, (Ansar Gallery
                Building - Al
                <br />
                Karama - Dubai - United Arab Emirates
              </p>
              <p className="para-for-address-in-contact-layout">
                UK Address - Suite 10, 44-46 Elmwood ave, Belfast. 444 Elmwood
                Ave,
                <br />
                Belfast, BT9 6AZ, United Kingdom Phone - 00442895438995
              </p>
              <p className="para-for-address-in-contact-layout">
                Singapore Address - 30 cecil st, Sigapore 049712
              </p>
              <p className="para-for-address-in-contact-layout">
                info@demandscoop.com
              </p>
            </div>
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
