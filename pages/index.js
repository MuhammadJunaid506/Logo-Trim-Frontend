import { Col, Row, Typography, Tabs,Image } from "antd";
import { useRouter } from "next/router";
import { FaLayerGroup } from "react-icons/fa";
import { BsFolderSymlink } from "react-icons/bs";
import { MdOutlineDraw } from "react-icons/md";
import ClientLayout from "../components/ClientLayout";
import MainButton from "../components/MainButton";
import ContactForm from "../components/ContactForm";
import CustomBanner from "../components/CustomBanner";
import SliderBanner from "../components/SliderBanner";
import AssuranceGrid from "../components/AssuranceGrid";
import InfoSection from "../components/infoSection";
import Companies from "../components/Comapnies";
import TwoColSection1 from "../components/TwoColSection1";
import Portfolio from "../components/Portfolio";
import TabsComponent from "../components/TabsWhite";
import TabsComponent2 from "../components/Tabs";
import Plans from "../components/Plans";
import TwoColumnFeatures from "../components/TwoColumnFeatures";
import Reviews from "../components/Reviews";

const Home = () => {
  const { TabPane } = Tabs;
  const router = useRouter();
  return (
    <ClientLayout
      head={{
        title: "Get Your Digital Marketing Needs Met with Logo Trim",
        description:
          "Logo Trim is a full-service digital agency that helps businesses of all sizes grow their online presence. We offer a wide range of services, including mobile app design and development and web design",
      }}
    >
      <CustomBanner
        height={700}
        title={
          <>
            Full-Service Digital Agency Specializing In {" "}
            <span style={{ color: "#fe1f07", lineHeight:0.6 }}>
              {" "}
              Logo Design, Web Design, Mobile App{" "}
            </span>{" "}
            and Web Technology
          </>
        }
        titleLevel={1}
        text={
          "Engage with your target audience by utilizing compelling web and graphic design. Our passion lies in assisting brands in crafting user-centric digital experiences that draw, captivate, and convert the ideal audience."
        }
        titleStyles={{
          marginTop: "5px",
          marginBottom: "10px",
          fontWeight: 600,
          fontSize: "55px",
          color: "black",
        }}
        containerStyles={{
          position: "relative",
        }}
        image={"/images/headerv.png"}
        bg={"/images/Background.png"}
        imageDimentions={[500, 500]}
        imageStyles={{ width: "450px" }}
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
      <Row
            style={{
              display: "flex",
              justifyContent: "center",
      
              width:'100%',
              alignItems: "center",
              marginTop: "-80px",
              zIndex: 1,
            }}
          >
            <Col xs={24} md={14}  >
            <Row style={{width:'100%', justifyContent:'center',padding:"20px 30px"}}>
              <Col xs={12} md={5}  style={{display:'flex', justifyContent:'center', alignItems:'center',flexDirection:'column'}}>
                <Image
                src="/images/index_red_10.png"
                width={120}
                />
                </Col>
                <Col xs={12} md={5}  style={{display:'flex', justifyContent:'center', alignItems:'center',flexDirection:'column'}}>
                <Image
                src="/images/index_red_12.png"
                width={120}
                />
                </Col>
                <Col xs={12} md={5}  style={{display:'flex', justifyContent:'center', alignItems:'center',flexDirection:'column'}}>
                <Image
                src="/images/index_red_07.png"
                width={80}
                />
                </Col>
                <Col xs={12} md={5}  style={{display:'flex', justifyContent:'center', alignItems:'center',flexDirection:'column'}}>
                <Image
                src="/images/index_red_04.png"
                width={100}
                />
                </Col>
            </Row>
            </Col>
            <Col xs={24} md={10}>
              <div style={{backgroundColor:'black', borderTopLeftRadius:50,borderBottomLeftRadius:50}}>
                <Row style={{width:'100%', justifyContent:'center',padding:"20px 30px"}}>
                <Col xs={24} md={4}  style={{display:'flex', justifyContent:'center', alignItems:'center',flexDirection:'column'}}>
                  <Image 
                  src="/images/icon1.png"
                  height={40}
                  />
                    
                  </Col>
                  <Col xs={24} md={10} style={{padding:"0 10px",display:'flex', justifyContent:'center', alignItems:'center',flexDirection:'column', borderLeft:'1px solid #fe1f07',borderRight:'1px solid #fe1f07'}}>
                  <p style={{color:'white', fontSize:'12px', margin:0, textAlign:'right'}}> Call: 1 (917) 914-2837</p>
                  <p style={{color:'white', fontSize:'12px', margin:0, textAlign:'right'}}>  1 (917) 914-2837</p>
                  </Col>
                  <Col xs={24} md={10} style={{padding:"0 10px", display:'flex', justifyContent:'center',alignItems:'center', flexDirection:'column'}}>
                  <p style={{color:'white', fontSize:'12px', margin:0, textAlign:'right'}}> Email: info@logotrim.com</p>
                  <p style={{color:'white', fontSize:'12px', margin:0, textAlign:'right'}}>  support@logotrim.com</p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <br/><br/>

      <TwoColSection1
        image={"/images/index_red_17.png"}
        imageDimentions={[785, 442]}
        imageStyles={{ width: "500px" }}
        containerStyles={{ padding: "50px 0",position:'relative' }}
        title={
          <>
            Empowering Businesses,{" "}
            <span style={{ color: "#fe1f07" }}>
              {" "}
              the Foremost Full Service 
            </span>{" "}
            Digital Marketing Agency {" "}
            <span style={{ color: "#fe1f07" }}> in the USA.</span>
          </>
        }
        titleStyles={{
          marginTop: "10px",
          marginBottom: "0px",
          fontWeight: 600,
          fontSize: "40px",
          color: "black",
        }}
        multitext={[
          "A logo is the priority of a business, brand, or organization to establish a strong foundation. Whether it is a start-up or a corporation, an elegant brand identity plays a lead role in attracting the target audience. That is why it is important to hire a top logo design firm to connect with your customers, not just your business. Instead of searching for the top logo Design Company near me, get in touch today with Trim Logo for top logo design services.",
          "Logo Trim is a renowned Logo design agency in the USA offering amazing company logo designs to clients across the world with a team of highly creative minds."
        ]}
      />

      <CustomBanner
        height={400}
        title={
          <>
            Looking For Digital Agency Experts to Identify  <br /> the Optimal Solution for Managing Your Business?
          </>
        }
        titleLevel={2}
        onlyText={true}
        text={
          <>
            Engage your audience by employing persuasive web and graphic design,  <br /> driven by a passion for assisting brands in crafting digital experiences that prioritize human needs.
          </>
        }
        titleStyles={{
          marginTop: "5px",
          marginBottom: "10px",
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
      bg="white"
      
        tabs={[
          {
            key: "logo-designing",
            name: "Logo Designing",
            content: (
              <TwoColSection1
              isWide={true}
                title={
                  <>
                    <span style={{ color: "#fe1f07" }}>
                    Get better solutions with our 
                    </span>{" "}
                    Professional Logo Design services
                  </>
                }
                onlyText
                titleColor={"black"}
                textColor={"black"}
                background={"transparent"}
                titleStyles={{
                fontWeight: 600,
                }}
                multitext={[
                  "Want to lift your brand value? Get our expert logo design services in the USA now. Our epic logo designers craft 100% unique logos that are simple and expose all about your brand's do's. As a holder of certified logo designers, the best assurance we can give you is that every design reflects your vision. Your audience will be impressed. Twinkle in the crowded marketplace with our state-of-the-art designs that leave an eternal footmark."
                ]}
                list={[
                  "Tailored logo concepts",
                  "Brand-focused approach",
                  "Creative design solutions",
                  "Memorable and impactful logos",
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
            key: "website-designing",
            name: "Web Designing",
            content: (
              <TwoColSection1
                title={
                  <>
                    <span style={{ color: "#fe1f07" }}>
                    Built the most stunning 
                    </span>{" "}
                    Web Design Websites with us
                  </>
                }
                onlyText
                titleColor={"black"}
                textColor={"black"}
                background={"transparent"}
                multitext={[
                  "Your online presence, especially your website, is a way to give better sales at a low cost. All you do is digitally operate to convince the visiting customers to take action. But it is not easy to let them on your website if it is not graphically designed enough, appears dull, does not appeal to the user's eyes, and is not SEO-friendly. With our cutting-edge web design services, you make it the opposite. Our inventive-minded team blends creativeness with functionality to design websites that captivate and engage users. From intuitive navigation to visually striking layouts, we ensure your website echoes your brand kernel. Promote yourself and drive conversions with us.",
                ]}
                list={[
                  "User-centric design approach",
                  "Responsive and mobile-friendly",
                  "Usage of Visual design principles",
                  "Smooth UI/UX",
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
            key: "app-designing",
            name: "App Designing",
            content: (
              <TwoColSection1
                title={
                  <>
                    <span style={{ color: "#fe1f07" }}>
                    Get the most Innovative 
                    </span>{" "}
                    App Design Solutions
                  </>
                }
                onlyText
                titleColor={"black"}
                textColor={"black"}
                background={"transparent"}
                multitext={[
                  "Better user engagement, easy access to use or get your product/service, and getting a competitive edge and revenue are possible with an app. Let’s not lose this chance and use its full power with our expert app design services in the USA. The day you see our app launch, your audience will love it as LogoTrim builds intuitive, user-friendly, and highly mesmerizing graphically designed mobile apps. From concept to launch, we prioritize UX/UI. Confirming that your app sticks out in the crowded app market is with us. Partner with us, mix your excellent app idea with ours, and see what it develops.",
                ]}
                list={[
                  "User-centric interface design",
                  "Unbroken navigation",
                  "Engaging UI/UX",
                  "Customization in the app",
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
            key: "web-development",
            name: "Web Development",
            content: (
              <TwoColSection1
                title={
                  <>
                    <span style={{ color: "#fe1f07" }}>
                    Come up with the Robust 
                    </span>{" "}
                    Web Development Solutions
                  </>
                }
                onlyText
                titleColor={"black"}
                textColor={"black"}
                background={"transparent"}
                multitext={[
                  "Your website is a path to digital revenue generation. Every day, thousands of people visit it, and every second counts. Your brand information is shown here and usually contains photos, videos, and graphic text. This is what viewers adore. Not having a website is like a product without a company tag. No one will want it. So, if you are a startup or an SME without a website, let’s take action and empower your digital presence with our comprehensive web development services. Our team of experts builds scalable, secure websites. From e-commerce platforms to corporate websites, we leverage the latest technologies. Partner with us now.",
                ]}
                list={[
                  "Customized development solutions",
                  "Scalable architecture",
                  "Advanced security measures",
                  "Performance optimization",
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
            key: "SEO",
            name: "SEO",
            content: (
              <TwoColSection1
                title={
                  <>
                    <span style={{ color: "#fe1f07" }}>
                    Enhance your brand virtually with 
                    </span>{" "}
                    our Strategic SEO Solutions
                  </>
                }
                onlyText
                titleColor={"black"}
                textColor={"black"}
                background={"transparent"}
                multitext={[
                  "Give a new charm to your online visibility with our strategic SEO services in the USA. LogoTrim implements verified strategies to increase your search engine rankings and drive organic traffic to your website. Our SEO strategists and marketers optimize every aspect of your online existence, from keyword research to off and on-page optimization—partner with us to increase your digital reach and achieve growth.",
                ]}
                list={[
                  "Content optimization",
                  "Targeted keyword optimization",
                  "Link building strategies",
                  "Technical SEO audit",
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
      <br/>

      <InfoSection title="Got A New Project?" description="Discuss with Our Experts & Choose the Best Package for Your Business" />
      
      <Portfolio
        title={
          <>
            Explore Our{" "}
            <span style={{ color: "#fe1f07" }}> Latest Projects </span>
          </>
        }
        subtitle="Our full-service digital agency consists of passionate designers and developers dedicated to their craft. We've collaborated with numerous clients and consistently delivered top-notch results."
        columns={3}
        titleStyles={{
          fontSize: 50,
          fontWeight: 700,
          marginBottom: 0,
          textTransform: "uppercase",
        }}
        category={"Home"}
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


      <TabsComponent
        bg="#f0f3f9"
        title={
          <>
            <span style={{ color: "#fe1f07" }}>Choose pricing plans that are a {" "}</span>  <br />
            <span> perfect fit for your needs! </span>
          </>
        }
        titleStyle={{width:"100%"}}
        subtitle={
          "Our online marketing agency provides a variety of creative services to support the growth of your business."
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

      <Reviews category="Review" />

      <ContactForm
        title={
          <>
            What Makes Logo Trim the  <br />  Top Digital Marketing Agency in the USA?
          </>
        }
        subtitle={
          <>
          Smart companies require smart digital solutions. Discover the services we can provide for your business.
          </>
        }
      />
    </ClientLayout>
  );
};
export default Home;
