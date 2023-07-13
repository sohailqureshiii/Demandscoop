import Image from "next/image";
import React from "react";
3;
import Demand from "../../public/logo-demand.jpeg";

const Footer = () => {
  return (
    <>
      <div className="footer-background">
        <div className="flx-for-ftr-bc">
          <div className="header-layout-at-main-section flx-in-four-comlumas">
            <div className="box-fr-">
              <Image
                src={Demand}
                width={150}
                height={150}
                alt="Picture of the author"
              />
            </div>
            <div className="pad-top-fr-match-logo">
              <h2 className="service-header-at-footer-section">Services</h2>
              <h3 className="secound-her-hthree-hdr-at-footer">
                Sales Services
              </h3>
              <p className="services-and-other-kinks-at-footer">
                Appointment Generation
              </p>
              <p className="services-and-other-kinks-at-footer">BANT Leads</p>
              <p className="services-and-other-kinks-at-footer">
                Account Based Marketing
              </p>
              <p className="services-and-other-kinks-at-footer">
                SQL - Sales Qualified Leads
              </p>
              <p className="services-and-other-kinks-at-footer">
                MQL - Marketing Qualified Leads
              </p>
              <p className="services-and-other-kinks-at-footer">
                B2B Demand Generation
              </p>
            </div>
            <div className="pad-top-fr-match-logo">
              <h2 className="service-header-at-footer-section">Resources</h2>
              <p className="services-and-other-kinks-at-footer">White Paper</p>
              <p>E-Books</p>
            </div>
            <div className="pad-top-fr-match-logo">
              <h2 className="service-header-at-footer-section">Contact Us</h2>
              <p className="services-and-other-kinks-at-footer">
                {" "}
                info@demandscoop.com
              </p>
              <p className="services-and-other-kinks-at-footer">
                DemandScoop Pvt. Ltd.
                <br /> 444 Alaska Avenue Suite #BPN742 Torrance,
                <br />
                CA 90503 USA
              </p>
            </div>
          </div>
        </div>
        <div className="footer-background flx-cntrkjsj">
          <div className="black-bkrnd-for-foooter">
            <div className="line-htnsk"> </div>
            <div className="flx-fr-faq-questionand-plus">
              <p className="text-for-footer-bottom-at">
                United States (English)
              </p>
              <p className="text-for-footer-bottom-at">+</p>
            </div>
            <div className="line-htnsk"> </div>
            <p className="end-text-for-website-deamnd">
              © 2022 DemandScoop - B2B marketing agency created and manged by
              B2B Digital Marketing
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
