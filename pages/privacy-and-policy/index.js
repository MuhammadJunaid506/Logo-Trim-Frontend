import { Typography, Tabs } from "antd";
import { useRouter } from "next/router";
import ClientLayout from "../../components/ClientLayout";
import CustomBanner from "../../components/CustomBanner";

const PrivacyPolicy = () => {
  const { TabPane } = Tabs;
  const router = useRouter();
  return (
    <ClientLayout
      head={{ title: "Privacy and Policy - LogoTrim", description: "" }}
    >
      <CustomBanner
        height={350}
        title={"Privacy and Policy"}
        titleLevel={1}
        onlyText={true}
        titleStyles={{
          marginTop: "5px",
          marginBottom: "10px",
          fontWeight: 900,
          fontSize: "40px",
          color: "#fe1f07",
        }}
        bg={"/images/Background.png"}
      />
      <div style={{ padding: "80px" }}>
        <Typography.Title style={{ marginBottom: "10px",  fontWeight: 900,  fontSize: "28px",  color: "#fe1f07"}}>
          Privacy and Policy
        </Typography.Title>
        <Typography.Text
          style={{ fontSize: "16px", marginTop: "5px", marginBottom: "10px" }}
        >
          We urge all clients to familiarize themselves with our confidentiality policy before purchasing. To guarantee smooth service, please give accurate information. By choosing for our service, you consent to the gathering of the following data:
        </Typography.Text>
        <Typography.Title style={{ fontSize: "18px", marginTop: "5px", marginBottom: "10px" }}>Collection of Information</Typography.Title>
        <Typography.Text
          style={{ fontSize: "16px", marginTop: "5px", marginBottom: "10px" }}
        >We collect:</Typography.Text>
        <ul style={{ marginTop: "5px", marginBottom: "5px" }}>
          <li>Contact Information (name, phone number, email address)</li>
          <li>Order data (product, marketing and order history)</li>
          <li>Billing Information (credit/debit card number, address)</li>
          <li>Connection Information (referring/exit pages, browser type, IP address, operating system)</li>
        </ul>
        <Typography.Title
          className="fontWeight900"
          level={2}
          style={{
            color: "#273da9",
            marginTop: "20px",
            marginBottom: "10px",
            fontWeight: 900,
            fontSize: "28px",
          }}
        >
          Data Usage
        </Typography.Title>
        <Typography.Text
          style={{ fontSize: "16px", marginTop: "5px", marginBottom: "10px" }}
        >
          We use automated or manual data to fulfill your orders according to your company requirements. We strictly do not share or disclose personal or company data with third parties.
        </Typography.Text>

        <Typography.Title
          className="fontWeight900"
          level={2}
          style={{
            color: "#273da9",
            marginTop: "20px",
            marginBottom: "10px",
            fontWeight: 900,
            fontSize: "28px",
          }}
        >
          Cookies and Tracking
        </Typography.Title>
        <Typography.Text
          style={{ fontSize: "16px", marginTop: "5px", marginBottom: "10px" }}
        >
          We may use browser cookies to track preferences and general information, excluding personal details. Additionally, web beacons, or single-pixel gifs, help us analyze consumer action for site improvement.
        </Typography.Text>

        <Typography.Title
          className="fontWeight900"
          level={2}
          style={{
            color: "#273da9",
            marginTop: "20px",
            marginBottom: "10px",
            fontWeight: 900,
            fontSize: "28px",
          }}
        >
          Security Measures
        </Typography.Title>
        <Typography.Text
          style={{ fontSize: "16px", marginTop: "5px", marginBottom: "10px" }}
        >
          Our foremost priority is to guarantee 100% security for our customers, collecting data straight from you as necessary to fulfill your objectives. We maintain stringent confidentiality policies to safeguard client data and offer a protective electronic payment gateway
        </Typography.Text>

        <Typography.Title
          className="fontWeight900"
          level={2}
          style={{
            color: "#273da9",
            marginTop: "20px",
            marginBottom: "10px",
            fontWeight: 900,
            fontSize: "28px",
          }}
        >
          Unique Designs
        </Typography.Title>
        <Typography.Text
          style={{ fontSize: "16px", marginTop: "5px", marginBottom: "10px" }}
        >
          Every design crafted by our team is unique. We create each logo from scratch, delivering original files and 100% ownership upon approval.
        </Typography.Text>

        <Typography.Title
          className="fontWeight900"
          level={2}
          style={{
            color: "#273da9",
            marginTop: "20px",
            marginBottom: "10px",
            fontWeight: 900,
            fontSize: "28px",
          }}
        >
          Additional Policies
        </Typography.Title>
        <Typography.Text
          style={{ fontSize: "16px", marginTop: "5px", marginBottom: "10px" }}
        >
          Widgets improve consumer experience by delivering features like client reviews and news. Widgets may also collect client information, combining email addresses and utilizing cookies, as per the building business confidentiality policy. Our blog section allows users to access and share valuable data within their network.
        </Typography.Text>

        <Typography.Title
          className="fontWeight900"
          level={2}
          style={{
            color: "#273da9",
            marginTop: "20px",
            marginBottom: "10px",
            fontWeight: 900,
            fontSize: "28px",
          }}
        >
          Policy Updates
        </Typography.Title>
        <Typography.Text
          style={{ fontSize: "16px", marginTop: "5px", marginBottom: "10px" }}
        >
          Logo Trim reserves the right to amend this confidentiality policy as needed. We strive to inform clients of changes via email and our designated communication channels. We advise clients to review our confidentiality policy frequently when visiting our website for logo orders.
        </Typography.Text>
      </div>
    </ClientLayout>
  );
};
export default PrivacyPolicy;
