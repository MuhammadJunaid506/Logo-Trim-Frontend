import { Tabs } from "antd";
import { useRouter } from 'next/router'
import ClientLayout from "../../components/ClientLayout";
import MainButton from "../../components/MainButton";
import ContactForm from "../../components/ContactForm";
import CustomBanner from "../../components/CustomBanner";
import InfoSection from "../../components/infoSection";
import AboutSection2 from "../../components/AboutSection2";
import Awards from "../../components/Awards";
import TwoColSection1 from "../../components/TwoColSection1";
import ThreeColSection from "../../components/ThreeColSection";
import ContactBar2 from "../../components/ContactBar2"

const About = () => {
const { TabPane } = Tabs;
const router = useRouter()
  return (
    <ClientLayout head={{ title: "About Us | Branding | Logo Magicians", description: "Logo Magicians is a leading branding company that offers its clients unique solutions. Our strategies help create and remodel brands that are well-recognized by the world. If you are looking for a customized marketing plan, we are here to help. Get in touch with the top branding leader now!" }}>
<CustomBanner
      height={700}
      title={
        <>
          We are one stop shop for taking your
          <span style={{ color: "#fe1f07",lineHeight:0.6 }}>
            {" "}
            Business to Next Level{" "}
          </span>
        </>
      }
      titleLevel={1}
      text={
        "Our team will create a stunning, original design for you that will make your business stand out from the crowd and help you wow competitors and customers alike."
      }
      titleStyles={{
        marginTop: "5px",
        marginBottom: "10px",
        fontWeight: 900,
        fontSize: "55px",
        fontFamily:"Teko",
        color: "black",
        lineHeight: 0.9,
      }}
      image={"/images/about_us_03.png"}
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


      <br />    
      <br />
      <TwoColSection1
        image={"/images/about_us_07.png"}
        imageDimentions={[785, 442]}
        imageStyles={{ maxWidth: "450px" }}
        title={
          <><span style={{ fontSize:20,  lineHeight:0.3 }}>WE ARE DIGITAL INNOVATORS          </span><br/>
            Build the Logos you want, 
            <span style={{ color: "#fe1f07",lineHeight:0.3 }}>
              {" "}
              and our Design Experts can do that.{" "}
            </span>
          </>
        }
        multitext={[
          "Logos are so essential that without it, business seems unfamiliar no matter how you try to sell your products or services or how much effort you put into it. If you see no logo on the product/service, a car, or clothes (As an example) you want to purchase, will you take action? Definitely not. Big automotive or fashion brands build value with their logos first. You always know their logo is what motivates us. Thus, build your startup or SME firm logo with us and see how it can greatly help improve the brand's future.",
          "Call LogoTrim gurus in graphic design and have a free meeting with them. Don't worry about what sector you belong to; just let us know your ideas and brand personality. Our team, with deep searching, brainstorming, and discussion, delivers the best result, which is highly genuine and builds new impressiveness among the viewer.",
        ]}
      />

      <AboutSection2
        bg={{color:"#fe1f07"}}
        height={200}
        features={[
          { count: "750", text: "Completed Projects" },
          { count: "500+", text: "Positive reviews" },
          { count: "250+", text: "Websites Designs" },
          { count: "350+", text: "Logo Designs" },
          { count: "150", text: "Ecommerce Websites" },
        ]}
      />

      <ThreeColSection
        image1={"/images/about_us_14.png"}
        imageDimentions={[785, 442]}
        imageStyles={{ maxWidth: "100px", height:"100px"}}
        title={"We Provide Custom Logo Design by Passionate Team"}
        title1={"Research And Study"}
        text1={
          "Foremost, client input is a must. We gather it. Then, study competitors. During this time, we explore design trends to understand brand identity better."
        }
        image2={"/images/about_us_16.png"}
        title2={"Conceptualization"}
        text2={
          "Now it’s time to sketch, iterate, and refine logo ideas. The creativeness with brand consistency and scalability must be aligned, and we take care of that."
        }
        image3={"/images/about_us_11.png"}
        title3={"Presentation & Feedback"}
        text3={
          "Last but not least, presenting logo options to clients. Take their solicited feedback, iterate what we discussed, and move the copyrights until a final, approved design."
        }
        colStyle={{alignItems:"center",textAlign:"center", gap:5}}
        titleColor={"black"}
        titleStyle={{fontFamily:"Teko", fontSize:"25px"}}
        textStyle={{textAlign: "center"}}
      />
     <CustomBanner
      height={400}
      title={
        <>
         Marvelous Design Built Giant Businesses, <br/> <span >{" "}and we help do that</span>
        </>
      }
      titleLevel={2}
      onlyText={true}
      text={
        <>
         We at LogoTrim, which is at your door digitally to make everything better when it comes to graphic designing, web/app designing, and digital marketing. For your business lifetime achievement, we can be the great option that you will always be satisfied with.
        </>
      }
      titleStyles={{
        marginTop: "5px",
        marginBottom: "10px",
        fontWeight: 900,
        textAlign: "center",
        fontSize: "50px",
        color: "white",
      }}
      textStyle={{
        textAlign: "center",
        fontSize: "16px",
        color: "white",
      }}
      bg={"/images/index_red_23.png"}
      imageDimentions={[500, 500]}
      imageStyles={{ width: "450px", opacity: 1}}
    />
    <ContactBar2/>
    </ClientLayout>
  );
};
export default About;
