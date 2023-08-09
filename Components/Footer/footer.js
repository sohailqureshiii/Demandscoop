import Image from "next/image";
import React from "react";
import Demand from "../../public/logo-demand.jpeg";
import BigDemand from "../../public/DemandscoopMain-logo.png";
import Facebook from "../../public/facebook.svg";
import LinkedIn from "../../public/linkedin.svg";
import Twitter from "../../public/social.svg";
import Phone from "../../public/phone-call.svg";
import IndianFlag from "../../public/india.png";
import DubaiFlag from "../../public/flag.png";
import USAFlag from "../../public/united-states.png";
import UKFlag from "../../public/united-kingdom.png";
import SAP from "../../public/SAP-Business-One.png";
import MICRO from "../../public/MS-gold-partner-logo.png";
import ISO from "../../public/ISO_Logo.png";
import CMMI from "../../public/CMMI-Article-Pic.png";
import GOOGLEP from "../../public/Google_Partner.png";

const Footer = () => {
  return (
    <>
      <div className="footer-background">
        <div>
          <div>
            <div className="flx-in-for-footer-section-sr-top">
              <Image
                src={BigDemand}
                width={350}
                height={90}
                alt="Picture of the author"
              />
            </div>
            <div className="flx-in-for-footer-section-sr-top">
              <p className="end-text-for-website-deamnd">
                © 2022 DemandScoop - B2B marketing agency created and manged by
                B2B Digital Marketing
              </p>
            </div>
            <div className="flx-in-for-footer-section-sr-top gap-in-prosodn">
              <Image
                src={Twitter}
                width={20}
                height={20}
                alt="Picture of the author"
              />
              <Image
                src={Facebook}
                width={20}
                height={20}
                alt="Picture of the author"
              />{" "}
              <Image
                src={LinkedIn}
                width={20}
                height={20}
                alt="Picture of the author"
              />{" "}
            </div>
          </div>
          <div className="flx-in-for-footer-section-sr-top">
            <div className="border-for-footer-bottom-section"></div>{" "}
          </div>
        </div>

        <div className="flx-for-ftr-bc">
          <div className="header-layout-at-main-section low-oadding-at-footer-section flx-in-four-comlumas">
            <div className="pad-top-fr-match-logo">
              <div className="flx-for-img-and-office-country">
                <h2 className="service-header-at-footer-section">USA OFFICE</h2>
                <Image
                  src={USAFlag}
                  width={30}
                  height={30}
                  alt="Picture of the author"
                />
              </div>
              <p className="services-and-other-kinks-at-footer">
                DemandScoop Pvt. Ltd. 444 Alaska Avenue Suite #BPN742 Torrance,
                CA 90503 USA
              </p>
            </div>
            <div className="pad-top-fr-match-logo">
              <div className="flx-for-img-and-office-country">
                <h2 className="service-header-at-footer-section">
                  INDIA OFFICE
                </h2>
                <Image
                  src={IndianFlag}
                  width={30}
                  height={30}
                  alt="Picture of the author"
                />
              </div>
              <p className="services-and-other-kinks-at-footer">
                Kalyani Nagar West Avenue, Marigold complex Maharashtra 411014,
                IN
              </p>
            </div>
            <div className="pad-top-fr-match-logo">
              <div className="flx-for-img-and-office-country">
                <h2 className="service-header-at-footer-section">
                  DUBAI OFFICE
                </h2>
                <Image
                  src={DubaiFlag}
                  width={30}
                  height={30}
                  alt="Picture of the author"
                />
              </div>
              <p className="services-and-other-kinks-at-footer">
                87556 - Hamsah A Building, Ansar Gallery Building - Al Karama -
                Dubai - United Arab Emirates
              </p>
            </div>
            <div className="pad-top-fr-match-logo">
              <div className="flx-for-img-and-office-country">
                <h2 className="service-header-at-footer-section">UK OFFICE</h2>
                <Image
                  src={UKFlag}
                  width={30}
                  height={30}
                  alt="Picture of the author"
                />
              </div>
              <p className="services-and-other-kinks-at-footer">
                Suite 10, 44-46 Elmwood ave Belfast. 444 Elmwood Ave Belfast,
                BT9 6AZ, United Kingdom
              </p>
            </div>
            <div className="pad-top-fr-match-logo">
              <h2 className="service-header-at-footer-section">SERVICES</h2>
              <p className="services-and-other-kinks-at-footer">
                Demand Generation
              </p>
              <p className="services-and-other-kinks-at-footer">
                Sales Development
              </p>
              <p className="services-and-other-kinks-at-footer">
                Database Services
              </p>
              <p className="services-and-other-kinks-at-footer">
                Digital Marketing
              </p>
            </div>
          </div>
        </div>
        <div className="footer-background no-padd-sdkfn flx-cntrkjsj">
          <div className="black-bkrnd-for-foooter">
            <div className="flx-in-wirsikd-djk">
              <p>Job & Internship :</p>
              <Image
                src={Phone}
                width={10}
                height={10}
                alt="Picture of the author"
              />
              <p>+91 97305 58065</p>
            </div>
            <div className="flx-in-wirsikd-djk">
              <p>Resource Hiring:</p>
              <Image
                src={Phone}
                width={10}
                height={10}
                alt="Picture of the author"
              />
              <p>+91 973055 8065</p>
            </div>
            <div className="flx-in-wirsikd-djk">
              <p>Bussiness Inquiry: </p>
              <Image
                src={Phone}
                width={10}
                height={10}
                alt="Picture of the author"
              />
              <p>+91 80871 44552</p>
            </div>
          </div>
        </div>
        <div className="flx-in-for-footer-section-sr-top">
          <div className="border-for-footer-bottom-section"></div>{" "}
        </div>
        <div className="dis-flx-in-last-end-compo-sectio-sk">
          <Image
            src={SAP}
            width={200}
            height={50}
            alt="Picture of the author"
          />
          <Image
            src={MICRO}
            width={200}
            height={50}
            alt="Picture of the author"
          />
          <Image
            src={ISO}
            width={120}
            height={90}
            alt="Picture of the author"
          />
          <Image
            src={CMMI}
            width={120}
            height={80}
            alt="Picture of the author"
          />
          <Image
            src={GOOGLEP}
            width={120}
            height={80}
            alt="Picture of the author"
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
{
  /* <div className="line-htnsk"> </div> */
}
