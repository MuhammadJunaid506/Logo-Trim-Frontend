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

const LogoDesign = () => {
  const router = useRouter()


  return (
    <ClientLayout
    head={{
      title: "Professional Logo Design Services | Custom Logo Designer – Logo Trim",
      description:
        "Want to enhance your brand visibility online? Hire Logo Magicians for professional logo design services and kick start your business growth today. It helps convert your brand icon ideas into reality, making it stand out from the rest.",
    }}
  >
    <CustomBanner
      height={700}
      title={
        <>
          Custom Logo Design Service by Best{" "}
          <span style={{ color: "#fe1f07" }}>
            {" "}
            Logo Designing Agency{" "}
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
        color: "black",
      }}
      image={"/images/logo_design_03.png"}
      bg={"/images/Background.png"}
      imageDimentions={[500, 500]}
      imageStyles={{ width: "400px" }}
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
      image={"/images/logo_design_07.png"}
      imageDimentions={[785, 442]}
      title={
        <>
          Experience Professionals waiting <br/> to Design
          <span style={{ color: "#fe1f07" }}>
            {" "}
            Your Dreams to a Reality Professional Designs, Unique Minds
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
      }}
      imageStyles={{ maxWidth: "400px" }}
      multitext={[
        "A logo is the first priority of a business, brand or organization to establish a strong foundation. Whether it is a start-up or corporation, elegant brand identity plays a lead role to attract the target audience. That is why it is important to hire a top logo design firm to connect with your customers, not just your business. ",
      ]}

      list={["High Quality in affordable prices", "100% Satisfaction Guaranteed", "100% Unique Design", "24/7 Customer Support", "100% Money Back Guarantee"]}
    />

    <CustomBanner
      height={400}
      title={
        <>
         Professional and Affordabe Logo Design Services <br /> Sutaible to Your Brand Business or Service
        </>
      }
      titleLevel={2}
      onlyText={true}
      text={
        <>
         We at LogoTrim, excel in providing impeccable services at very competitve rates!  <br /> Align your needs and jump right in to have an experiance of a lifetime
          centered digital experiances .
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
      bg={"/images/index_red_23.png"}
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
          key: "illustrative-logo-designer",
          name: "Illustrative Logo Designer",
          content: (
            <TwoColSection1
              title={
                <>
                  <span style={{ color: "#fe1f07" }}>
                  Illustrative Logo Designer
                  </span><br/>
                  Build the most appealing illustrative logos from us
                </>
              }
              onlyText
              titleColor={"black"}
              textColor={"black"}
              background={"transparent"}
              multitext={[
                "An illustration is a visual graphic art form like drawing (lines/textures/shapes/space/colors/motion) to show your complex brand message. A business uses illustrations in a logo to show what the company does. It illustrates the company name or could even include a mascot or any other character used to represent the company. An illustrative logo is an on-purpose use of imagery. Companies use it to help customers feel the product is associated with them. So, do you want to make an illustrative logo? We have great artists that can do that. Call us.",
               
              ]}
              list={[
                "Visualize your brand message",
                "Incorporate company identity",
                "Enhance customer connection",
                "Professional illustrative design",
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
          key: "symbolic-logo-design-services",
          name: "Symbolic Logo Design Services",
          content: (
            <TwoColSection1
              title={
                <>
                  <span style={{ color: "#fe1f07" }}>
                  Symbolic Logo Designs
                  </span>{" "}
                  Empower Your Company with most stylish symbolic log Design
                </>
              }
              onlyText
              titleColor={"black"}
              textColor={"black"}
              background={"transparent"}
              multitext={[
                "You can also refer to a symbolic logo as a pictorial logo. It doesn't have any typography. They can be abstract or figurative depictions and apply only symbols like shape compositions, icons, and illustrations. These symbols can, on the spot, show a brand's unique identity. A professionally-appeared symbolic logo can show simplicity in a logo and be recognizable, versatile, and everlasting. You can show your brand in the most fantastic style. Call LogoTrim for your symbolic logo-making as we stand tall in the rush of logo design firms.",
              ]}
              list={[
                "Symbolic logo creation",
                "Typography-free design",
                "Professional and timeless",
                "Unique brand identity",
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
          key: "typographic-logo-design-company",
          name: "Typographic Logo Design Company",
          content: (
            <TwoColSection1
              title={
                <>
                  <span style={{ color: "#fe1f07" }}>
                  Typographic Logo Designs
                  </span>{" "}
                  Let Letters speaks about your brand crux with Typography logo design
                </>
              }
              onlyText
              titleColor={"black"}
              textColor={"black"}
              background={"transparent"}
              multitext={[
                "A logo that solely relies on texts, letters, or words is typographical. Fonts, the color palette, letter shaping, text elements proportion, balance, and correct use of negative space revolve around the great typography logos. These logos are highly versatile and can be simple to highly complex, depending on business needs and audience preferences. The correct font can be a way to great brand appreciation. Have a call to LogoTrim to execute all these perfectly and with remarkable effect convey your brand's core message and vision.",
              ]}
              list={[
                "Typography-focused logo design",
                "Versatile and customizable",
                "Expert use of fonts and negative space",
                "Conveys brand message effectively",
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
          key: "mascot-logo-design-service",
          name: "Mascot Logo Design Service",
          content: (
            <TwoColSection1
              title={
                <>
                  <span style={{ color: "#fe1f07" }}>
                  Mascot Logo Designs
                  </span>{" "}
                  Show a Unique Character that creatively exposes what your brand does
                </>
              }
              onlyText
              titleColor={"black"}
              textColor={"black"}
              background={"transparent"}
              multitext={[
                "Mascots are illustrated characters like animals, persons, or objects. These mascots in a logo show brand strength, personality, or team unity with basic cartoon-like shapes. Highly approachable and friendly that builds an emotional link like connecting devotion, pride, justice, admiration, etc., with the audience. Thus, do you like building a logo with a mascot? Your best option is none other than LogoTrim. Our certified mascot logo designers are on stand-in. Reserve your space now!",
              ]}
              list={[
                "Unique character representation",
                "Builds emotional connections",
                "Friendly and approachable design",
                "Expert mascot logo designers",
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
          key: "2d-animated-logo-design-consultant",
          name: "2D Animated Logo Design Consultant",
          content: (
            <TwoColSection1
              title={
                <>
                  <span style={{ color: "#fe1f07" }}>
                  2D/3D Animated Logo Designs
                  </span>{" "}
                  Add the best motion graphics in your logo with animations
                </>
              }
              onlyText
              titleColor={"black"}
              textColor={"black"}
              background={"transparent"}
              multitext={[
                "Move your static logo with simple dynamic effects and motion graphics to animation, or build an entirely new animated logo. Let your viewer's eyes see what you do, your core values, and your vision with an animation infusion in your logo. A moving logo can be exciting for the viewers. A logo is a tiny display of your brand identity. By giving an animation look, you can give your logo more charm. So call LogoTrim and get the best 2D or 3d based animated logo.",
              ]}
              list={[
                "Dynamic motion graphics",
                "Captivating animated logos",
                "Showcases brand identity effectively",
                "Expert 2D/3D animation design",
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

    <InfoSection title={"Design a Logo that you envision"} subtitle={"Are you Ready to Get Your Business The Perfect Direction"}  />
    <Portfolio
      title={
        <>
          A glipmse of our recent {" "}
          <span style={{ color: "#fe1f07" }}> professional logos </span>
        </>
      }
      subtitle="We at LogoTrim Strive to provide you the most attention-grabbing LOGO that makes an impact. They are fabulous and they instantly create the everlasting impression on your customers."
      columns={3}
      titleStyles={{
        fontSize: 50,
        fontWeight: 700,
        marginBottom: 0,
        textTransform: "uppercase",
      }}
      category={"Logo"}
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
export default LogoDesign
