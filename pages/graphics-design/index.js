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
      title: "Graphic design",
      description:
        "Want to enhance your brand visibility online? Hire Logo Trim for professional logo design services and kick start your business growth today. It helps convert your brand icon ideas into reality, making it stand out from the rest.",
    }}
  >
    <CustomBanner
      height={700}
      title={
        <>
          Design Unlimited Graphics At Professional 
          <span style={{ color: "#fe1f07" }}>
            {" "}
            Graphic Design Services{" "}
          </span>
        </>
      }
      titleLevel={1}
      text={
        "Whether for brochure, stationary design purposes, packaging, labeling, or logo design, our professional graphic designer are certified, experienced, and well-versed in all graphic design principles and techniques. Give our graphic design firm a chance for your brand visuals enhancements."
      }
      titleStyles={{
        marginTop: "5px",
        marginBottom: "10px",
        fontWeight: 900,
        fontSize: "55px",
        fontFamily:"Teko",
        color: "black",
      }}
      image={"/images/Graphic_design_03.png"}
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
      image={"/images/Graphic_design_07.png"}
      imageDimentions={[785, 442]}
      title={
        <>
          <span style={{ fontSize: "30px", }}>Explore the real art of designing</span><br/>
          Give a new Look to your brand Digital materials 
          <span style={{ color: "#fe1f07" }}>
            {" "}
            with our graphic design company
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
        "Digitally, you see thousands of brands, websites, and apps everywhere. Astonishing graphics surround all; even digital marketing (like SMM and SEO) graphics design enlightens them. Even if we take ourselves from the digital world, like standard branding for packaging design, brochures, banner (for advertisements) design, and even stationary, graphics come into play. The aim is solely to attract clients.",
        "Now, as a newcomer (startup) or in the moment of rebranding your brand with new graphic design, you assume how to beat them.",
        "Graphics is an art that only professional graphics gurus can handle perfectly, whether you do it via freelancers or a third-party service. But with the third party, you can have a unique advantage; besides quality graphic design, you can also market them.",
        "So, if you want to allure your audience to a new level with remarkable 2D, 3D, abstraction, and calligraphy graphic design techniques, here comes the LogoTrim. Our graphic design services allow your brand to be visually enhanced with a creative team of certified and awaited graphic designers. Call us now."
      ]}

      list={["High Quality in affordable prices", "100% Satisfaction Guaranteed", "100% Unique Design", "24/7 Customer Support", "100% Money Back Guarantee"]}
    />

    <CustomBanner
      height={400}
      title={
        <>
         Unlock top-tier graphic design services at unbeatable rates! 
        </>
      }
      titleLevel={2}
      onlyText={true}
      text={
        <>
        Transform your brand with captivating visuals customized just for you. Whether you're a startup or an established enterprise, we've got you covered.
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
          key: "Logo Design",
          name: "Logo Design",
          content: (
            <TwoColSection1
              title={
                <>
                  <span style={{ color: "#fe1f07" }}>
                  Logo Design
                  </span><br/>
                  Make great Logo with our affordable Graphic Designer
                </>
              }
              onlyText
              titleColor={"black"}
              textColor={"black"}
              background={"transparent"}
              multitext={[
                "Want to craft a remarkable logo with mesmerizing graphics infused in it in the form of calligraphy, mascot, abstraction letter mark, or wordmark? Here is the best deal available at LogoTrim graphic design services in the USA. ",
                "We don’t have a graphic designer but a passionate people who are desperate in creating visual images or designs that are very artistic and improve your brands visual appeal when shown in any medium.  Make a logo that can beat those that stand the test of time and perfectly tell everything about your core brand values. Take the attention of a crowded market and surprise your rivals with a simple yet creatively designed logo."
               
              ]}
              list={[
                "Diverse Design Options",
                "Artistic Minds",
                "Timeless Branding",
                "Competitive Edge",
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
          key: "App and website graphic design",
          name: "App and website graphic design",
          content: (
            <TwoColSection1
              title={
                <>
                  <span style={{ color: "#fe1f07" }}>
                  App and website graphic design
                  </span><br/>
                  Augment your app/website visuals with our Quality Graphic Designs
                </>
              }
              onlyText
              titleColor={"black"}
              textColor={"black"}
              background={"transparent"}
              multitext={[
                "You have an app and a website, but which factors give them a charm besides its functionality? The answer is graphic designing: their style, structure, color, typography, alignments, and visual images. All the composition and arrangement of visual elements in your app and website come under graphics.",
                "In case your current website/app design isn't enough to give leads to your firm. Here, we come with a professional graphic designer to heighten your website/app appearance to a stunning one with perfect UI/UX design, icons, layout and composition, typography, and color scheme. Connecting with our inclusive app and website graphic design services, you can stay forward where every pixel speaks volumes about your brand.",
              ]}
              list={[
                "Enhanced User Experience ",
                "Conversion Optimization",
                "Strategic Differentiation",
                "Impactful Visuals",
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
          key: "Packaging and Labelling",
          name: "Packaging and Labelling",
          content: (
            <TwoColSection1
              title={
                <>
                  <span style={{ color: "#fe1f07" }}>
                  Packaging and Labelling
                  </span><br/>
                  Enhance your packaging and labeling visual design with our graphic design firm
                </>
              }
              onlyText
              titleColor={"black"}
              textColor={"black"}
              background={"transparent"}
              multitext={[
                "Transmute your product into a visual pleasure with our packaging and labeling services throughout the United States. Highly educated graphic designers, also called modernist artists, work accurately and with attention to detail to design graphics for packaging besides showing your product to the public with artistic modernism, asymmetry, geometric shapes and lines, simplification and abstraction, and photomontage and collage, it also reveals a brands character creatively.",
                "From eye-catching labels to eco-friendly packaging designs, our professional design services ensure your brand sticks out on the shelf. The packaging with our graphic design will undoubtedly leave a unique impression and entice consumers to try your product.",
              ]}
              list={[
                "Striking Visual Appeal",
                "Unique Impressions",
                "Brand Character",
                "Expert Designers",
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
          key: "Stationery Design",
          name: "Stationery Design",
          content: (
            <TwoColSection1
              title={
                <>
                  <span style={{ color: "#fe1f07" }}>
                  Stationery Design
                  </span><br/>
                  Improve your stationary design with our graphic designers 
                </>
              }
              onlyText
              titleColor={"black"}
              textColor={"black"}
              background={"transparent"}
              multitext={[
                "Establish a distinctive existence in the marketing world with our foremost stationery design services in the USA. From business cards and letterheads to memos, compliment slips, and envelopes, our graphic design agencies can carefully design graphics for each piece accordingly to embody your brand's expertise and distinctiveness. Our professional graphic designers prioritize cohesive designs, smoothly strengthening your brand's individuality when marketing your products or services using stationary. ",
                "Uplift the insight of your brand with carefully designed stationery that leaves an enduring imprint on employees and clients alike. Choose our graphic design firm to display your brand's uniqueness with style and sophistication or to enhance the appearance and atmosphere of your business's communication material.",
              ]}
              list={[
                "Professional stationery design ",
                "Customized branding materials ",
                "Unique brand representation",
                "Ever Lasting impact",
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
          key: "Brochure/Flyer and Banner Design",
          name: "Brochure/Flyer and Banner Design",
          content: (
            <TwoColSection1
              title={
                <>
                  <span style={{ color: "#fe1f07" }}>
                  Build an appealing and convincing
                  </span><br/>
                   Brochure/Flyer and Banner Design
                </>
              }
              onlyText
              titleColor={"black"}
              textColor={"black"}
              background={"transparent"}
              multitext={[
                "Ignite, emphasize and bring your message with influence through our extraordinary Brochure/Flyer and Banner Design services. Our graphic design firm has a trained team that excels in designing visually remarkable and knowledgeable graphics in these materials that can easily impress business viewers. Whether it's a dynamic brochure for an item launch, a lively flyer for a promotional event, or eye-catching banners for online advertising, our graphics designers are customized to charm your target audience.",
                "From convincing visuals to brief messaging, our graphic designs promise that your marketing materials effectively carry your brand's worth and offerings. Make a strong marketing strategy with our graphic design expertise, where each design is a strategic merge of creativeness and communication. With us, you can ensure the highest interaction and resonance with your audience.",
              ]}
              list={[
                "Eye-catching Brochure Designs",
                "Captivating Flyer Layouts",
                "Compelling Visual Storytelling",
                "Effective Marketing Collateral",
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

    <InfoSection title={"Infuse graphical charm in your logo, web app or digital marketing."} subtitle={"Are you Ready to Get Your Business The Perfect Direction"}  />
    <Portfolio
      title={
        <>
          A glimpse of our recent {" "}
          <span style={{ color: "#fe1f07" }}> Graphic Designs </span>
        </>
      }
      subtitle="We at LogoTrim delivers you the most eye-catching graphic designing’s that makes an influence that last very long time. Have a look at our past designs."
      columns={3}
      titleStyles={{
        fontSize: 50,
        fontWeight: 700,
        marginBottom: 0,
        textTransform: "uppercase",
      }}
      category={"Grapjics"}
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
