import { Typography, Tabs } from "antd";
import { useRouter } from 'next/router'
import ClientLayout from "../../components/ClientLayout";
import CustomBanner from "../../components/CustomBanner";

const TermsConditions = () => {
const { TabPane } = Tabs;
const router = useRouter()
  return (
    <ClientLayout
      head={{ title: "Terms & Conditions - LogoMagicians", description: "" }}
    >
      <CustomBanner
        height={350}
        title={"Terms and Conditions"}
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
      {/* <Typography.Title style={{ marginBottom: "10px",  fontWeight: 900,  fontSize: "30px",  color: "#fe1f07"}}>
          Terms and Conditions
        </Typography.Title> */}
        <Typography.Text
          style={{ fontSize: "16px", marginTop: "5px", marginBottom: "10px" }}
        >
          The following terms and conditions apply to every user of this
          website. By using our website, you accept every term and condition
          provided below. Ensure that you are at least 18 years of age and must
          read as well as agree with the entire terms and conditions of this
          website.
        </Typography.Text>
        <Typography.Title
          className="fontWeight900"
          level={2}
          style={{
            color: "#273da9",
            marginTop: "20px",
            marginBottom: "10px",
            fontWeight: 900,
            fontSize: "30px",
          }}
        >
          Acceptance of Terms
        </Typography.Title>
        <Typography.Text
          style={{ fontSize: "16px", marginTop: "5px", marginBottom: "10px" }}
        >
          Using our website, you acknowledge and agree to abide by the terms and conditions outlined herein. You can give acceptance that you are minimum 18 years old and have carefully read carefully and show willingness to all provisions.
        </Typography.Text>

        <Typography.Title
          className="fontWeight900"
          level={2}
          style={{
            color: "#273da9",
            marginTop: "20px",
            marginBottom: "10px",
            fontWeight: 900,
            fontSize: "30px",
          }}
        >
          Ownership & Licence of this Website
        </Typography.Title>
        <Typography.Text
          style={{ fontSize: "16px", marginTop: "5px", marginBottom: "10px" }}
        >
          LogoTrim and its licensors own this website's entirety. Users are granted permission to use the content exclusively for logo design purposes in cooperation with our team. Reproduction, sharing, or modification of the site's content, including text, images, audio, or video materials, is strictly prohibited.
        </Typography.Text>
        <br />
        <Typography.Title style={{ fontSize: "18px", marginTop: "5px", marginBottom: "10px" }}>Prohibited Actions</Typography.Title>
        <ul style={{ marginTop: "5px", marginBottom: "5px" }}>
          <li>Users are expressly prohibited from:</li>
          <li>Republishing site material on other platforms.</li>
          <li>Using the website to market items or services.</li>
          <li>Copying or altering website content for any purpose.</li>
        </ul>

        <Typography.Title
          className="fontWeight900"
          level={2}
          style={{
            color: "#273da9",
            marginTop: "20px",
            marginBottom: "10px",
            fontWeight: 900,
            fontSize: "30px",
          }}
        >
          Site Access
        </Typography.Title>
        <Typography.Text
          style={{ fontSize: "16px", marginTop: "5px", marginBottom: "10px" }}
        >
          LogoTrim reserve the right to limit access to particular pages or data on the website. Clients will receive committed consumer IDs and passwords to access all primary pages and data for logo design. Requests for complete website access ought to be directed to our sales team. We reserve the right to suspend or terminate consumer IDs and passwords temporarily or permanently in the event of doubtful activity, without prior notice.
        </Typography.Text>

        <Typography.Title
          className="fontWeight900"
          level={2}
          style={{
            color: "#273da9",
            marginTop: "20px",
            marginBottom: "10px",
            fontWeight: 900,
            fontSize: "30px",
          }}
        >
          Content Submission Policy
        </Typography.Title>
        <Typography.Text
          style={{ fontSize: "16px", marginTop: "5px", marginBottom: "10px" }}
        >
          Users are responsible for guaranteeing that any content they upload or share on the website, like text, images, audio, or video materials, complies with all applicable laws and regulations. LogoTrim will promptly remove or modify content that infringes upon third-party rights or contains threatening, misleading, or controversial material. We do not energetically examine content submissions but reserve the right to carry out so.
        </Typography.Text>

        <Typography.Title
          className="fontWeight900"
          level={2}
          style={{
            color: "#273da9",
            marginTop: "20px",
            marginBottom: "10px",
            fontWeight: 900,
            fontSize: "30px",
          }}
        >
          Warranty Limitations
        </Typography.Title>
        <Typography.Text
          style={{ fontSize: "16px", marginTop: "5px", marginBottom: "10px" }}
        >
          LogoTrim does not guarantee the website's or sales team's continuous availability. We are not liable for any losses incurred by clients, including damage to revenue, contracts, client relationships, data, or intangible assets. Information supplied on the website is intended for logo development purposes only, and users are encouraged to seek professional guidance for legal, financial, or other matters.<br/>
          Ensure compliance with these terms and conditions to enjoy uninterrupted access and usage of our services.
        </Typography.Text>
        <Typography.Title
          className="fontWeight900"
          level={2}
          style={{
            color: "#273da9",
            marginTop: "20px",
            marginBottom: "10px",
            fontWeight: 900,
            fontSize: "30px",
          }}
        >
          Exceptions
        </Typography.Title>
        <Typography.Text style={{ fontSize: "16px", marginTop: "5px", marginBottom: "10px" }}>LogoTrim' primary objective is to better brand visibility through captivating, professional, and distinctive logo designs. However, we disclaim any responsibility for:</Typography.Text>
        <ul style={{ marginTop: "5px", marginBottom: "5px" }}>
          <li>Instances of fraud or fraudulent misrepresentation associated with our website.</li>
          <li>Personal losses, injuries, or fatalities of clients</li>
        </ul>

        <Typography.Title
          className="fontWeight900"
          level={2}
          style={{
            color: "#273da9",
            marginTop: "20px",
            marginBottom: "10px",
            fontWeight: 900,
            fontSize: "30px",
          }}
        >
          Refund Policy
        </Typography.Title>
        <Typography.Text
          style={{ fontSize: "16px", marginTop: "5px", marginBottom: "10px" }}
        >
          Our refund policy does not apply under the following circumstances:
        </Typography.Text>
        <ul style={{ marginTop: "5px", marginBottom: "5px" }}>
          <li>Selection of a particular service package.</li>
          <li>Sharing or assigning the identical logo to a freelancer or design agency.</li>
          <li>Approval of the initial design concept.</li>
          <li>Submission of an incomplete design brief.</li>
          <li>
            Demanding changes to the approved design concept.
          </li>
          <li>
            Discussing or assigning the same logo to a freelancer or any design
            agency
          </li>
          <li>Closure or renaming of your business</li>
          <li>Exceeding the highest refund request time limit.</li>
          <li>Change of mind, policy, or any dispute.</li>
          <li>Failure to contact us for more than 14 days after project commencement.</li>
          <li>
              Violation of our terms and conditions or confidentiality policy.
          </li>
          <li>
              Requesting or accepting a revision.
          </li>
          <li>
              Order cancellation for explanations not specified in our refund policies.
          </li>
        </ul>
        <br />
        <Typography.Text
          style={{ fontSize: "16px", marginTop: "5px", marginBottom: "10px" }}
        >
          Please give the initial design brief within ten days of order placement.
          In the case of a bundled service package, refunds can exclusively be claimed for particular services disliked after revision (not for the entire bundle).
          <br/>Note: LogoTrim can reject or cancel any logo or project order. Users forfeit the right to use the logo design ideas for any purpose upon claiming a refund, as they remain the exclusive property of LogoTrim. LogoTrim reserves the right to take lawful action through the authority’s copyright agencies in the event of a breach.

        </Typography.Text>

        <Typography.Title
          className="fontWeight900"
          level={2}
          style={{
            color: "#273da9",
            marginTop: "20px",
            marginBottom: "10px",
            fontWeight: 900,
            fontSize: "30px",
          }}
        >
          Claiming A Refund
        </Typography.Title>
        <Typography.Text
          style={{ fontSize: "16px", marginTop: "5px", marginBottom: "10px" }}
        >
         To request a refund, please get in touch with our committed sales representative via::
        </Typography.Text>
        <ul style={{ marginTop: "5px", marginBottom: "5px" }}>
          <li>Phone or live chat: Provide your order ID.</li>
          <li>Email: Include "Refund" and your Order ID in the subject line</li>
        </ul>

        <Typography.Text
          style={{ fontSize: "16px", marginTop: "5px", marginBottom: "10px" }}
        >
          Upon getting your refund appeal, our client representative will on the dot review and accept it.
        </Typography.Text>

        <br />

        <Typography.Title
          className="fontWeight900"
          level={2}
          style={{
            color: "#273da9",
            marginTop: "20px",
            marginBottom: "10px",
            fontWeight: 900,
            fontSize: "30px",
          }}
        >
          Money-Back Guarantee
        </Typography.Title>
        <Typography.Text
          style={{ fontSize: "16px", marginTop: "5px", marginBottom: "10px" }}
        >
          We offer a Money-Back assurance. And give 100% satisfaction. Contact us within 30 days of putting your order for a refund. However, this promise does not apply to revision requests for logo design samples or concepts. Once refunded, users turn down the right to use the initial idea or design.
        </Typography.Text>

        <Typography.Title
          className="fontWeight900"
          level={2}
          style={{
            color: "#273da9",
            marginTop: "20px",
            marginBottom: "10px",
            fontWeight: 900,
            fontSize: "30px",
          }}
        >
          Indemnity
        </Typography.Title>
        <Typography.Text
          style={{ fontSize: "16px", marginTop: "5px", marginBottom: "10px" }}
        >
          LogoTrim assumes no liability for any loss, damage, liability, expense, or lawful dispute arising from logo designs developed by our team to meet client requirements.
        </Typography.Text>

        <Typography.Title
          className="fontWeight900"
          level={2}
          style={{
            color: "#273da9",
            marginTop: "20px",
            marginBottom: "10px",
            fontWeight: 900,
            fontSize: "30px",
          }}
        >
          Contractual Breach
        </Typography.Title>
        <Typography.Text
          style={{ fontSize: "16px", marginTop: "5px", marginBottom: "10px" }}
        >
          LogoTrim reserves the right to pursue lawful action if a client breaches these terms and conditions. However, our favorite is to suspend consumer access by blocking the IP address. In fraud cases, we may escalate to court proceedings against the fraudulent individual.
        </Typography.Text>

        <Typography.Title
          className="fontWeight900"
          level={2}
          style={{
            color: "#273da9",
            marginTop: "20px",
            marginBottom: "10px",
            fontWeight: 900,
            fontSize: "30px",
          }}
        >
          Project Closure
        </Typography.Title>
        <Typography.Text
          style={{ fontSize: "16px", marginTop: "5px", marginBottom: "10px" }}
        >
          A project will be regarded as closed if there is no communication between the client and our client help representative for 30 days. Such a project is deemed entirely completed or unclaimed for the specified period. After this timeframe, LogoTrim disclaims responsibility for revisions, partial refunds, or money-back guarantees.
        </Typography.Text>

        <Typography.Title
          className="fontWeight900"
          level={2}
          style={{
            color: "#273da9",
            marginTop: "20px",
            marginBottom: "10px",
            fontWeight: 900,
            fontSize: "30px",
          }}
          
        >
          Acknowledgment
        </Typography.Title>
        <Typography.Text
          style={{ fontSize: "16px", marginTop: "5px", marginBottom: "10px" }}
        >
          We have the right, with or without prior notification, to revise the terms and conditions at any moment. However, any new or amended terms will be practical from their inclusion on the website. Users should review all the terms and conditions before placing an order.
        With this website, you confirm your approval of the terms above and conditions. If you discover them unreasonable, we advise refraining from utilizing this website.
        </Typography.Text>

        <Typography.Text
          style={{ fontSize: "16px", marginTop: "5px", marginBottom: "10px" }}
        >
          By using this website, you agree that the above terms and conditions
          is appropriate. If you think they are not reasonable, you are
          recommended to not use this website for any purpose.
        </Typography.Text>
      </div>
    </ClientLayout>
  );
};
export default TermsConditions;
