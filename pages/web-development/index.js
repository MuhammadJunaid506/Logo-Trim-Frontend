import { Col, Row, Typography, Tabs } from "antd";
import { useRouter } from "next/router";
import { FaLayerGroup } from "react-icons/fa";
import { BsFolderSymlink } from "react-icons/bs";
import { MdOutlineDraw } from "react-icons/md";
import ClientLayout from "../../components/ClientLayout";
import MainButton from "../../components/MainButton";
import ContactForm from "../../components/ContactForm";
import CustomBanner from "../../components/CustomBanner";
import SliderBanner from "../../components/SliderBanner";
import AssuranceGrid from "../../components/AssuranceGrid";
import InfoSection from "../../components/infoSection";
import Companies from "../../components/Comapnies";
import TwoColSection1 from "../../components/TwoColSection1";
import Portfolio from "../../components/Portfolio";
import TabsComponent from "../../components/Tabs";
import TabsComponent2 from "../../components/Tabs";
import Plans from "../../components/Plans";
import TwoColumnFeatures from "../../components/TwoColumnFeatures";
import Reviews from "../../components/Reviews";

const WebDevelopment = () => {
  const router = useRouter()


  return (
    <ClientLayout
    head={{
      title: "Web development",
      description:
        "Want to enhance your brand visibility online? Hire Logo Magicians for professional logo design services and kick start your business growth today. It helps convert your brand icon ideas into reality, making it stand out from the rest.",
    }}
  >
    <CustomBanner
      height={700}
      title={
        <>
          Get Ahead of the Competition with 
          <span style={{ color: "#fe1f07" }}>
            {" "}
            Modern Custom Website Development Solutions{" "}
          </span>
        </>
      }
      titleLevel={1}
      text={
        "Unique and impressive website is what all people do; our teams will craft website beyond it and consider SEO latest updates so that your site get the highest rankings."
      }
      titleStyles={{
        marginTop: "5px",
        marginBottom: "10px",
        fontWeight: 900,
        fontSize: "55px",
        fontFamily:"Teko",
        color: "black",
      }}
      image={"/images/web_development_03.png"}
      bg={"/images/Background.png"}
      imageDimentions={[500, 500]}
      imageStyles={{ width: "400px"  }}
      buttons={
        <MainButton
          style={{
            fontSize: 14,
            height: "auto",
            marginTop: 8,
            color: "white",
            border: "1px solid white",
            backgroundColor: "#fe1f07",
            borderRadius: "25px",
            padding: "0px 8px",
            height: "auto",
            fontWeight: 800,
            padding: "15px 35px",
            minWidth: 50,
          }}
          onClick={() => router.push("/contact")}
        >
          Get Free Consultant
        </MainButton>
      }
    />

    <TwoColSection1
      image={"/images/web_development_07.png"}
      imageDimentions={[785, 442]}
      title={
        <>
          Customized Web Development Services <br/>Welcome to leading custom
          <span style={{ color: "#fe1f07" }}>
            {" "}
             web Development Company in the USA
          </span>{" "}
         
        </>
      }
      // subtitle={"Professional Designs, Unique Minds"}
      titleStyles={{
        marginTop: "0px",
        marginBottom: "0px",
        fontWeight: 900,
        fontSize: "50px",
        color: "black",
        fontFamily:""
      }}
      imageStyles={{ maxWidth: "550px" }}
      multitext={[
        "Are you browsing all over Google for an affordable website development company in the US? Now, you can assume your search touches the end; you are where you should be, and this is LogoTrims. Get a comprehensive online solution package for your business needs, like website design, web development, custom software development, and more.",
        `"Commitment to excellence" is our slogan for delivering a unique and world-class website to our clients in the US and abroad with steady professionalism. Our extensive portfolio spans corporate websites, eye-catching glimmer web designs, reliable web hosting, effective web marketing, SEO optimization, and cutting-edge E-commerce solutions.`,
        "Our professional web developer, solidifying our position as one of the best web development companies in the USA, have garnered accolades in the digital domain. LogoTrim, with its cost-effective packages; your trusted partner for all your web-related needs; drive your business to success.",
        "Moreover, our ongoing support and maintenance can ensure your website remains up-to-date and works with no issue. LogoTrim also plays a key role to give high website traffic and boost your online visibility, as it is popular for its expertise in SEO and marketing strategies."
      ]}

      list={["High Quality in affordable prices", "100% Satisfaction Guaranteed", "100% Unique Design", "24/7 Customer Support", "100% Money Back Guarantee"]}
    />

    <CustomBanner
      height={400}
      title={
        <>
         Connect with our world-class IT experts for <br /> Front-end development services
        </>
      }
      titleLevel={2}
      onlyText={true}
      text={
        <>
        Whether you`re an established company, enterprise, or a fledgling startup, we can help you create a quality website, to market your product and services
        </>
      }
      titleStyles={{
        marginTop: "5px",
        marginBottom: "10px",
        fontWeight: 900,
        textAlign: "left",
        fontSize: "50px",
        color: "white",
      }}
      textStyles={{
        textAlign: "left",
        fontSize: "16px",
        color: "white",
      }}
      bg={"/images/web_development_10.png"}
      imageDimentions={[500, 500]}
      imageStyles={{ width: "450px" }}
      buttons={
        <MainButton
          style={{
            fontSize: 14,
            height: "auto",
            marginTop: 10,
            color: "green",
            border: "1px solid green",
            backgroundColor: "white",
            padding: "0px 8px",
            height: "auto",
            fontWeight: 800,
            padding: "15px 35px",
            minWidth: 50,
          }}
        >
          Contact Us
        </MainButton>
      }
    />

    <TabsComponent2
    
      tabs={[
        {
          key: "Front End Web Development",
          name: "Front End Web Development",
          content: (
            <TwoColSection1
              title={
                <>
                  <span style={{ color: "#fe1f07" }}>
                  Front End Web Development
                  </span><br/>
                  Get our Best Front End Web Development services in the USA
                </>
              }
              onlyText
              titleColor={"black"}
              textColor={"black"}
              background={"transparent"}
              multitext={[
                "The front end of the web is the user-facing part; it encompasses everything visible during website use, like fonts, colours, sliders, and menus. Front-end web developers with broad knowledge of jQuery web, AngularJS, HTML5, CSS3, leSS framework and Bootstrap can handle the user interface code and create immersive user experiences.",
                "As a leading UI UX front-end web development company, we assist businesses in crafting engaging, user-centric digital products. Our commitment is to provide the best Front End Web Development services that enhance businesses' online presence and help them achieve their goals."
               
              ]}
              list={[
                "Top-notch UI/UX Solutions",
                "Proficient Front-End Development Skills",
                "Engaging User Interface Design",
                "Effective Online Presence Amplification",
              ]}
              buttons={
                <MainButton
                  style={{
                    fontSize: 14,
                    marginTop: 10,
                    color: "white",
                    backgroundColor: "black",
                    padding: "0px 8px",
                    borderRadius: 10,
                    border: "none",
                    fontWeight: 800,
                    padding: "10px 30px",
                    minWidth: 50,
                  }}
                >
                  Contact Us
                </MainButton>
              }
            />
          ),
        },
        {
          key: "Back End Web Development",
          name: "Back End Web Development",
          content: (
            <TwoColSection1
              title={
                <>
                  <span style={{ color: "#fe1f07" }}>
                  Back End Web Development  
                  </span>{" "}<br/>
                  Get our Best Back End Web Development services in the USA
                </>
              }
              onlyText
              titleColor={"black"}
              textColor={"black"}
              background={"transparent"}
              multitext={[
                "The back end is the cornerstone of any software or the most crucial component. Despite its hidden nature from users, it operates the website, laying the basis for a reliable user experience and the ability to deliver as users anticipate.",
                "At LogoTrim, our Back End Web Development services in the US cater to the needs of startups and large enterprises. Our Back End Web Developers outdo in a broad scope of technologies (Node.js, Python, C#, PHP, Java, ASP.NET/ASP.NET MVC and JavaScript), so we stay up-to-date with the latest trends and stick to best practices to bring your product to market faster; complete your plans effectively; and increase your revenue. Partner with us now.",
              ]}
              list={[
                "Expertise in Back-End Technologies",
                "Robust Data Management Solutions",
                "Seamless Integration Capabilities",
                "Scalable Architecture Design",
              ]}
              buttons={
                <MainButton
                  style={{
                    fontSize: 14,
                    marginTop: 10,
                    color: "white",
                    backgroundColor: "black",
                    padding: "0px 8px",
                    borderRadius: 10,
                    border: "none",
                    fontWeight: 800,
                    padding: "10px 30px",
                    minWidth: 50,
                  }}
                >
                  Contact Us
                </MainButton>
              }
            />
          ),
        },
        {
          key: "Custom Web Development",
          name: "Custom Web Development",
          content: (
            <TwoColSection1
              title={
                <>
                  <span style={{ color: "#fe1f07" }}>
                  Custom Web Development
                  </span>{" "} <br/>
                  Get our Best Custom Web Development services in the USA
                </>
              }
              onlyText
              titleColor={"black"}
              textColor={"black"}
              background={"transparent"}
              multitext={[
                "At LogoTrim, we're here to make your dream website a reality. Our custom web development is attractive and easy for people to use. Whether a fancy online store, personal website, or social networking website, we craft them that go beyond what you expect. Let us turn your ideas into a fantastic website with our custom web development services for a solid online presence.",
                "Our custom web developers are experts at coding (JSP, PHP, ASP.NET, Google Flutter, JQuery, HTML5, SQL Server, MongoDB, AJAX and MySQL); create, connect, and change your website to make it exactly how you want it to be. Call us now.",
              ]}
              list={[
                "Expertise in Various Coding Languages and Frameworks",
                "Tailored Website Solutions for Diverse Needs",
                "Seamless Integration of Features and Functionality.",
                "Customization to Meet Specific Client Requirements",
              ]}
              buttons={
                <MainButton
                  style={{
                    fontSize: 14,
                    marginTop: 10,
                    color: "white",
                    backgroundColor: "black",
                    padding: "0px 8px",
                    borderRadius: 10,
                    border: "none",
                    fontWeight: 800,
                    padding: "10px 30px",
                    minWidth: 50,
                  }}
                >
                  Contact Us
                </MainButton>
              }
            />
          ),
        },
        {
          key: "Web Portal Developement",
          name: "Web Portal Development",
          content: (
            <TwoColSection1
              title={
                <>
                  <span style={{ color: "#fe1f07" }}>
                  Web Portal Development
                  </span>{" "} <br/>
                  Get our Best Web Portal Development services in the USA
                </>
              }
              onlyText
              titleColor={"black"}
              textColor={"black"}
              background={"transparent"}
              multitext={[
                "Our Web Portal Development service is a complete solution to design and establish a safe and user-friendly online space for your clients, partners, and workers. Web portals with self-service features for specific users grant them access to services, products, information, and communication tools; secure online platforms with easy-to-use interfaces.",
                "LogoTrim, a web portal development company skilled in full-stack web technologies, can support creating web portals tailored to your needs for engaging with your audience, whether they are customers, partners, or employees. Our web portal developer aims for speedy results; covering all aspects of web portal development, with a prototype in 3 - 10 weeks.",
              ]}
              list={[
                "Seamless Integration of User-Friendly Features",
                "Customized Portals for Targeted Audience Engagement",
                "Expertise in Full-Stack Web Technologies",
                "Expedited Prototyping and Deployment Process",
              ]}
              buttons={
                <MainButton
                  style={{
                    fontSize: 14,
                    marginTop: 10,
                    color: "white",
                    backgroundColor: "black",
                    padding: "0px 8px",
                    borderRadius: 10,
                    border: "none",
                    fontWeight: 800,
                    padding: "10px 30px",
                    minWidth: 50,
                  }}
                >
                  Contact Us
                </MainButton>
              }
            />
          ),
        },
        {
          key: "CMS & E-Commerce Website",
          name: "CMS & E-Commerce Website",
          content: (
            <TwoColSection1
              title={
                <>
                  <span style={{ color: "#fe1f07" }}>
                  CMS & E-Commerce Website
                  </span>{" "} <br/>
                  Get our Best E-Commerce Website Development services in the USA
                </>
              }
              onlyText
              titleColor={"black"}
              textColor={"black"}
              background={"transparent"}
              multitext={[
                "With the rise of digital marketing, E-Commerce websites are now a way to success, and there is a high demand for them. Conversely, Content Management System or CMS is an affordable web-based application, a solid platform where accessible content is updated, edited, and published on your website; it finds extensive use in building E-Commerce websites.",
                "LogoTrim has been a reliable digital service provider in the E-Commerce sector for years. Our CMS and E-Commerce web developer team has a long experience managing almost all industries E-Commerce websites. LogoTrim is a highly dependable CMS and e-commerce website development company based in the US. When you choose our E-Commerce website development services for E-Commerce shopping cart enhancements, you'll immediately see a major increase in online sales.",
              ]}
              list={[
                "Seamless CMS Integration for Content Management",
                "Customized E-Commerce Solutions",
                "Proven Track Record of Boosting Online Sales",
                "Extensive Experience Across Various Industries",
              ]}
              buttons={
                <MainButton
                  style={{
                    fontSize: 14,
                    marginTop: 10,
                    color: "white",
                    backgroundColor: "black",
                    padding: "0px 8px",
                    borderRadius: 10,
                    border: "none",
                    fontWeight: 800,
                    padding: "10px 30px",
                    minWidth: 50,
                  }}
                >
                  Contact Us
                </MainButton>
              }
            />
          ),
        },
      ]}
    />

    <InfoSection title={"Get Tailored Web Development That Matches Your Brand"} subtitle={"Are you Ready to Get Your Business The Perfect Direction"}  />
    <Portfolio
      title={
        <>
          A Glimpse Of Our Recent  {" "}
          <span style={{ color: "#fe1f07" }}> Professional Custom Web Development</span>
        </>
      }
      subtitle="At LogoTrim, we deliver the best Custom Web Development services in the US, immediately leaving a unique impression on your clients. "
      columns={3}
      titleStyles={{
        fontSize: 50,
        fontWeight: 700,
        marginBottom: 0,
        textTransform: "uppercase",
      }}
      category={"Webs"}
      buttons={
        <>
          <MainButton
            style={{
              marginTop: 10,
              marginBottom: 15,
              fontSize: 17,
              padding: "8px 40px",
              height: "auto",
              fontWeight: 500,
            }}
            onClick={() => router.push("/portfolio")}
          >
            View All Projects
          </MainButton>
        </>
      }
    />

   
  </ClientLayout>
  );
}
export default WebDevelopment
