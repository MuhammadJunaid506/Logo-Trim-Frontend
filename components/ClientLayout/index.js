import { useEffect, useState } from "react";
import Head from "next/head";
import { Layout, Modal, message ,Typography, Row } from "antd";
import ClientHeader from "./ClientHeader";
import ClientFooter from "./ClientFooter";
import { SITE_NAME } from "../../config/constants";
import { useRouter } from "next/router";
import { Get } from "../../config/api";
import { POPUP, UPLOADS_URL } from "../../config/constants/api";
import FormC from "../From";
import PopupForm from "../PopupForm";


const ClientLayout = ({ children, head }) => {
  const router = useRouter();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalClosed, setIsModalClosed] = useState(false);
  const [popupData, setPopupData] = useState({});

  // const getCanonical = (path) => {
  //     const fullURL = new URL(path, CURRENT_URL)
  //     return`${fullURL.origin}${fullURL.pathname}`
  //   }

  let title = head?.title ? head?.title : "";
  if (title) {
    title += ` - ${SITE_NAME}`;
  } else {
    title = SITE_NAME;
  }

  useEffect(() => {
    getPopup();
  }, []);

  const getPopup = () => {
    try {
      Get(POPUP.get).then((response) => {
        if (response.status) {
          setPopupData(response.data[0]);
          if (head?.title == "Get Your Digital Marketing Needs Met with Logo Trim") {
            !isModalClosed &&
              setTimeout(() => {
                setIsModalVisible(true);
              }, 10000);
          }
        } else {
          message.error(error.message ? error.message : "Something went wrong");
        }
      });
    } catch (error) {
      message.error(error.message ? error.message : "Something went wrong");
    }
  };
  return (
    <Layout
      style={{
        backgroundColor: "#fff",
        scrollBehavior: "smooth",
        position: "relative",
      }}
    >
      <Head>
        <title>{title}</title>
        <meta name="description" content={head?.description} />
        <meta
          name="robots"
          content="noindex, nofollow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <link rel="icon" href="/fav.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Teko:wght@500&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <ClientHeader />
      {children}
      <ClientFooter />

   
      <Modal
        width={"750px"}
        style={{ height: "550px" , padding:"0px" }}
        bodyStyle={{
          padding:"0px",
          backgroundPosition: "center",
          backgroundSize: "cover",borderRadius:"50px"
        }}
        footer={null}
        visible={isModalVisible}
        onOk={() => true}
        onCancel={() => {
          setIsModalVisible(false);
          setIsModalClosed(true);
        }}
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <div style={{padding:"0px", display:"flex" ,}}>
          <div style={{
          width:"375px", 
          background: `url(${UPLOADS_URL}/${popupData?.image})`,
          backgroundPosition: "center",
          backgroundSize: "cover", 
          borderTopRightRadius:"30px",
          borderBottomRightRadius:"30px",
          color:"white",
          }}>
          <Typography.Title style={{color:"white", 
          position: "absolute", width:"350px",
          overflow: "hidden",
          textAlign: "center", fontSize:"30px",
          bottom: "60px"}}>{popupData?.title}</Typography.Title>
          <Typography.Text style={{color:"white", 
          position: "absolute", width:"350px",
          overflow: "hidden",
          textAlign: "center", 
          bottom: "30px"}}>Fill out the Form with our Details <br/>
          To Start Conversation with our expert </Typography.Text>
          </div>
          <PopupForm/>
        </div>
      </Modal>
    </Layout>
  );
};

export default ClientLayout;
