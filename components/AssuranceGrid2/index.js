import { Image } from "antd";
import { Row, Col, Typography } from "antd";
import { useRouter } from 'next/router'
import Link from 'next/link'

const AssuranceGrid2 = ({ title, subtitle, margin = "30px 0 0 0" }) => {
  const router = useRouter()
  return (
    <Row
      style={{ textAlign: "center", justifyContent: "center", margin: margin,background:'white' }}
    >
      {(title || subtitle) && (
        <Col span={20}>
          <Typography.Title
          level={3}
            style={{
              color: "black",
              fontSize: 40,
              fontWeight: 600,
              marginBottom: 5,
              fontFamily:"Teko",
            }}
          >
            {title}
          </Typography.Title>
          <Typography.Title
          level={4}
            style={{
              color: "black",
              fontSize: 16,
              fontWeight: "normal",
              marginBottom: 5,
            }}
          >
            {subtitle}
          </Typography.Title>
        </Col>
      )}
      <Col span={20}>
        <Row
          style={{ alignItems: "center", padding: "25px 0", display:"flex", rowGap: "20px"  }}
          justify="space-evenly"
          gutter={20}
        >
          <Col xs={24} md={6}>
            <div
               style={{
                textAlign: "center",
                padding: "4px 20px",
                backgroundColor: "transparent",
                display: "flex",
                gap:10,
                justifyContent:"center"
              }}
            >
              <Image
                preview={false}
                alt={"Failed to load image"}
                width={50}
                height={50}
                src="/images/contact_us_14.png"
              />
            <div style={{lineHeight: 0.1 , justfyItems:"left"}} >
            <Typography.Title style={{ fontSize: 25,fontFamily:"Teko", color: "black", fontWeight:"bolder" }}>SEND US AN EMAIL</Typography.Title>
            <Typography.Text
              style={{ display:'block',fontSize: 14, color: "gray", fontWeight: "800" }}
            >
              Support@logotrim.com
            </Typography.Text>
            </div>
            </div>
          </Col>
          <Col xs={24} md={6}>
            <div
              style={{
                textAlign: "center",
                padding: "4px 20px",
                backgroundColor: "transparent",
                display: "flex",
                justifyContent:"center"
              }}
            >
              <Image
                preview={false}
                alt={"Failed to load image"}
                width={50}
                height={50}
                src="/images/contact_us_11.png"
              />
            <div style={{lineHeight: 0.1 , justfyItems:"left"}} >
            <Typography.Title style={{ fontSize: 25,fontFamily:"Teko", color: "black", fontWeight:"bolder" }}>MAKE A PHONE CALL</Typography.Title>
            <Typography.Text
              style={{ fontSize: 14, color: "gray", fontWeight:"bolder" }}
            >
              1 (917) 914-2837
            </Typography.Text>
            </div>
            </div>
          </Col>
          <Col xs={24} md={6}>
          <div
              style={{
                textAlign: "center",
                padding: "4px 20px",
                backgroundColor: "transparent",
                display: "flex",
                flexDirection:"column"

              }}
            >
          <Typography.Title
              style={{fontSize: 20, fontFamily:"Teko", color: "black", fontWeight: "bolder" }}
            >
              FOLLOW US ON
            </Typography.Title>
            <div
              style={{
                textAlign: "center",
                // padding: "4px 20px",
                backgroundColor: "transparent",
                display:"flex",
                gap:20,
                justifyContent: "center",
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
            </div>
           </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default AssuranceGrid2;
