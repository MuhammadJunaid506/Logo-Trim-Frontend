import { Image } from "antd"
import { useRouter } from 'next/router'
import { Col, Layout, Row, List, Input ,Typography } from 'antd';
import { FaFacebookF, FaLinkedin , FaInstagram, FaYoutube ,FaPinterestP } from "react-icons/fa"
import { AiOutlineMail } from "react-icons/ai";
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

const { Footer } = Layout;
const { TextArea } = Input;

const ClientFooter = () => {
  const router = useRouter()
  return (
    <Footer style={{ height: "auto", background: "#f5f8fa", padding: "0" }}>
      {/* <Row style={{
        background: "#fe1f07",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <Col xs={20} md={7} style={{ padding: "30px 0" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Image preview={false} alt={"Failed to load image"} width={104} height={100} src="/images/home_img_41.png" />
            <div style={{ display: "block", fontSize: 20, color: "white", marginLeft: 10 }}>
              <p style={{ marginBottom: "unset" }}>We've got your back</p>
              <p style={{ fontWeight: "bolder", marginBottom: "unset", fontSize: 26 }}>24 X 7 Online!</p>
            </div>
          </div>
        </Col>
        <Col xs={20} md={7} style={{ padding: "30px 0" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Image preview={false} alt={"Failed to load image"} width={104} height={100} src="/images/home_img_43.png" />
            <div style={{ display: "block", fontSize: 20, color: "white", marginLeft: 10 }}>
              <p style={{ marginBottom: "unset" }}>Consult our expert</p>
              <a
                href="tel:+00 123 4567"
                style={{ fontWeight: "bolder", marginBottom: "unset", fontSize: 26, color: "white" }}
              >
                +44 20 3290 5500
              </a>
            </div>
          </div>
        </Col>
        <Col xs={20} md={7} style={{ padding: "30px 0" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Image preview={false} alt={"Failed to load image"} width={104} height={100} src="/images/home_img_38.png" />
            <div style={{ display: "block", fontSize: 20, color: "white", marginLeft: 10 }}>
              <p style={{ marginBottom: "unset" }}>Live Support</p>
              <p style={{ fontWeight: "bolder", marginBottom: "unset", fontSize: 26 }}>
                Chat Now
              </p>
            </div>
          </div>
        </Col>
      </Row> */}
        <TawkMessengerReact
        propertyId="6593e35c8d261e1b5f4e380f"
        widgetId="1hj4r097t" maxWidth={"245px"}/>

      <div className="footermaindiv">
      <Row
        style={{
          background: "#161616",
          padding:"20px"
        }}
      >
        <Col xs={24} md={24}>
          {/* < style={{ display: "flex" ,flexWrap:"wrap" , gap:"30px" , alignItems:"center", paddingTop: "40px" , justifyContent:"space-around", marginBottom:'20px'}}> */}
          {/* <h1 style={{ fontFamily: "Teko", color:"white", fontWeight: 600, letterSpacing:1, fontSize:"30px" }}>Are You Prepared To Initiate Your Project  <br/>  In Collaboration With Us?</h1> */}

            {/* <div
              style={{
                textAlign: "center",
                backgroundColor: "transparent",
                display: "flex",
                alignItems:"center",
                justifyContent:"flex-start"
              }}
            >
              <Image
                preview={false}
                alt={"Failed to load image"}
                width={50}
                height={50}
                src="/images/contact_us_11.png"
                style={{ marginRight:"20px"}}
              />
            <div>
            <Typography.Title style={{ fontSize: "28px",fontFamily:"Teko", color: "white", fontWeight:"bold", lineHeight: "25px" }}>Feel Free To Contact Us</Typography.Title>
            <Typography.Text
              style={{ fontSize: 18, color: "#fe1f07", fontWeight:"bold" }}
            >
              1 (917) 914-2837
            </Typography.Text>
            </div>
            </div> */}
          {/* <Col xs={24} md={6}>              
            <div style={{ display:"flex",flexDirection:"column" ,alignItems:"center"}}>                                                                                                                            
          <Typography.Title
              style={{fontSize: "28px", fontFamily:"Teko", color: "white", fontWeight: "bold" }}
            >
              Connect With Us
            </Typography.Title>
            <div
              style={{
                textAlign: "center",
                // padding: "0px 50px 0px",
                backgroundColor: "transparent",
                display:"flex",
                gap:20,
              }}
            >
              <Link href="https://www.linkedin.com/company/101635070/admin/feed/posts/">
              <a target="_blank" rel="noopener noreferrer">
                <Image
                preview={false}
                alt={"Failed to load image"}
                width={20}
                height={20}
                src="/images/contact_us_17.png"
                style={{cursor:"pointer"}}
              />
              </a>
              </Link>
              <Link href='https://www.facebook.com/profile.php?id=61555499817409'>
                <a target="_blank" rel="noopener noreferrer">
              <Image
                preview={false}
                alt={"Failed to load image"}
                width={20}
                height={20}
                src="/images/contact_us_19.png"
                style={{cursor:"pointer"}}
              />
              </a></Link>
              <Link href='https://twitter.com/logotrim'>
                <a target="_blank" rel="noopener noreferrer">
                <Image
                preview={false}
                alt={"Failed to load image"}
                width={20}
                height={20}
                src="/images/twitter_39.png"
                style={{cursor:"pointer"}}
              />
              </a>
              </Link>
              <Link href='https://www.instagram.com/logo_trim/'>
                <a target="_blank" rel="noopener noreferrer">
                <Image
                preview={false}
                alt={"Failed to load image"}
                width={20}
                height={20}
                src="/images/contact_us_23.png"
                style={{cursor:"pointer"}}
              />
              </a>
              </Link>
              <Link href='https://www.pinterest.com/logotrim/'><a>
              <Image
                preview={false}
                alt={"Failed to load image"}
                width={20}
                height={20}
                src="/images/pinterest_39.png"
                style={{cursor:"pointer"}}
              />
              </a></Link>

            </div>
            </div>
          </Col> */}
        

          <Row style={{ display:"flex" , alignItems:"center", justifyContent: "space-around", width:"100%", marginTop:"30px", marginBottom:"30px", gap:"30px"}} className="footerdirection">
            <Col
              xs={24} md={8}
              style={{ fontFamily: "Lato" }}
              className={"footer-column"}
            >
              <div style={{ display: "flex"}}>
                <Image
                  preview={false}
                  alt={"Failed to load image"}
                  width={200}
                  style={{ maxWidth: 245 }}
                  src="/images/logo_trim.png"
                />
              </div>
              <div style={{ padding: "10px 30px 0px 10px" }}>
                <p
                  style={{
                    fontSize: 16,
                    color: "white",
                    marginTop: 10,
                    paddingRight: "20px",
                    marginBottom: 30,
                    textAlign: "justify",
                  }}
                >
                  LogoTrim is a proficient logo designing company that
                  enhances your business branding with an eye-catchy look. Our
                  artistic designers craft creative custom logo designs. Get
                  your graphic design logo with 100% satisfaction.
                </p>
              </div>
            </Col>
                <Col
                  xs={24} md={4}
                  style={{
                    fontFamily: "Lato",
                  }}
                  className={"footer-column"}
                >
                  <p style={{ fontWeight: 600, fontSize: 18, color: "white" }}>
                    Quick Links
                  </p>
                  <List
                    className="footer-list"
                    size="small"
                    style={{ fontSize: 16 }}
                  >
                    <List.Item
                      key="home"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push("/")}
                    >
                      Home
                    </List.Item>
                    <List.Item
                      key="about"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push("/about")}
                    >

                      About Us
                    </List.Item>
                    <List.Item
                      key="blog"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push("/blog")}
                    >
                      Blog
                    </List.Item>
                    <List.Item
                      key="portfolio"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push("/portfolio")}
                    >
                      Portfolio 
                    </List.Item>
                     <List.Item
                      key="pricing"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push("/packages")}
                    >
                      Packages 
                    </List.Item>
                    
                    <List.Item
                      key="contact"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push("/contact")}
                    >
                      Contact Us
                    </List.Item>
                  </List>
                </Col>
                <Col
                  xs={24} md={4}
                  style={{

                    fontFamily: "Lato",
                  }}
                  className={"footer-column"}
                >
                  <p style={{ fontWeight: 600, fontSize: 18, color: "white" }}>
                    Services
                  </p>
                  <List
                    className="footer-list"
                    size="small"
                    style={{ fontSize: 14 }}
                  >
                    <List.Item
                      key="logo-design"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push("/logo-design")}
                    >
                      Logo Design
                    </List.Item>
                    <List.Item
                    key="graphics-design"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push("/graphics-design")}
                    >
                      Graphics Design
                    </List.Item>
                    <List.Item
                      key="website-design"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push("/website-design")}
                    >
                      Website Design
                    </List.Item>
                    <List.Item
                      key="website"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push("/app-design")}
                    >
                      Mobile App Design
                    </List.Item>
                    <List.Item
                      key="app-development"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push("/app-development")}
                    >
                      App Development
                    </List.Item>
                    <List.Item
                    key="web-development"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push("/web-development")}
                    >
                      Web Development
                    </List.Item>

                    <List.Item
                    key="digital-marketing"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push("/digital-marketing")}
                    >
                      Digital Marketing 
                    </List.Item>
                    
                    {/* <List.Item
                      key="digital-marketing"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push("/digital-marketing-agency")}
                    >
                      Digital Marketing
                    </List.Item>
                    <List.Item
                      key="small-business-branding"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push("/small-business-branding")}
                    >
                      Small Business Barnding
                    </List.Item>
                    <List.Item
                      key="branding-agency"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push("/branding-agency")}
                    >
                      Branding Agency
                    </List.Item>
                    <List.Item
                      key="packaging-design"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push("/packaging-design")}
                    >
                      Packaging Design
                    </List.Item>
                    <List.Item
                      key="seo"
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        router.push("/search-engine-optimization")
                      }
                    >
                      SEO
                    </List.Item> */}
                  </List>
                  
                </Col>
                {/* <Col
                  xs={24} md={6}
                  style={{
                    padding: "30px 0",

                    fontFamily: "Lato",
                  }}
                  className={"footer-column hide-column-on-phone"}
                >
                  <p style={{ fontWeight: 600, fontSize: 18, color: "#fe1f07" }}>
                    Affordable Logos
                  </p>
                  <List
                    className="footer-list"
                    size="small"
                    style={{ fontSize: 14 }}
                  >
                    <List.Item
                      key="monogram-logo"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push("/monogram-logo-design")}
                    >
                      Monogram
                    </List.Item>
                    <List.Item
                      key="corporate-logo"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push("/corporate-logo-design")}
                    >
                      Corporate
                    </List.Item>
                    <List.Item
                      key="combination-logo"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push("/combination-logo-design")}
                    >
                      Combination
                    </List.Item>
                    <List.Item
                      key="abstract-logo"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push("/abstract-logo-design")}
                    >
                      Abstract
                    </List.Item>
                    <List.Item
                      key="illustrative-logo"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push("/illustrative-logo-design")}
                    >
                      Illustrative
                    </List.Item>
                    <List.Item
                      key="animated-logo"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push("/animated-logo-design")}
                    >
                      Animated
                    </List.Item>
                    <List.Item
                      key="3d-logo"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push("/3d-logo-design")}
                    >
                      3D
                    </List.Item>
                    <List.Item
                      key="pictorial-logo"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push("/pictorial-logo-design")}
                    >
                      Pictorial
                    </List.Item>
                    <List.Item
                      key="calligraphy-logo"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push("/calligraphy-logo-design")}
                    >
                      Calligraphy
                    </List.Item>
                    <List.Item
                      key="emblem-logo"
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        router.push("/emblem-logo-design")
                      }
                    >
                      Emblem
                    </List.Item>
                    <List.Item
                      key="wordmark-logo"
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        router.push("/wordmark-logo-design")
                      }
                    >
                      Word Mark
                    </List.Item>
                  </List>
                </Col>
                <Col
                  xs={24} md={6}
                  style={{
                    padding: "30px 0",

                    fontFamily: "Lato",
                  }}
                  className={"footer-column hide-column-on-phone"}
                >
                  <p style={{ fontWeight: 600, fontSize: 18, color: "#fe1f07" }}>
                    Professional Logo Design By States
                  </p>
                  <List
                    className="footer-list"
                    size="small"
                    style={{ fontSize: 14 }}
                  >
                    <List.Item
                      key="california"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push("/ca-logo-design")}
                    >
                      California
                    </List.Item>
                    <List.Item
                      key="new-york"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push("/nyc-logo-design")}
                    >
                      New York
                    </List.Item>
                    <List.Item
                      key="florida"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push("/fl-logo-design")}
                    >
                      Florida
                    </List.Item>
                    <List.Item
                      key="texas"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push("/tx-logo-design")}
                    >
                      Texas
                    </List.Item>
                    <List.Item
                      key="hawaii"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push("/hi-logo-design")}
                    >
                      Hawaii
                    </List.Item>

                    <List.Item
                      key="arizona"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push("/az-logo-design")}
                    >
                      Arizona
                    </List.Item>
                    <List.Item
                      key="oklahoma"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push("/ok-logo-design")}
                    >
                      Oklahoma
                    </List.Item>
                  </List>
                </Col> */}
                {/* </Col> */}
                <Col xs={24} md={6} style={{alignItems:"center"}} >
              <Typography.Title style={{ fontSize: 20, color: "white", fontWeight:"bold" , fontFamily:"Lato", marginBottom:"30px" }}>Feel Free To Contact Us</Typography.Title>
            <div
              style={{
                textAlign: "center",
                backgroundColor: "transparent",
                display: "flex",
                alignItems:"center",
                justifyContent:"flex-start",
                marginBottom:"30px", gap:"10px"
              }}
            >
              <Image
                preview={false}
                alt={"Failed to load image"}
                width={20}
                height={20}
                src="/images/contact_us_11.png"
                style={{ marginRight:"50px"}}
              />
            <div>
            <Typography.Text
              style={{ fontSize: 14, color: "white", fontWeight:"bold" }}
            >
              1 (917) 914-2837
            </Typography.Text>
            </div>
            
            </div>
            <div
              style={{
                textAlign: "center",
                backgroundColor: "transparent",
                display: "flex",
                alignItems:"center",
                justifyContent:"flex-start",
                marginBottom:"30px", gap:"10px"
              }}
            >
              <Image
                preview={false}
                alt={"Failed to load image"}
                width={20}
                height={20}
                src="/images/contact_us_14.png"
                style={{ marginRight:"50px"}}
              />
            <div>
            <Typography.Text
              style={{ fontSize: 14, color: "white", fontWeight:"bold" }}
            >
              support@logotrim.com
            </Typography.Text>
            </div>
            
            </div>
                <h1
                  style={{
                    fontSize: 20,
                    color: "white",
                    paddingRight: "0px",
                    textAlign: "justify",
                    fontWeight:"bold"
                   
                  }}>Secure Payment Method</h1>
                <Image
                  preview={false}
                  alt={"Failed to load image"}
                  width={200}
                  style={{ maxWidth: 220 }}
                  src="/images/index_red_96.png"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                />
                </Col>
          </Row>
        </Col>
      </Row>
      </div>
      <Row
        style={{
          background: "#292929",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Col xs={24} md={20}>
          <Row>
            <Col xs={24} md={14} style={{ padding: "10px 0" }}>
              <p style={{ color: "rgba(255,255,255,.9)", textAlign: "center", display: 'inline' }}>
                All © Rights {new Date().getFullYear()} Reserved by LogoTrim
              </p>
              &emsp;
              <div
                style={{
                  display: "inline",
                  alignItems: "center",
                  placeContent: "center",
                }}
              >

                <a
                  onClick={() => router.push("/privacy-and-policy")}
                  style={{ color: "white", fontWeight: 100, padding: "0 10px", cursor: "pointer" }}
                >
                  Privacy & Policy
                </a>
                <a
                  onClick={() => router.push("/terms-conditions")}
                  style={{ color: "white", fontWeight: 100, padding: "0 10px", cursor: "pointer" }}
                >
                  Terms & Conditions
                </a>
              </div>
            </Col>
            <Col xs={24} md={10} style={{ padding: "10px 0", display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  placeContent: "center",
                }}
              >
                <p style={{ color: "#fe1f07", textAlign: "right", display: 'inline', margin: 0 }}>
                  Follow Us On
                </p>
                &emsp;
                <Link href={"https://www.facebook.com/profile.php?id=61556228949073"}>
                  <a target="_blank" rel="noopener noreferrer">
                    <div className="hoverRed" style={{ width: '25px', height: '25px', background: 'grey', borderRadius: '2px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <FaFacebookF style={{ fontSize: '12px', color: 'white' }} />
                    </div>
                  </a>
                </Link>
                &emsp;
                <Link href={"https://www.pinterest.com/logotrim/"}>
                  <a target="_blank" rel="noopener noreferrer">
                    <div className="hoverRed" style={{ width: '25px', height: '25px', background: 'grey', borderRadius: '2px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <FaPinterestP style={{ fontSize: '12px', color: 'white' }} />
                    </div>
                  </a>
                </Link>
                &emsp;
                <Link href={"https://www.instagram.com/logo_trim/"}>
                  <a target="_blank" rel="noopener noreferrer">
                    <div className="hoverRed" style={{ width: '25px', height: '25px', background: 'grey', borderRadius: '2px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <FaInstagram style={{ fontSize: '14px', color: 'white' }} />
                    </div>
                  </a>
                </Link>
                &emsp;
                <Link href={"https://www.youtube.com/channel/UC94ZNnMN2MeSAcrtteE0ndA"}>
                  <a target="_blank" rel="noopener noreferrer">
                    <div className="hoverRed" style={{ width: '25px', height: '25px', background: 'grey', borderRadius: '2px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <FaYoutube style={{ fontSize: '14px', color: 'white' }} />
                    </div>
                  </a>
                </Link>
                &emsp;
                <Link href={"https://www.linkedin.com/company/101635070/admin/feed/posts/"}>
                  <a target="_blank" rel="noopener noreferrer">
                    <div className="hoverRed" style={{ width: '25px', height: '25px', background: 'grey', borderRadius: '2px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <FaLinkedin  style={{ fontSize: '14px', color: 'white' }} />
                    </div>
                  </a>
                </Link>
                &emsp;
                <Link href={"mailto:support@logotrim.com"}>
                  <a target="_blank" rel="noopener noreferrer">
                    <div className="hoverRed" style={{ width: '25px', height: '25px', background: 'grey', borderRadius: '2px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <AiOutlineMail style={{ fontSize: '14px', color: 'white' }} />
                    </div>
                  </a>
                </Link>

                {/* <AiFillTwitterSquare style={{fontSize:'25px'}}/> */}
              </div>



            </Col>
          </Row>
        </Col>

      </Row>
    </Footer>
  );
}

export default ClientFooter