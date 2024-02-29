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

const AppDesign = () => {
  const router = useRouter()


  return (
    <ClientLayout
    head={{
      title: "App design",
      description:
        "Sleek, responsive app designs and transparent navigation ensure high conversion and easy adoption with our mobile app design service. Augment user visits, form a strong brand personality, maximize app functionality, and surge revenue.",
    }}
  >
    <CustomBanner
      height={700}
      title={
        <>
          Get A Minimalist And Lustrous 
          <span style={{ color: "#fe1f07" }}>
            {" "}
            Mobile App Designs{" "}
          </span>
        </>
      }
      titleLevel={1}
      text={
        "Sleek, responsive app designs and transparent navigation ensure high conversion and easy adoption with our mobile app design service. Augment user visits, form a strong brand personality, maximize app functionality, and surge revenue."
      }
      titleStyles={{
        marginTop: "5px",
        marginBottom: "10px",
        fontWeight: 900,
        fontSize: "55px",
        fontFamily:"Teko",
        color: "black",
      }}
      image={"/images/App_design_03.png"}
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
      image={"/images/App_design_07.png"}
      imageDimentions={[785, 442]}
      title={
        <>
          <span style={{ fontSize: "30px", }}>UI and UX Mobile app Designs</span><br/>
          Give Rich Experience With Our <br/>
          <span style={{ color: "#fe1f07" }}>
            {" "}
            Mobile App Design Agency-Built App
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
        fontFamily:"",
        lineheight: "1.0px"  
      }}
      imageStyles={{ maxWidth: "400px" }}
      multitext={[
        "As a large-scale mobile app design company, LogoTrim combines industry-deep expertise with individualized project approaches. Our app designers connect carefully with your SMEs and establish project requirements and details to lay the basis for your mobile app designs.",
        "Then, with a careful project analysis and roadmap, our affordable app designers create user-centric layouts and wireframes for smooth navigation and functionality on mobile screens. Our UX experts carry out complete beneficial testing to improve the user experience.",
        "In UI design, our mobile app agency balances the app's aesthetic with your brand identity or collaborates to build a visually clear-cut and distinguishable mobile app. Customer fulfillment is paramount; we use their feedback to improve our app. Our mobile application designers keep improving the look and feel of the app based on what people experience, so it works well and is easy to use, reducing any snags when user uses it"
      ]}

      list={["Increased conversion rate", "100% UI and UX Design", "Stronger brand building", "24/7 Customer Support",]}
    />

    <CustomBanner
      height={400}
      title={
        <>
         Your Success That`s Our Business
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
      bg={"/images/App_design_10.png"}
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
          key: "User Interface Design services",
          name: "User Interface Design services",
          content: (
            <TwoColSection1
              title={
                <>
                  <span style={{ color: "#fe1f07" }}>
                  User Interface Design services
                  </span><br/>
                Modernize Your Site with Professional App Designing
                </>
              }
              onlyText
              titleColor={"black"}
              textColor={"black"}
              background={"transparent"}
              multitext={[
                "Are you struggling with cumbersome screens? Our mobile app design agency specializes in making apps both beautiful and user-friendly. Our user interface design experts excel in converting websites and apps into happy moments when using them. Apps designed by our mobile app designer online very quickly guide users toward their purpose. ",
                "Enhance user trust, lift conversions, and foster brand affinity with functional and visually likable interfaces. So, bid farewell to confusing interfaces and welcome intuitive navigation with our user interface design services to increase user engagement. Gain a competitive UI advantage for your brand. Let's make your digital experience remarkable."
               
              ]}
              list={[
                "User-Centered Design Philosophy",
                "Tailored Solutions for User Objectives",
                "Data-Driven Prototyping Methods",
                "Exemplary UX to Foster Brand Loyalty",
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
          key: "User Experience Design services",
          name: "User Experience Design services",
          content: (
            <TwoColSection1
              title={
                <>
                  <span style={{ color: "#fe1f07" }}>
                  User Experience Design services
                  </span><br/>
                  Redefine Your App's Presence with Design Expertise
                </>
              }
              onlyText
              titleColor={"black"}
              textColor={"black"}
              background={"transparent"}
              multitext={[
                "Create experiences that people want to use, not just endure. Our UX design services delve deeply into users' demands and behaviors, going beyond the surface. Our custom app designers know your audience's objectives, frustrations, and driving forces and can relate to them. By conducting research, analyzing data, and using iterative prototyping, our app design firm build such user interfaces designs that are engaging, intuitive, and natural.",
                "Think of using your app joyfully rather than grudgingly. Let our UX specialists lead the way as they create experiences that surpass users' expectations while satisfying their needs. Our app design agency improves user retention and exalts your brand to win over lost visitors and convert them into devoted followers." ]}
              list={[
                "Professional UI/UX Design Solutions",
                "Transformative App Design Expertise",
                "Seamless Navigation and Intuitive Functionality",
                "Elevate User Engagement and Brand Affinity",
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
          key: "Wireframing and Prototyping app design services",
          name: "Wireframing and Prototyping app design services",
          content: (
            <TwoColSection1
              title={
                <>
                  <span style={{ color: "#fe1f07" }}>
                  Wireframing and Prototyping app design services
                  </span><br/>
                  Transform Your App Experience with Expert Design Innovation
                </>
              }
              onlyText
              titleColor={"black"}
              textColor={"black"}
              background={"transparent"}
              multitext={[
                "Get our proficient wire-framing and prototyping services to save the guesswork and receive clarity. Our app design agency turns your ideas into interactive models, testing functionality, revealing client flows, and finding each detail with no flaw using the most powerful techs. A preferred option for target users is an app that sings before it’s built, with an engaged interface and smooth navigation, and we give that.",
                "Creativity is your way. When building an app, we let ingenuity and technology work together for great wire-framing and prototyping. Get the chance to use dynamic design ideas supplied by our app designers to accomplish the satisfied actuality of your app idea!",
              ]}
              list={[
                "Precision Wire framing",
                "Engaging Interface Design",
                "User-Centric Approach",
                "Tech-Powered Solutions",
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

    <InfoSection title={"Spark Innovation with Exceptional App Design"} subtitle={"Are you Ready to Get Your Business The Perfect Direction"}  />
    <Portfolio
      title={
        <>
          Take A View Of Our Historical  {" "}
          <span style={{ color: "#fe1f07" }}> Mobile App Design and Past Client Projects </span>
        </>
      }
      subtitle="Take a View of our historical mobile App Design and Past client projects
      At LogoTrim, we win the hearts of our clients with intuitive, sleek, and user-friendly mobile app design. Creating an everlasting impression is the goal of our mobile app design service when dealing with them.
      "
      columns={3}
      titleStyles={{
        fontSize: 50,
        fontWeight: 700,
        marginBottom: 0,
        textTransform: "uppercase",
      }}
      category={"Apps"}
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
export default AppDesign
