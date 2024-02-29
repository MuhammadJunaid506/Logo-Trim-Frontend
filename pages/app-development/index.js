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
      title: "App development",
      description:
        "Want to enhance your brand visibility online? Hire Logo Trim for professional logo design services and kick start your business growth today. It helps convert your brand icon ideas into reality, making it stand out from the rest.",
    }}
  >
    <CustomBanner
      height={700}
      title={
        <>
          Get A Mobile App Development That 
          <span style={{ color: "#fe1f07" }}>
            {" "}
            Can Be The Door To Your Success{" "}
          </span>
        </>
      }
      titleLevel={1}
      text={
        "At LogoTrim, we are masters in building great apps that are well-designed and give great experience to users. Our app development firm is surrounded by industry experts ready to put the app you envision on the table. Maximize your brand value with a scalable app solution with us."
      }
      titleStyles={{
        marginTop: "5px",
        marginBottom: "10px",
        fontWeight: 900,
        fontSize: "55px",
        fontFamily:"Teko",
        color: "black",
      }}
      image={"/images/app_development_03.png"}
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
      image={"/images/app_development_07.png"}
      imageDimentions={[785, 442]}
      title={
        <>
          <span style={{ fontSize: "30px", }}>Empowering Your Vision with our affordable app developers</span><br/>
          Interact and enhance your client's experience 
          <span style={{ color: "#fe1f07" }}>
            {" "}
            with our custom mobile app development company
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
      imageStyles={{ maxWidth: "400px" }}
      multitext={[
        "Finding the right partner is a must to build & keep up your mobile and web app quality. Our app development agency stands out among app development firms within the USA. With custom app solutions tailored to your needs, we prioritize clarity and ease. With our app development company, you can be confident that your vision will convert into a smooth and user-friendly app. ",
        "We are leaders in the IT sector, mostly aware of all industries. Our application development firm brings in creative minds and adopts and invests in tech like Swift, C++, Java, HTML5, and PHP. Our app creation process is smooth, with consistent client coordination to amplify their vision with continuous improvement. Pick the best mobile app development packages that suit you. Collaborate with us and finish your project with our mobile app developers' strong expertise."
      ]}

      list={["High Quality in affordable prices", "100% Satisfaction Guaranteed", "100% Unique Design", "24/7 Customer Support", "100% Money Back Guarantee"]}
    />

    <CustomBanner
      height={400}
      title={
        <>
         Fuel your success with our bespoke app development solutions. 
        </>
      }
      titleLevel={2}
      onlyText={true}
      text={
        <>
        Whether you're a seasoned corporation, a growing enterprise, or a budding startup, we're committed to crafting a stellar app that amplifies your brand.
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
      bg={"/images/app_development_10.png"}
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
          key: "Native app development",
          name: "Native app development",
          content: (
            <TwoColSection1
              title={
                <>
                  <span style={{ color: "#fe1f07" }}>
                  Give new opportunities to your digital presence with our application development firm
                  </span><br/>
                  Craft the smooth user experiences (UX) with our app developers
                </>
              }
              onlyText
              titleColor={"black"}
              textColor={"black"}
              background={"transparent"}
              multitext={[
                "Make the most of our user-friendly app development services in the USA to create smooth and engaging experiences for your audience. Our proficient team of app developers can help you make the native app you dreamed of. With smooth navigation, intuitive user interfaces, or new techs like AI and ML, we can make an app that better your online visibility without any hindrances.",
                "Our built-in native app will for sure balance harmoniously with your brand persona. With our native app development firm, you can achieve a competitive edge in app stores where you can let your users have better exposure to what you do and immersive experiences when buying or using your service. Choose our app development company, which can be your turning point."
               
              ]}
              list={[
                "Raise your brands visibility",
                "Better consumer engagement",
                "Establish a powerful brand identity ",
                "Bring an astounding UI/UX",
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
          key: "Web app development",
          name: "Web app development",
          content: (
            <TwoColSection1
              title={
                <>
                  <span style={{ color: "#fe1f07" }}>
                  Build great Web app With our app developers 
                  </span><br/>
                  A Web app with smooth functionality, extraordinary experience from the app development company
                </>
              }
              onlyText
              titleColor={"black"}
              textColor={"black"}
              background={"transparent"}
              multitext={[
                "Store your service on a remote server and deliver it over the internet to your user with our web app development services across the United States. Our custom mobile app development company have skilled app developers who aim to help clients build an PWA app that is 100% uniquely designed and filled with rich features, like mobile-friendliness, an analytics dashboard, push notifications, and much (much) more.",
                "LogoTrim is skilled at web programming and keeps up with the latest trends to create modern web app solutions that people like. Our app development firm understand that your online presence is not merely a reflection of your company but a potent instrument for capturing and engaging your audiences. So, build scalable web applications with modern web frameworks with us.",
              ]}
              list={[
                "Get A Broader Audience",
                "100% Success Guaranteed",
                "Build An Intuitive User Interface",
                "Guarantee Smooth Functionality",
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
          key: "Cross-platform app development",
          name: "Cross-platform app development",
          content: (
            <TwoColSection1
              title={
                <>
                  <span style={{ color: "#fe1f07" }}>
                  Break down Platform Barriers with a cross-platform app development company
                  </span><br/>
                  Give easy-to-Use experience across all devices to your client with our app developers
                </>
              }
              onlyText
              titleColor={"black"}
              textColor={"black"}
              background={"transparent"}
              multitext={[
                "Cross-platform is a trendy app development approach due to its ability to operate on all platforms simultaneously. Millions of cross-perform apps are roaming in app stores. So you need to be careful when creating for yours. The best awardable option is to get our cross-platform app development services, which will help you smash platform barriers and expand your app's reach to all who can benefit from your product or service.",
                "Our mobile app development company specialty is building applications that function indistinguishably across numerous operating systems and can assure that users have a uniform and easy-to-use experience. Confide in our proficient and affordable app developers who know how to use cross-platform technologies (JavaScript, Ruby, Flutter, Ionic, etc.) and give your users an immersive moment during usage.",
              ]}
              list={[
                "Maximize App Accessibility",
                "Save Time And Resources",
                "Guarantee A constant UX",
                "Arrive A Varied Consumer Base",
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
          key: "Hybrid app development",
          name: "Hybrid app development",
          content: (
            <TwoColSection1
              title={
                <>
                  <span style={{ color: "#fe1f07" }}>
                  Make a handy hybrid app from our app development company
                  </span><br/>
                  Our app developers build a hybrid app that mixes both innovation and flexibility
                </>
              }
              onlyText
              titleColor={"black"}
              textColor={"black"}
              background={"transparent"}
              multitext={[
                "Appreciate the rewards of a unified codebase. Make your app available to your clients regardless of the platform they prefer to use. LogoTrim, a leading custom mobile app development company, can help your business create a hybrid app that will bring consistent functionality and intuitive UI/UX on any device with minor changes.",
                "Our app development agency is committed to building adaptable hybrid apps using web technologies like Flutter, Cordova, Angular, NativeScript, Onsen UI, etc. Our app developers build a Hybrid app that is aesthetically tempting and interactive with an optimal user experience surety. Now, get an opportunity to touch more clients by always being open to them on all digital channels with us.",
              ]}
              list={[
                "Make Use Of The Strength Of Either Worlds (Digital/Physical)",
                "Accomplish Faster Time-To-Market",
                "Guarantee A good Consumer Experience",
                "Remain At The Forefront Of Mobile App Innovation",
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

    <InfoSection title={"Innovate your business with great App"} subtitle={"Are you Ready to Get Your Business The Perfect Direction"}  />
    <Portfolio
      title={
        <>
          Get Acquainted With Our Past {" "}
          <span style={{ color: "#fe1f07" }}> Mobile App Development Projects  </span>
        </>
      }
      subtitle="We at LogoTrim, where our talented app developers build the most stylish yet easy-to-use mobile app that eliminates users' struggles when using. Have a view of our past projects."
      columns={3}
      titleStyles={{
        fontSize: 50,
        fontWeight: 700,
        marginBottom: 0,
        textTransform: "uppercase",
      }}
      category={"Appsdevelops"}
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
