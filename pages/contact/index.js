import Awards from "../../components/Awards";
import ClientLayout from '../../components/ClientLayout';
import ContactForm from "../../components/ContactForm"
import CustomBanner from "../../components/CustomBanner";
import FormC from "../../components/From";
import TwoColSection1 from "../../components/TwoColSection1";
import AssuranceGrid2 from "../../components/AssuranceGrid2";
import MainButton from "../../components/MainButton";
import { useRouter } from "next/router";

const ContactUs = () => {
    const router = useRouter()
  return (
    <ClientLayout head={{ title: "Contact Us Now - Logo Trim", description: "Are you tired of searching for reliable logo, website and app designing company? We are the leading branding company that provides complete solutions to clients worldwide. Feel free to contact us and get to know more about our outstanding services." }}>
  <CustomBanner
      height={700}
      title={
        <>
          Build A Strong Connection <br/>
          <span style={{ color: "#fe1f07" }}>
            {" "}
            With Us.{" "}
          </span>
        </>
      }
      titleLevel={1}
      text={
        "Arrange a free session with us for your branding needs or website or app development purposes. Our team is ready to discuss everything with you. Let’s connect for a better future. Contact us any time."
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
      image={"/images/contact_us_03.png"}
      bg={"/images/Background.png"}
      imageDimentions={[500, 500]}
      imageStyles={{ width: "400px"  }}
      // buttons={
      //   <MainButton
      //     style={{
      //       fontSize: 14,
      //       height: "auto",
      //       marginTop: 8,
      //       color: "white",
      //       border: "1px solid white",
      //       backgroundColor: "#fe1f07",
      //       borderRadius: "25px",
      //       padding: "0px 8px",
      //       height: "auto",
      //       fontWeight: 800,
      //       padding: "15px 35px",
      //       minWidth: 50,
      //     }}
      //     onClick={() => router.push("/contact")}
      //   >
      //     Get Free Consultant
      //   </MainButton>
      // }
    />
    <FormC/>
    {/* <AssuranceGrid2 title={<>Get In Touch <span style={{color:"#fe1f07"}}>With Us</span></> } subtitle={"Contact Us Via Email or Phone and Follow Our Social Media Accounts "}/> */}


    </ClientLayout>
  )
}

export default ContactUs