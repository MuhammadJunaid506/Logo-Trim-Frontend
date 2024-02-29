import { FaLayerGroup } from "react-icons/fa";
import { BsFolderSymlink } from "react-icons/bs";
import { MdOutlineDraw } from "react-icons/md";

import ClientLayout from '../../components/ClientLayout';
import ContactForm from "../../components/ContactForm"
import CustomBanner from "../../components/CustomBanner";
import SliderBanner from "../../components/SliderBanner";
import Plans from "../../components/Plans";
import TabsComponent from "../../components/TabsWhite";
import ComboPackage from "../../components/ComboPackage";
import { useRouter } from "next/router";
import MainButton from "../../components/MainButton";

const Pricing = () => {
  const router = useRouter()
  return (
    <ClientLayout head={{ title: "Budget-friendly Pricing and Packaging - Logo Trim", description: "Getting quality at reasonable prices is always a challenge, but Logo Magicians is one of the professional companies that guarantee all0-in-one solutions at affordable prices. What could get better than this? Feel free to contact us now for the best deals in town!" }}>
     <CustomBanner
        height={550}
        title={
          <>
          Our Package Are Trailed For <br></br>
          <span style={{ color: "#fe1f07" }}>
          Every Business Need{" "}
        </span>
        </>
        }
        text={"Discover unbeatable value with LogoTrim! Take a look at our pricing plans, which are custom-made to suit every budget and raise your brand effortlessly."}
        titleLevel={1}
        // onlyText={true}
        titleStyles={{
          marginTop: "10px",
          marginBottom: "10px",
          fontWeight: 900,
          fontSize: "40px",
          color: "black",
        }}
        image={"/images/pricing_03.png"}
        bg={"/images/Background.png"}
        imageDimentions={[500, 500]}
        imageStyles={{ width: "400px" , marginTop:"30px" }}
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
<br/>
<br/>
      {/* <Plans
              hideButton={true}
              category={"Logo"}
              showAll={true}
            /> */}
      <TabsComponent
        bg="white"
        title={
          <>
            Pricing Plans that{" "}
            <span style={{ color: "#fe1f07" }}> Work for you! </span>
          </>
        }
        subtitle={
          "Pick the best one and see what we can do for you regarding your business growth digitally."
        }
        tabs={[
          {
            key: "Logo",
            name: "Logo",
            content: <Plans category="Logo" fullWidth />,
          },
          {
            key: "website",
            name: "Website",
            content: <Plans category="Website" fullWidth />,
          },
          {
            key: "mobile-apps",
            name: "Mobile Apps",
            content: <Plans category="MobileApp" fullWidth />,
          },
          {
            key: "ecommerce",
            name: "Ecommerce",
            content: <Plans category="MobileApp" fullWidth />,
          },
          {
            key: "Digital Marketing",
            name: "Digital Marketing",
            content: <Plans category="DM" fullWidth />,
          },

        ]}
      />
<br/>
<br/>
    <ComboPackage/>
{/* <SliderBanner
        height={550}
        category={"LogoDesign"}
        title={"Why Choose Us?"}
        list={[
          {
            icon: (
              <BsFolderSymlink style={{ fontSize: "50px", color: "FFFF00" }} />
            ),
            title: "1. In-depth Research",
            text: "Before working your logo our team will research your type of business and competition to design a brand identity that will keep ahead of the curve.",
          },
          {
            icon: (
              <FaLayerGroup style={{ fontSize: "50px", color: "FFFF00" }} />
            ),
            title: "2. Customization Option",
            text: "One of our dedicated designers will collaborate with you to change the color, text, font and other crucial elements to provide you a bespoke logo.",
          },
          {
            icon: (
              <MdOutlineDraw style={{ fontSize: "50px", color: "FFFF00" }} />
            ),
            title: "3. Multiple Revisions",
            text: "At Logo Magicians we believe in offering 100% customer satisfaction through lots of choices so that you will receive a logo as per your requirements.",
          },
        ]}
        titleStyles={{
          marginTop: "30px",
          marginBottom: "10px",
          fontWeight: 900,
          fontSize: "35px",
          color: "white",
        }}
        image={"/images/home_image_3.webp"}
        imageDimentions={[784, 716]}
      /> */}
 
      {/* <ContactForm
        title={"Get Free Consultancy"}
        subtitle={"Send us an email using the following form and receive a guaranteed response within 48 hours."}
      /> */}
    </ClientLayout>
  )
}

export default Pricing