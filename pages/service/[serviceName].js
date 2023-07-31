import ContactUsForm from "@/Components/ContactusForm/ContactUsForm";
import Footer from "@/Components/Footer/footer";
import HomeNavabr from "@/Components/Navbar/HomePageNavbar";
import { useRouter } from "next/router";
import localFont from "next/font/local";
import Link from "next/link";
const myFont = localFont({ src: "../../Fonts/Montserrat-Medium.ttf" });

const serviceDetails = [
  {
    url: "account-based-marketing",
    Bysome:
      "“Account-Based Marketing (ABM) is all about building better quality relationships; the ROI will follow.” – Andy Bacon, B2B Marketing",
    title: "Account Based Marketing",
    secoundt:
      "Account-Based Marketing (ABM) is a targeted approach that tailors personalized marketing efforts to engage high-value accounts. With data-driven insights, it fosters stronger customer relationships, aligns sales and marketing, and boosts ROI. Embrace ABM for greater business success",
    paratitle: "Unlocking Success with Account-Based Marketing (ABM)",
    paraone:
      "Looking to capture the attention of buyers? In an economy that thrives on engagement and interaction—new channels, technologies, and strategies are the need of the hour. You might also have to navigate through an excess of information, increased buyer expectations, and staying relevant in the eyes of your competitors.",
    paratwo:
      "This is when you’ll realise that an Account-Based Marketing (ABM) strategy can work wonders for your business.",
    parathree:
      "With an ABM strategy, you can enhance your ROI, focus on more conversions and leads, and drive attributed revenue.",
    parafour:
      "At AdvertMarketers, we craft ABM strategies that nurture, interact, and engage with prospects. Our ABM programs are solid wherein the prospects are bound to convert into leads, and create growth opportunities for your business. We incorporate the ideal market principles of inbound marketing and ABM to focus on growth with target accounts for B2B enterprises.",
    parafive:
      "From effective ABM strategies, ABM agility to ABM management, optimization, and execution—we map out the entire process for you.",
    parasix:
      "Using personalized campaigns targeted at specific accounts, we help you increase your conversion rates. Focusing on the right content, communication, and contextual marketing, we identify and target the accounts that offer you the most value.",
    paraseven: "Explore potential accounts",
    paraeight: "Plan and execute strategy",
    paranine: "Offer relevant content",
    paraten: "Offer relevant content",
    parattewlve: "Convert prospects into sales",
    parathirteen: "",
    parafourteen: "",
    parafiteen: "",
    paraeleven: "",
  },

  {
    url: "content-marketing",
    Bysome:
      "“Content marketing is the gap between what brands produce and what consumers actually want.” – Michael Brenner, CEO at Marketing Insider Group",
    title: "Content Marketing",
    secoundt:
      "A powerful strategy for B2B success. Engage target audiences with valuable content, build trust, and drive brand awareness. Blog posts, videos, infographics, and social media content position you as an industry leader. Boost connections, generate leads, and achieve growth. Embrace content marketing now!",
    paratitle: "Retain audiences with relevant content",
    paraone:
      "Content can be a game-changer, which is why the demand for quality content is on the rise. Content has proven to garner more organic traffic and can prove to be a backbone in accelerating your business forward.",
    paratwo:
      "As the focus gradually shifts towards content, the importance of content marketing is also at an all-time high. Since the content marketing scope is huge, you need a content strategy to assist you through the way. With the right content marketing strategy, you can promote your company’s content, and offer your clients relevant content that matches their business needs.",
    parathree:
      "AdvertMarketers assists organizations and businesses to test, build, and optimize content marketing programs that boost qualified leads and drive better sales opportunities. From a content marketing perspective, our service identifies, educates, converts, and supports B2B buyers. Through proper awareness and consideration, we market content to the buyers in a way that differentiates our clients from their competitors.",
    parafour:
      "You can build and strengthen your customer base by publishing, maintaining, and sharing consistent content. By syndicating content, we introduce more traffic to your website.",
    parafive:
      "We begin by testing the content to understand the effectiveness of the copy with a specific buyers’ group. By crafting the right message, our content not only educates and inspires buyers, but it also promotes a strategy that emphasises buyers’ requirements.",
    parasix: "Create relevant content",
    paraseven: "Distribute content the right way",
    paraeight: "Manage content accurately",
    paranine: "Report content that’s engaging",
    paraten: "",
    paraeleven: "",
  },
  {
    url: "event-promotion",
    Bysome:
      "“Planning without action is futile, action without planning is fatal.” – Cornelius Fichtner",
    title: "Event Promotion",
    secoundt:
      "Unlock the potential of your events with strategic event promotion! Our tailored approach combines SEO keywords, social media outreach, and targeted email campaigns to maximize attendance and engagement. From corporate conferences to product launches, we ensure your events get the spotlight they deserve. Drive conversions and create lasting impressions with our proven event promotion techniques. Don't miss out on the opportunity to make your next event a resounding success. Contact us now!",
    paratitle: "Get the word out about your event",
    paraone:
      "Planning, preparing, organizing, setting up, and managing events is a whole new ball game in itself. But amidst all this, if you don’t focus on promoting your event, then you cannot expect to receive the desired result that you expect.",
    paratwo:
      "When you don’t have the accurate event promotion techniques in place, you may witness a major dip in your potential attendees. Your event needs to proper recognition and this is exactly where AdvertMarkerters come into the picture.",
    parathree:
      "While you plan your event, we let you blow off some steam by taking care of the digital marketing aspects of your event. From preparing an attendees list, sponsors, vendors, to other aspects of an event—we take care of everything.",
    parafour:
      "With our Event Promotion service, you can explore explosive ways of leveraging your event data to sell out your event. You can introduce a refresher into your event promotion techniques with creative strategies.",
    parafive:
      "Cutting through the noise, we implement the right technology to promote your events by engaging in seminars, webinars, webcasts, and live telecasts. Once you implement our event promotion techniques, you’re bound to generate revenues through our best quality event promotional techniques.",
    parasix: "Discover interested attendees",
    paraseven: "Send them invites for the event",
    paraeight: "Confirm guests availability",
    paranine: "Follow-up with them post the event",
    paraten: "",
    paraeleven: "",
  },
  {
    url: "marketing-qualified-lead",
    Bysome:
      "“You are out of business if you don’t have a prospect.” – Zig Zagler",
    title: "Marketing Qualified Lead (MQL)",
    secoundt:
      "Marketing Qualified Lead (MQL) - Identified via SEO-driven marketing, content engagement, and lead nurturing. Tailor personalized content to target high-potential prospects effectively. Optimize sales funnel, boost marketing ROI, and accelerate customer acquisition. Drive business growth and success with MQLs today!",
    paratitle: "Identify interested prospects swiftly",
    paraone:
      "Being in the B2B arena, Marketing Qualified Lead (MQL) is one of the most talked-about initiatives. But obtaining a good lead is challenging, because sometimes you may find an ideal marketing lead, whereas the other times, you may not have that luck. Instead of burning out, the key here is to bridge the gap.",
    paratwo:
      "When you filter out the best MQLs, you tend to bridge the inconsistencies and focus on building your business.",
    parathree:
      "At AdvertMarketers, we implement our MQL service to identify whether the customer that’s visiting your website and browsing through your content is a marketing qualified lead or not.",
    parafour:
      "This process is not as easy as it sounds, since it requires determining the prospects’ interests, analysing the pages and content that’s viewed, and capture and score every prospect with the help of the content collected.",
    parafive:
      "Through our service, you can sieve through prospects to derive at only those candidates who have expressed an interest in your business by engaging with the content. Through our MQL service, we give your sales and marketing team candidates that perfectly fit the bill.",
    parasix:
      "We ensure that we play all our cards right to transform a prospect to a lead and ensure that we give your business the boost it deserves.",
    paraseven: "Generate awareness",
    paraeight: "Explore prospect’s interest levels",
    paranine: "Monitor content consumption",
    paraten: "Convert interested prospects",
    paraeleven: "",
  },
  {
    url: "appointment-generation",
    Bysome:
      "“Be excited to utilize new tools and processes – keep up with change and see yourself grow with the business.”",
    title: "Appointment Generation",
    secoundt:
      "Generating appointments are never easy. We achieved the end goal by adopting multiple strategies. Our experienced appointment setting experts comprehend the triggers that produce quality leads and meetings that your sales team will acknowledge and close",
    paratitle:
      "Introduce your business to prospects & turn into interested buyers",
    paraone:
      "With the B2B sales structure becoming more challenging and the changing sales dynamics, sales cycles have become competitive, unpredictable, and influential.",
    paratwo:
      "To stay relevant and sustain their business, salespeople need to go beyond just sales; they need to focus on building customer relationships. Juggling between their primary work and other administrative tasks can leave your sales team with a packed calendar, very little time for their actual tasks, and lesser revenue generation.",
    parathree:
      "Hence, an appointment generation is what can resolve your sales team’s issues and give them a breather amidst numerous tasks.",
    parafour:
      "Our appointment generation service focus on the right activities that help you generate new business leads. This gives clients more time to spend with qualified leads and understand their requirements.",
    parafive:
      "With our appointment generation service, we gain prospects’ trust and introduce them to your business, which in turn, increases lead generation.",
    parasix:
      "Our appointment generation service presents customised solutions that improve your B2B appointment generation efforts, boost conversions, and allows you to seal the deal at a faster pace.",
    paraseven:
      "Being the foundation of a great sales process, appointment generation can take your business to the next level.",
    paraeight: "Contact prospects",
    paranine: "Book an appointment",
    paraten: "Pitch your ideas to them",
    paraeleven: "Create sales conversions",
  },
  {
    url: "bant-lead",
    Bysome:
      "“No matter what you do, don’t pass leads directly to the sales team.” – Jon Miller, Marketo",
    title: "BANT Lead",
    secoundt:
      "Opt for BANT Leads to maximize success. Using Budget, Authority, Need, and Timeline criteria, qualify prospects efficiently for high-potential opportunities. Improve lead quality, optimize sales efforts, and achieve higher ROI. Choose BANT Leads for targeted success.",
    paratitle: "Identify leads worth pursuing",
    paraone:
      "How do you qualify that a lead opportunity in front of you is worth it or not? By now, you must be aware that not all leads are created equal. You need to ensure that your sales team prioritises its efforts and utilises its time in the right direction and in the best way possible.",
    paratwo:
      "So, how can your sales team ensure that it’s pursuing the right leads?",
    parathree:
      "AdvertMarketers utilise the BANT framework which is the best way to determine how qualified a sales prospect is, and whether your sales team should focus on them or not.",
    parafour:
      "BANT stands for Budget, Authority, Need, and Timeline, and is a technique that guides you on which leads should be focused upon more. With BANT, we help you analyse and answer the tough questions.",
    parafive:
      "We search the BANT leads as per your budget, authority, need, and timeline, wherein you get the answers to:",
    parasix: "B: Budget – ‘How much are your prospects willing to spend?’",
    paraseven: "A: Authority—‘Who are your primary decision-makers?’",
    paraeight:
      "N: Need— ‘Are you capable of solving a problem for your prospects?’",
    paranine: "T: Timeline—‘What is the timeline to resolve the problem?’",
    paraten:
      "By getting the answers to the following questions, you can effectively determine if a particular prospect is going to be a good fit and worthy of persuasion. This way, you save a lot of time by not wasting your hours on the wrong prospects.",
    paraeleven: "Evaluate your budget",
    parattewlve: "Examine the authority",
    parathirteen: "Understand their needs",
    parafourteen: "Consider the timelines",
    parafiteen: "",
  },
  {
    url: "confirmed-call-back",
    Bysome:
      "“There’s no easy way out of a bad call, but to keep moving on to the next, and anticipate success.” ",
    title: "Confirmed-Call-Back",
    secoundt:
      "B2B engagement with Confirmed-Call-Back. Boost customer satisfaction, enhance lead generation, and increase sales conversions. Experience real-time communication for transformative business growth. Connect us now!",
    paratitle: "Seal the deal through confirmation calls",
    paraone:
      "According to research, almost 48% of salespersons don’t follow up with their prospective clients.",
    paratwo:
      "For a company, this will be a pressing issue since not following up with prospects means a loss in revenue.",
    parathree:
      "So, is your team really serious in following-up with prospects? How often do you call back your customers or follow up with them in the right way?",
    parafour:
      "It’s important to remember that managing clients and following-up with them are two sides of the same coin. While dealing with prospects is vital, following-up with them is as crucial as handling them.",
    parafive:
      "You may think that you’ve had a very fruitful session with the prospect and you’ve sealed the deal, but it may be quite the opposite of it. Then might have second thoughts about whether what you’re offering them is actually what they want.",
    parasix:
      "Hence, this where AdvertMarketers Confirmed Call Back service would help. A Confirmed Call Back. Since connecting with every potential prospect is the need of the hour, our CCL feature allows your sales team to get in touch with prospects who wish to receive a call back to get more details about your products.",
    paraseven:
      "Being the CCL experts, we ensure that our follow-up calls are persuasive but not pushy. We aim to give specific instructions and avoid being vague, which gives prospects more clarity about your products and services.",
    paraeight: "Discover potential accounts",
    paranine: "Confirm their availability",
    paraten: "Schedule a meeting",
    paraeleven: "Convert prospects to leads",
    parattewlve: "",
    parathirteen: "",
    parafourteen: "",
    parafiteen: "",
  },
  {
    url: "sales-qualified-lead",
    Bysome:
      "“You don’t close a sale; you open a relationship if you want to build a long-term, successful enterprise.” – Patricia Fripp",
    title: "Sales Qualified Lead",
    secoundt:
      "Your Path to Higher Conversions. With our SQL service, you'll receive high-quality leads that are ready to make a purchase. Save time and effort by focusing on leads with genuine interest, leading to increased sales and revenue. Choose SQL for maximum ROI and business growth.",
    paratitle: "Convert potential leads to customers",
    paraone:
      "Your product or service might be the best in the business but if it doesn’t have the right leads that take an interest in your product, then it’s pointless. Because at the end of the day, the more qualified leads you generate, the more your business prospers and the more revenue you garner.",
    paratwo:
      "In this competitive market landscape, you need to gain a competitive advantage and expand your business to stay ahead of the curve. This is where a Sales Qualified Lead (SQL) can help you. A prospect crafted by the marketing team and vetted by the sales team, SQL can steer your sales process further.",
    parathree:
      "Through AdvertMarketers, we find you SQLs that possess the right requirements and have displayed a certain level of interest in your company’s functioning and features. Once they fit all our criteria, they answer some of the most basic questions and schedule an appointment with one of your sales team members.",
    parafour:
      "Since AdvertMarketers has been offering SQLs to numerous clients, we have a penchant for discovering the best SQLs for a business that leads to conversions. We have a custom business contact list, accurate database, high-quality data, multi-national contacts, which makes our SQL services one of the most sought-after services.",
    parafive: "Explore sales leads",
    parasix: "Map their readiness",
    paraseven: "Boost them in the sales funnel",
    paraeight: "Make the conversion happen",
    paranine: "",
    paraten: "",
    parattewlve: "",
    parathirteen: "",
    parafourteen: "",
    parafiteen: "",
  },
  {
    url: "b2b-list-building",
    Bysome:
      "“Approach each customer with the idea of helping them solve a problem or achieve a goal, not of selling a product or service.” – Brian Tracy",
    title: "B2B List Building",
    secoundt:
      "Unlock Your Business Potential. Our service delivers targeted and up-to-date contact lists, connecting you with your ideal clients. By choosing B2B List Building, you gain a competitive edge, streamline marketing efforts, and increase conversion rates. Elevate your outreach and expand your network with precision and efficiency.",
    paratitle: "Get your desired prospects list",
    paraone: "Why create a B2B list?",
    paratwo:
      "One of the most underrated but highly influential tasks, the right B2B contact list can transform your business for the best. When you have an active business running, you cannot afford to have unresponsive data. Hence, a B2B list offers you a list of prospects whom you can connect with to generate and nurture great leads.",
    parathree:
      "With a B2B list, you are aware of your target audience, who you have contacted in the past, and which prospects have shown an interest in your product. You need an effective B2B contact list when you’re pitching an irresistible sales deal.",
    parafour:
      "One of the most underrated but highly influential tasks, the right B2B contact list can transform your business for the best. When you have an active business running, you cannot afford to have unresponsive data. Hence, a B2B list offers you a list of prospects whom you can connect with to generate and nurture great leads.",
    parafive:
      "B2B list building allows you to customise your list by industry, phone number, email ids, and reach out to your customers and nurture the interactions.",
    parasix:
      "AdvertMarketers collates a list of prospects for you. We start by emphasising on one of the most crucial elements which is, identifying your ideal customers. We utilise search engines, business directories, websites, and professional networking sites, to search for ideal prospects. Accordingly, we start building a solid B2B contact list for your business. We ensure that we obtain the prospects’ email address and phone number. After we get their contact details, we also verify it from our end.",
    paraseven: "Identify potential target groups",
    paraeight: "Create a B2B list",
    paranine: "Engage prospects via email marketing",
    paraten: "Enhance conversion rates",
    paraeleven: "",
  },
  {
    url: "database-cleansing",
    Bysome:
      "“The problem of siloed data and its impact is well documented, yet B2B marketers continue to neglect data quality issues even when it’s costing them their jobs.” – Raviv Turner",
    title: "Database Cleansing",
    secoundt:
      "Optimize Your Data for Success. Our service ensures accurate, updated, and reliable data. By choosing Database Cleansing, you eliminate duplicates, errors, and outdated information, enhancing campaign effectiveness. Make informed decisions, improve customer relationships, and boost overall business performance with a clean and refined database.",
    paratitle: "Rectifying and restoring data that’s relevant",
    paraone:
      "Look around you, the world is transforming at a rapid pace. What was relevant yesterday is no more relevant today. And what is relevant today may easily lose its relevance tomorrow.",
    paratwo:
      "So, the only way to keep your business moving ahead is to stay in pace with the changing times. When you wish to keep your business relevant, then why should data take a backseat?",
    parathree:
      "In today’s time, data plays a vital role in any business. Hence, you need to have precise and clear data at all times. This is where data cleansing can prove to be beneficial for your organisation.",
    parafour:
      "At AdvertMarketers, we go the distance in cleaning and validating your existing B2B details and lists, and keep updating it regularly. This allows your business to accelerate your marketing efforts and increase your ROI.",
    parafive:
      "If you have siloed or scattered data, we can repair and resurrect your data. We filter our unnecessary data, retrieving only what’s necessary, validating the right information. Our data cleansing service reformats your business addresses, de-dupe your existing data to search and remove any duplicates, along with sourcing new and additional information like recent contact details, email addresses, phone numbers, etc.",
    parasix:
      "By data cleansing, you’ll receive cleaner business data that eliminates waste and offers better investment returns. You can not only gain enhanced business profiling but you also obtain a personalised report that gives you clear details about ways to improve and augment your data.",
    paraseven: "Collect the right data",
    paraeight: "Eliminate junk data",
    paranine: "Focus on data validity",
    paraten: "Obtain desired output",
    paraeleven: "",
    parattewlve: "",
    parathirteen: "",
    parafourteen: "",
    parafiteen: "",
  },
  {
    url: "install-database",
    Bysome:
      "“The goal is to turn data into information, and information into insight.” – Carly Fiorina",
    title: "Install Database",
    secoundt:
      "Seamless Integration for Efficiency. Our service offers expert installation of a robust database system tailored to your needs. Choose Install Database to enhance data management, streamline processes, and boost productivity. Enjoy reliable data storage, quick access, and data security, empowering your business with a solid foundation for growth.",
    paratitle: "Build contacts with companies that are similar to yours",
    paraone:
      "How can you gain an edge over your competitors? How can you better identify and analyse your prospects’ requirements? In a competitive business world like ours, it’s always good to keep innovating and staying relevant.",
    paratwo:
      "And by installing an accurate database, you’ll have all the critical information you need to assess your competition and your customers.",
    parathree:
      "AdvertMarketers helps you keep a tab on the enterprises that produce the same products as yours to realise what their exact needs are. Our collaboration with reputed sources allows us to get accurate details and information.",
    parafour:
      "By evaluating the database of countless users, partners, competitors, we help you attain insights that can take your business to greater heights.",
    parafive:
      "When you understand the companies that produce the same product as yours or offer the same service like yours, it allows you to be well-informed. Our install database service delves deeper to provide you a detailed account of a buyer’s profile, their interests, and preferences, which gives you a window of opportunity to devise new opportunities and upsell or cross-sell that converts a prospect into customers who showcase and purchase your products and service",
    parasix: "Analyse competitors",
    paraseven: "Build database on products",
    paraeight: "Verify data through sources",
    paranine: "Offer high-quality database",
    paraten: "",
    parattewlve: "",
    parathirteen: "",
    parafourteen: "",
    parafiteen: "",
  },
  {
    url: "email-marketing",
    Bysome:
      "“Email is possibly the greatest owned media channel for brands.” – Joe Pulizzi",
    title: "Email Marketing",
    secoundt:
      "Amplify Your Business Reach. Our service harnesses the power of targeted email campaigns to engage, nurture, and convert leads. Choose Email Marketing for cost-effective, measurable, and personalized communication. Drive sales, build brand loyalty, and stay connected with your audience, maximizing your marketing efforts for exceptional results.",
    paratitle: "Develop relationships with prospects through email marketing",
    paraone:
      "With the advent of new technologies and new ways of communication, is email still relevant?",
    paratwo:
      "Despite contrary beliefs, email isn’t dead; it’s one of those marketing tools that when used well, can be highly effective. The popularity of email marketing is ever-growing and doesn’t seem to diminish anytime soon. As per research, email marketing is said to be the most preferred online marketing channel for marketers.",
    parathree:
      "If you’re looking for a consistent and clear communication channel, email marketing can help you in that sphere. You can easily reach out to your target audience in an effective manner and with minimal efforts through email marketing.",
    parafour:
      "At AdvertMarketers, we draft intelligent and innovative email campaigns that are interactive and engaging. For B2B businesses, we go the distance in drafting email campaigns that are customised to meet our clients’ requirements. Through our email marketing efforts, you can focus on escalating your company’s sales, accelerate the sales opportunities obtained from sales leads, and enhance your ROI.",
    parafive:
      "The email marketing services that we offer ensure success. We build your brand’s reputation, which helps in retaining your existing customers as well as attracting new ones. By implementing new email marketing strategies and concepts, we help you stay ahead of the curve, and ensure increased ROI, while you promote and sell your products or service.",
    parasix: "Market your products",
    paraseven: "Generate leads",
    paraeight: "Boost brand awareness",
    paranine: "Build relationships",
    paraten: "",
    paraeleven: "",
    parattewlve: "",
    parathirteen: "",
    parafourteen: "",
    parafiteen: "",
  },
  {
    url: "market-research",
    Bysome:
      "“The aim of market research is to know and understand the customer so well, the product or service sells itself.” – Peter Drucker",
    title: "Market Research",
    secoundt:
      "Unveiling Growth Opportunities. Our service empowers your business with valuable insights into consumer preferences, industry trends, and competitor analysis. Choose Market Research to make informed decisions, mitigate risks, and identify untapped markets. Stay ahead of the competition, optimize strategies, and drive sustainable growth with data-driven intelligence.",
    paratitle:
      "Keep pace with the emergence of new customer trends and preferences",
    paraone:
      "How do you know where your brand stands in the market? How does your brand rank against your competitors? What are the best ways to identify potential challenges and overcome them? How can you identify opportunities and make the most of it?",
    paratwo:
      "These are relevant questions that you need to answer if you wish your brand to make it to the top. And with the help of market research, you can get answers to all these questions. The right market research can help you obtain accurate information about the target group, audience, and customers.",
    parathree:
      "At AdvertMarketers, we believe that intelligence is a key factor when it comes to decision-making. With the help of our thoroughly devised market research strategies, you can identify potential growth opportunities and build a competitive advantage that recognises potential customers in the marketplace.",
    parafour:
      "We undertake qualitative as well as quantitative research services that implement the best methodologies to gather useful market insights. Our comprehensive and conclusive market research allows businesses to grow within the existing market and tap new markets. Our market research experts know how to read between the lines and obtain actionable insights through custom market research data. We implement superior market research techniques to acquire accurate information that our customers need in order to make the right decisions for their enterprise.",
    parafive:
      "By emphasising every market segment, we help B2B enterprises identify and understand their potential target audiences.",
    parasix: "Identify new markets, trends, and opportunities",
    paraseven: "Respond to new challenges",
    paraeight: "Enhance your decision-making skills",
    paranine: "Stay ahead of the competition",
    paraten: "",
    paraeleven: "",
    parattewlve: "",
    parathirteen: "",
    parafourteen: "",
    parafiteen: "",
  },
  {
    url: "seo-services",
    Bysome:
      "“SEO is like a resume. You polish it so you have your best foot forward.” – Matt Cutts, Google",
    title: "SEO Services",
    secoundt:
      "Elevate Your Online Presence. Our service enhances your website's visibility, driving organic traffic and ranking higher on search engines. Choose SEO Services to boost brand awareness, increase conversions, and gain a competitive edge. Experience long-term growth and ROI as our experts optimize your online success.",
    paratitle: "Let your brand rank high in the popularity metre",
    paraone:
      "You’ve just created a website for your brand. But just having a website might not bring you business; a right and rigid SEO strategy can. However, not everyone realises the importance of the right SEO strategy, which is why they don’t opt for the best SEO services for their brand.",
    paratwo:
      "But what they don’t know is that 93% of all online experiences start with a search engine and 75% of people like to stay on the first page of their search. If this doesn’t reiterate the importance of SEO, then we don’t know what would.",
    parathree:
      "In this day and age, SEO is not only about ranking high in the popularity charts. It’s also about being identified when it matters that most to your customers.",
    parafour:
      "The SEO services offered at AdvertMarketers ensure that your brand has a notable online presence and your potential customers take a note of it. With the best creative team and experienced SEO team, we help you boost your website’s ranking and gain the attention of the audiences.",
    parafive:
      "The two things that an SEO service should offer is efficiency and impact, and AdvertMarketers SEO services offer all this and more. Our SEO experts research and include the right keywords into your content, which helps you gain the right traffic onto your website and positively impacts your bottom line.",
    parasix: "Studying your brand carefully",
    paraseven: "Identifying and including the right keywords",
    paraeight: "Attracting organic traffic to your website",
    paranine: "Generating ROI",
    paraten: "",
    paraeleven: "",
    parattewlve: "",
    parathirteen: "",
    parafourteen: "",
    parafiteen: "",
  },
];

const ServicePage = ({ service }) => {
  if (!service) {
    return <>Service Not Found</>;
  }

  return (
    <>
      <div style={myFont.style}>
        <div className="Main-layout-for-dmdscoop-for-contact-us-creen">
          <div className="background-litj-bl-in-front-for-contact-us-creen">
            <HomeNavabr />
            <div className="flx-fr-center-layout-at-cnt aling-bottomkdnc">
              <div className="widtgh-fr-dms-center-layout">
                <h1 className="header-at-contact-us-screen-layout">
                  {service.title}
                </h1>
                <p className="para-at-contact-us-screen-layout">
                  {service.secoundt}
                </p>
                <p className="para-at-contact-for-mobile-only-at-sevice">
                  {service.secoundt}
                </p>

                <Link href="/Contactus">
                  <button
                    // className="lets-cnt-btn-at-main-layout"
                    className="contac-us-page-btn-cta-sjm margin-left-zero-at-btn"
                  >
                    Lets Connect
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flx-fr-center-layout-at-cnt  pad-top-low">
          <div className="widtgh-fr-dms-center-layout">
            <h2 className="header-at-service-page-secound-header ">
              We convert your ideas into workable solutions
            </h2>
            <div className="flx-fr-center-layout-at-cnt">
              <p className="para-at-service-page-secound-para">
                {service.Bysome}
              </p>
            </div>
            <div className="flx-fr-center-layout-at-cnt">
              <div className="contain-of-both-header-and-contact-form gap-property">
                <div>
                  <h3 className="extralagreg-font">{service.paratitle}</h3>
                  <p className="font-nd-lnth-andkj padd-top-at-service-page-in-sect">
                    {service.paraone}
                  </p>
                  <p className="font-nd-lnth-andkj padd-top-at-service-page-in-sect">
                    {service.paratwo}
                  </p>
                  <p className="font-nd-lnth-andkj padd-top-at-service-page-in-sect">
                    {service.parathree}
                  </p>
                  <p className="font-nd-lnth-andkj padd-top-at-service-page-in-sect">
                    {service.parafour}
                  </p>
                  <p className="font-nd-lnth-andkj padd-top-at-service-page-in-sect">
                    {service.parafive}
                  </p>
                  <p className="font-nd-lnth-andkj padd-top-at-service-page-in-sect">
                    {service.parasix}
                  </p>
                  <p className="font-nd-lnth-andkj padd-top-at-service-page-in-sect">
                    {service.paraseven}
                  </p>
                  <p className="font-nd-lnth-andkj padd-top-at-service-page-in-sect">
                    {service.paraeight}
                  </p>
                  <p className="font-nd-lnth-andkj padd-top-at-service-page-in-sect">
                    {service.paranine}
                  </p>
                  <p className="font-nd-lnth-andkj padd-top-at-service-page-in-sect">
                    {service.paraten}
                  </p>
                  <p className="font-nd-lnth-andkj padd-top-at-service-page-in-sect">
                    {service.paraeleven}
                  </p>
                </div>
                <div>
                  <ContactUsForm />
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
        <div className="pad-top-low">
          <Footer />
        </div>
      </div>
    </>
    // <div>
    //   <h1>{service.name}</h1>
    //   <p>{service.description}</p>
    // </div>
  );
};

export async function getServerSideProps(context) {
  const { serviceName } = context.query;

  const selectedService = serviceDetails.find(
    (item) => item.url === serviceName
  );

  return {
    props: {
      service: selectedService || null,
    },
  };
}

export default ServicePage;
{
  /* <button className="contact-us-small-btn-at-generation-page">
                Contact Us
              </button> */
}
{
  /* <button>
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
              </button> */
}
