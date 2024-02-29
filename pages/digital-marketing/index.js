import React from 'react'
import ClientLayout from '../../components/ClientLayout'
import CustomBanner from '../../components/CustomBanner'
import TwoColSection1 from '../../components/TwoColSection1'
import TabsComponent2 from "../../components/Tabs";
import MainButton from '../../components/MainButton'
import { useRouter } from "next/router";

const DigitalMarketing = () => {
    const router = useRouter()
  return (
    <ClientLayout head={{ title: "Digital Marketing - Logo Trim", description: "Are you tired of searching for reliable logo, website and app designing company? We are the leading branding company that provides complete solutions to clients worldwide. Feel free to contact us and get to know more about our outstanding services." }}>
     <CustomBanner
      height={700}
      title={
        <>
          Uplift sales and grasp clients with our <br/>
          <span style={{ color: "#fe1f07" }}>
            {" "}
            Uppermost Digital Marketing Services{" "}
          </span>
        </>
      }
      titleLevel={1}
      text={
        "Get better digital exposure and let your brand be available to your desired clients at the right screen and at the perfect time."
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
      image={"/images/digital_marketing_03.png"}
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
      image={"/images/digital_marketing_07.png"}
      imageDimentions={[785, 442]}
      title={
        <>
          Make Your digital marketing efforts 
          <span style={{ color: "#fe1f07" }}>
            {" "}
            easy with our expertise
          </span>{" "}
          </>
      }
      // subtitle={"Professional Designs, Unique Minds"}
      titleStyles={{
        marginTop: "0px",
        marginBottom: "0px",
        fontWeight: 900,
        fontSize: "55px",
        color: "black",
        fontFamily:"Teko",
        lineHeight: 0.9,
      }}
      imageStyles={{ maxWidth: "400px" }}
      multitext={[
        "Give us the authority to manage your digital marketing efforts. Out keen digital marketing strategist, PPC, and SEO specialist apply all 7 C's of operative digital marketing strategies to target precise audiences. With them, you can earn the most RIO from different fee and paid marketing platforms with the deep planning and optimization of organic and paid marketing campaigns. LogoTrim first attracts the audience to your digital assets, then converts the visitors into sales and leads, and lastly, studies the visitor behaviors and, to improve conversions, works upon the data.",
      ]}

      list={["Expert digital marketing management", "Maximize ROI with strategic planning", "Targeted audience engagement", "Continuous optimization for conversions"]}
    />
    <CustomBanner
      height={400}
      title={
        <>
         Lead the Competitive Crowdie marketplace with the certified digital marketing firm
        </>
      }
      titleLevel={2}
      onlyText={true}
      text={
        <>
        Have a free session with us now and get started on your valuable digital marketing project with our most prominent digital marketing agency in the USA.
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
      bg={"/images/digital_marketing_10.png"}
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
          key: "Search Engine optimization",
          name: "Search Engine optimization",
          content: (
            <TwoColSection1
              title={
                <>
                  <span style={{ color: "#fe1f07" }}>
                  Search Engine optimization
                  </span><br/>
                  Improve your digital websites and social media platforms with Expert SEO Strategies.
                </>
              }
              onlyText
              titleColor={"black"}
              textColor={"black"}
              background={"transparent"}
              multitext={[
                "Digital places are highly crowded and getting even more day by day, so you need to put a strong foothold on it, and with better visibility, you can do that. And for that, you need strong SEO knowledge, as SEO is a key to digital success. Our SEO services are tailored to raise all your online places where you exist and can boost organic traffic there. With a focus on growth, we use the best SEO tactics to enhance your search engine rankings and let you reach your viewers wherever they are.",
               
              ]}
              list={[
                "Regular performance monitoring",
                "Targeted keyword optimization",
                "Comprehensive website analysis",
                "On-page and off-page SEO tactics",
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
          key: "Social Media Marketing",
          name: "Social Media Marketing",
          content: (
            <TwoColSection1
              title={
                <>
                  <span style={{ color: "#fe1f07" }}>
                  Social Media Marketing
                  </span><br/>
                  Tie, Engage, and Cherish Your Audience through Social Media
                </>
              }
              onlyText
              titleColor={"black"}
              textColor={"black"}
              background={"transparent"}
              multitext={[
                "The 21st Century revolves around digitalization and social connectivity: their mixture gives the development of social media platforms. Businesses worldwide cannot survive without these platforms, as everyone is on social media. So, taking advantage of these is now more than essential for a business. So, opting for a reliable social media marketing service can be your way to get the most likes, comments, and visits. Our SMM gurus can strengthen your brand existence, foster meaningful interactions, and give high conversions. Let us craft compelling campaigns and move your business to a successful future.",
              ]}
              list={[
                "Compelling content creation",
                "Data-driven analytics and optimization",
                "Tailored social media strategies",
                "Audience engagement and community building",
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
          key: "Content Marketing",
          name: "Content Marketing",
          content: (
            <TwoColSection1
              title={
                <>
                  <span style={{ color: "#fe1f07" }}>
                  Content Marketing
                  </span><br/>
                  Ignite Your Brand Story with Compelling Content Marketing
                </>
              }
              onlyText
              titleColor={"black"}
              textColor={"black"}
              background={"transparent"}
              multitext={[
                "Content is ruler. Words cover the most, primarily when written (or even video or infographics) compellingly and creatively for websites, social media platforms, blogs, or banner CTAs. They convince and clarify to the audience why and what the brand delivers. LogoTrim is here to support you in ruling the digital content writing world. Our content marketing services are centered on creating engaging, relevant, and valuable content as per SEO guidelines and best practices that let your audience when read by them, persuade to pick your service or product. Raise your brand story with our inclusive content marketing way out.",
              ]}
              list={[
                "Content strategy development",
                "Creative content creation",
                "Content distribution and amplification",
                "Performance tracking and optimization",
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
          key: "Email Marketing",
          name: "Email Marketing",
          content: (
            <TwoColSection1
              title={
                <>
                  <span style={{ color: "#fe1f07" }}>
                  Email Marketing
                  </span><br/>
                  Deliver Personalized Messages that Drive Results with Email Marketing
                </>
              }
              onlyText
              titleColor={"black"}
              textColor={"black"}
              background={"transparent"}
              multitext={[
                "With our email marketing services, you can maximize the prospects of your client relationships. We'll aid you in delivering the appropriate message to the appropriate audience at the appropriate time, from tailored campaigns to automated workflows. Using our intelligent email marketing solutions, you can nurture leads, increase conversions, and establish a closer connection with your audience. Let us use email to help you accomplish your business objectives and create enduring relationships.",
              ]}
              list={[
                "Automated drip campaigns",
                "Segmentation and targeting",
                "Customized email campaigns",
                "Performance tracking and analytics",
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
    </ClientLayout>
  )
}

export default DigitalMarketing
