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

const WebDesign = () => {
  const router = useRouter()


  return (
    <ClientLayout
    head={{
      title: "Web design",
      description:
        "Want to enhance your brand visibility online? Hire Logo Magicians for professional logo design services and kick start your business growth today. It helps convert your brand icon ideas into reality, making it stand out from the rest.",
    }}
  >
    <CustomBanner
      height={700}
      title={
        <>
          OUR AFFORDABLE WEBSITE DESIGN
          <span style={{ color: "#fe1f07" }}>
            {" "}
             THAT LIFT SEO PERFORMANCE{" "}
          </span>
        </>
      }
      titleLevel={1}
      text={
        "Our custom web designer can mix a stunning, user-friendly design with a strong focus on lead generation improvement and Increase SEO performance to wow your competitors and clients."
      }
      titleStyles={{
        marginTop: "5px",
        marginBottom: "10px",
        fontWeight: 900,
        fontSize: "55px",
        fontFamily:"Teko",
        color: "black",
      }}
      image={"/images/web_design_03.png"}
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
      image={"/images/web_design_07.png"}
      imageDimentions={[785, 442]}
      title={
        <>
          <span style={{ fontSize: "30px", }}>Our Customized Web Design Services In The US.{" "}</span>
          <br/>
          <span style={{ color: "#fe1f07" }}>
            {" "}
            What makes our Professional Web Design <br/> Company Unique?
          </span>{" "}
          </>
      }
      // subtitle={"Professional Designs, Unique Minds"}
      titleStyles={{
        marginTop: "10px",
        marginBottom: "10px",
        fontWeight: 900,
        fontSize: "50px",
        color: "black",
        fontFamily:""
      }}
      imageStyles={{ maxWidth: "550px" }}
      multitext={[
        "As a primary professional web design company, we stand out due to several distinctive qualities.",
        "At LogoTrim, first; we prioritize lead generation in website development. Amidst the complexities of digital layout and online presence, your business development teams are working to obtain more qualified leads and increase revenue. Every decision and action we take in crafting your website is geared towards this vital goal.",
        "Secondly, our expertise in SEO improvement sets us apart. We agree that a new website must do more than exist; it must be in website's search engine top rankings. Therefore, our professional web designer precisely make website layout in accordance to maximize the overall SEO performance that, in the end, enhance your ROE.",
        "Lastly, our custom web design services allow for HTTPS encryption security; on-page optimization; and quicker loading times with high-quality content that distinguish your brand and raise your overall SEO performance. This is offered at competitive charges, we ensure you that your investment gives large returns. We ensure that you will have practical insights to apply after your consultation with us, free of pressure."
      ]}

      list={["High Quality in affordable prices", "100% Satisfaction Guaranteed", "100% Unique Design", "24/7 Customer Support", "100% Money Back Guarantee"]}
    />

    <CustomBanner
      height={400}
      title={
        <>
         Contact our Web Design agency to provide affordable<br /> web design services in a pocket-friendly price.
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
      bg={"/images/web_design_10.png"}
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
          key: "Static Website",
          name: "Static Website",
          content: (
            <TwoColSection1
              title={
                <>
                  <span style={{ color: "#fe1f07" }}>
                  Expertise in Static Website Development
                  </span><br/>
                  Get our Unique Static web design services in the USA.
                </>
              }
              onlyText
              titleColor={"black"}
              textColor={"black"}
              background={"transparent"}
              multitext={[
                "Are you mindful of the main advantage of a static website? Its fixed content, consisting of 4-5 HTML-coded web pages, consistently presents the same information to all visitors. LogoTrim, one of the prominent players in static web design services in US, has a wide array of solutions for static website development at affordable prices.",
                "However, managing a static website with more than four to five pages can become challenging. Despite this, it's ideal for maintaining a uniform layout across the entire site. For instance, hosting a company catalogue online falls under the static website category. Our team's vast experience on static website design allows for efficiently handling numerous pages; we utilize templates for convenient simultaneous updates across all pages."
               
              ]}
              list={[
                "Increase your traffic",
                "Reach a larger audiance",
                "Increase your visiblity ",
                "Become the top brand .",
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
          key: "Dynamic Website",
          name: "Dynamic Website",
          content: (
            <TwoColSection1
              title={
                <>
                  <span style={{ color: "#fe1f07" }}>
                  Expertise in Dynamic Website Development
                  </span><br/>
                  Get our Unique Dynamic web design services in the USA
                </>
              }
              onlyText
              titleColor={"black"}
              textColor={"black"}
              background={"transparent"}
              multitext={[
                "A dynamic website is a platform where you can implement updates across multiple pages effortlessly and make changes to site navigation in one place, automatically reflecting those changes on all relevant pages.",
                "A dynamic interface allows non-technical users to post and manage various products and services smoothly. Custom dynamic websites have modules like e-commerce, articles, event calendars, blogs, forums, secure logins, and more. Many companies prefer dynamic web design in the US for its independent management, cost-effective maintenance, and compatibility with most search engines.",
                "LogoTrim is the best place to get the best dynamic web design services in the US at affordable prices."
              ]}
              list={[
                "Seamless Content Updates",
                "Effortless Navigation Changes",
                "User-Friendly Product Management",
                "Versatile Module Integration",
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
          key: "Single Page Website",
          name: "Single Page Website",
          content: (
            <TwoColSection1
              title={
                <>
                  <span style={{ color: "#fe1f07" }}>
                  Expertise in Single Page Website Development
                  </span><br/>
                  Get our Unique Single web design services in the USA.
                </>
              }
              onlyText
              titleColor={"black"}
              textColor={"black"}
              background={"transparent"}
              multitext={[
                "Are you aware of what a Single Page Website is? If not, then here we will tell you. It is a website that shows its content linearly and continuously; users just need to scroll down the page to view and learn about your business.",
                "So, if you are in search of developing a website that is easy to use and can show service or product all in a single page, here comes our Single Page web design services; our designer has experience in crafting the best static website in the US.",
                "So, are on a tight budget and want to achieve any specific goal through a custom-made single page web design? Call us."
              ]}
              list={[
                "Linear Content Presentation",
                "Effortless User Navigation",
                "Comprehensive Service/Product Showcase",
                "Budget-Friendly Customization",
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
          key: "Web Portal Design",
          name: "Web Portal Design",
          content: (
            <TwoColSection1
              title={
                <>
                  <span style={{ color: "#fe1f07" }}>
                  Expertise in Web Portal Design for Your Business
                  </span><br/>
                  Get our Unique Web Portal Design Services in the USA
                </>
              }
              onlyText
              titleColor={"black"}
              textColor={"black"}
              background={"transparent"}
              multitext={[
                "LogoTrims is a web design studio that develops custom web portals; align perfectly with your business requirements. Our primary goal is to establish trust-based relationships with brands while meaningfully enhancing their online visibility through unique web portal design; accurately consider your specific needs, KPIs, and target audience as guiding principles throughout the design journey.",
                "At LogoTrims, we master both B2C and B2B web portals. Our specialists build versatile and sophisticated platforms that allow end-users a smooth self-service experience like advanced navigation to locate products or services quickly, fostering customer loyalty. So get the best affordable Web Portal Design Services in the US.",
              ]}
              list={[
                "Tailored Web Portals for Unique Business Needs",
                "Enhancing Online Visibility with Trust-Based Relationships",
                "Versatile Platforms for Seamless B2C and B2B Experiences",
                "Advanced Navigation for Quick Product/Service Access",
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
          key: "Custom Layout Design",
          name: "Custom Layout Design",
          content: (
            <TwoColSection1
              title={
                <>
                  <span style={{ color: "#fe1f07" }}>
                  Expertise in Custom Layout Design for Your Business
                  </span><br/>
                  Get our Custom Layout web design services in the USA
                </>
              }
              onlyText
              titleColor={"black"}
              textColor={"black"}
              background={"transparent"}
              multitext={[
                "For a business to survive and surpass its rivals, it requires an online presence. Right! But, you need to have a solid knowledge of the digital world and what competitors are ruling this market, which seems pretty complicated. So, you can do that with custom layout web design services from LogoTrims.",
                "Our award-winning professional designers will craft a unique and stunning web page design clearly tailored to your brand in just about a month. Say goodbye to generic templates. You'll receive the best and unique custom web designs with us, we ensure you to beat the competition. There are no compromises, just exceptional, one-of-a-kind website design.",
              ]}
              list={[
                "Tailored Brand Representation",
                "Elimination of Generic Templates",
                "Beating the Competition",
                "Exceptional Design Excellence",
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

    <InfoSection title={"Create online presences with stunning websites"} subtitle={"Are you Ready to Get Your Business The Perfect Direction"}  />
    <Portfolio
      title={
        <>
          Discover Our Latest {" "}
          <span style={{ color: "#fe1f07" }}> Web Design Projects </span>
        </>
      }
      subtitle="LogoTrims is willing to give its time and energy to creating excellent web designs that fascinate, engage, and levy a permanent impression on your visitors."
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
export default WebDesign
