import { Tabs } from "antd";
import { useRouter } from 'next/router'
import ClientLayout from "../../components/ClientLayout";
import MainButton from "../../components/MainButton";
import CustomBanner from "../../components/CustomBanner";

const About = () => {
const { TabPane } = Tabs;
const router = useRouter()
  return (
    <ClientLayout head={{ title: "Thankyou - LogoTrim", description: "" }}>
      <CustomBanner
        height={500}
        title={
          "We greatly thank you for placing an order on the LogoTrim."
        }
        text={"We've received and forwarded your order details. Our team of professionals will review it and contact you. Please check your mailbox incase we send any regarding your order query."}
        titleLevel={1}
        onlyText={true}
        titleStyles={{
          marginTop: "5px",
          marginBottom: "10px",
          fontWeight: 900,
          fontSize: "40px",
          color: "white",
        }}
        textStyle={{
          color: "white",
        }}
        bg={"/images/index_red_23.png"}
        buttons={
          <>
          <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <MainButton
              style={{
                marginTop: 20,
                fontSize: 17,
                padding: "8px 40px",
                height: "auto",
                fontWeight: 500,
                backgroundColor:"white",
                color:"black"
              }}
            onClick={() => router.push("/")}
>
              Back To Home
            </MainButton>
            </div>
          </>
        }
      />
    </ClientLayout>
  );
};
export default About;
