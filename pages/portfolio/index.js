import React from 'react'
import PortfolioComponent from '../../components/Portfolio';
import TabsComponent from '../../components/TabsWhite';
import CustomBanner from '../../components/CustomBanner';
import ClientLayout from '../../components/ClientLayout';
import MainButton from '../../components/MainButton';
import { useRouter } from 'next/router';


const Portfolio = () => {
  const router = useRouter()
    return (
        <div>
           <ClientLayout head={{ title: "Portfolio for Creative Logo Designs, Mobile Apps & Animation", description: "Do you want to have a creative portfolio? Get in touch with us to maintain a portfolio of famous logos, brands, mobile apps, e-commerce websites and animation." }}>
           <CustomBanner
            height={700}
            title={<>Welcome To LogoTrim <br/><span style={{color:'#fe1f07'}}> Brand Design Portfolio </span> </>}
            titleLevel={1}
            text={"You can view a few of LogoTrim's most recent projects here. These are a few works regarding the logo, website, and app designs we have finished for different clients over the past year. If you want to create any of these for your company, don't hesitate to contact us to discuss your project."}
            titleStyles={{
              marginTop: "5px",
              marginBottom: "10px",
              fontWeight: 900,
              fontSize: "55px",
              color: "black",
            }}
            image={"/images/App_design_03.png"}
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
      <TabsComponent
            //     title="We Serve Almost All Industries"
            //     subtitle={"See Our Complete Archive Below And Filter By Project Type."}
            //    bg="white"
               bg="white"
               title={
                 <>
                   Take A View Of {" "}
                   <span style={{ color: "#fe1f07" }}> Our Creative Work </span>
                 </>
               }
               subtitle={
                 "LogoTrim offers a range of creative logo, website, and app design and development services to help you grow your business."
               }
                tabs={[
                    {
                        name: "All",
                        key: "1",
                        // content: <PortfolioComponent isWide={false} category="PortfolioLogo" />
                        content: <PortfolioComponent category="All" isWide={true} fullWidth />,
                    },
                    {
                        name: "Logos",
                        key: "2",
                        // content: <PortfolioComponent isWide={false} category="PortfolioBranding" />
                        content: <PortfolioComponent category="Logo" isWide={true} fullWidth />,
                    },
                    {
                        name: "Mobile App",
                        key: "3",
                        // content: <PortfolioComponent isWide={false} category="Apps" />
                        content: <PortfolioComponent category="Apps" isWide={true} fullWidth />,
                    },
                    {
                        name: "Web & Ecommerce",
                        key: "4",
                        // content: <PortfolioComponent isWide={false} category="PortfolioWeb" />
                        content: <PortfolioComponent category="Webs" isWide={true} fullWidth />,
                    },                  
                ]}
            />
            </ClientLayout>
    </div>
  )
}


export default Portfolio