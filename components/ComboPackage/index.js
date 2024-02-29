import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Row, Col, Typography, Image } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { BsCheckLg, BsSquareFill } from "react-icons/bs";
const { Panel } = Collapse;
import { Collapse } from "antd";
import { useRouter } from "next/router";

const ComboPackage = ({
  title,
  questions,
  buttons,
  others,
  image,
  height,
  bg,
  titleStyles,
}) => {
  const [loadCount, setLoadCount] = useState(0);
  const [portfolio, setPortfolio] = useState([]);
  const [expandIconPosition, setExpandIconPosition] = useState("end");
  const router = useRouter();

  const { ref, inView } = useInView({
    threshold: 0,
  });
  useEffect(() => {
    setLoadCount(loadCount + 1);
  }, [inView]);

  const antIcon = (
    <LoadingOutlined
      style={{
        color: "#fe1f07",
        fontSize: 55,
      }}
      spin
    />
  );

  const contentStyle = {
    color: "#ffblaf",
    lineHeight: "160px",
    textAlign: "center",
  };

  return (
    <Row
      ref={ref}
      style={{
        background: "#efefef",
        minHeight: height ? height : 550,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        padding: "40px 0",
      }}
    >
      <Col xs={24} sm={24} md={24} lg={22}>
        <Row
          style={{
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <Typography.Title
            level={3}
            style={{
              fontWeight: "bolder",
              textAlign: "center",
              ...titleStyles,
            }}
          >
            {title}
          </Typography.Title>
        </Row>
        <Row style={{ justifyContent: "center", alignItems: "center" }}>
          <Col
            xs={24}
            className={inView && loadCount < 3 ? "flip-in-horizontal" : ""}
          >
            <Row
              style={{
                padding: 20,
                alignItems: "center",
                position: "relative",
              }}
            >
              {/* <div style={{ position: "absolute", right: 50, top: 0 }}>
                <Image
                  src="/images/bestSeller.webp"
                  width={120}
                  height={110}
                  preview={false}
                />
              </div> */}

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  // backgroundColor: "#2a2a2a",
                  backgroundColor: "white",
                  width: "100%",
                  margin: "10px 0",
                  padding: "7px",
                  border: "none",
                  borderRadius: "10px",
                  boxshadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
                }}
                className="tekoFont"
              >
                <Row
                  gutter={20}
                  style={{
                    width: "100%",
                    display: "flex",
                    padding: "20px 10px",
                  }}
                >
                  <Col xs={24} md={18}>
                    <Typography.Title
                      level={2}
                      style={{
                        color: "black",
                        fontSize: 30,
                        fontWeight:"bold",
                        marginBottom: 20,
                        marginLeft: 35,
                      }}
                    >
                      <>
                        COMPLETE{" "}<br></br>
                        <span style={{ color: "#fe1f07" }}> BRANDING SOLUTIONS </span>
                      </>
                    </Typography.Title>
                    <Row gutter={20}>
                      <Col xs={24} md={8}>
                        <Typography.Title
                          level={4}
                          style={{
                            color: "black",
                            fontSize: 18,
                            fontWeight: 600,
                            marginBottom: 5,
                            marginLeft: 35,
                          }}
                        >
                          {"LOGO"}
                        </Typography.Title>
                        <ul
                          style={{
                            listStyleType: "none",
                            paddingLeft: 10,
                          }}
                        >
                          <li
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "flex-start",
                              alignItems: "center",
                              margin: "5px 0",
                              fontFamily:"Poppins", fontSize:15
                            }}
                          >
                            <p
                              style={{
                                fontSize: 14,
                                color: "black",
                                // display: "inline-block",
                                margin: 0,
                              }}
                            >
                              <BsCheckLg
                                style={{
                                  color: "white",
                                  fontSize: 10,
                                  display: "inline",
                                }}
                              />
                              &emsp;
                              {"Unlimited Concepts"}
                            </p>
                          </li>
                          <li
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "flex-start",
                              alignItems: "center",
                              margin: "5px 0",
                              fontFamily:"Poppins", fontSize:15
                            }}
                          >
                            <p
                              style={{
                                fontSize: 14,
                                color: "black",
                                // display: "inline-block",
                                margin: 0,
                              }}
                            >
                              <BsCheckLg
                                style={{
                                  color: "white",
                                  fontSize: 10,
                                  display: "inline",
                                }}
                              />
                              &emsp;
                              {"Unlimited Revisions"}
                            </p>
                          </li>
                          <li
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "flex-start",
                              alignItems: "center",
                              margin: "5px 0",
                              fontFamily:"Poppins", fontSize:15
                            }}
                          >
                            <p
                              style={{
                                fontSize: 14,
                                color: "black",
                                // display: "inline-block",
                                margin: 0,
                              }}
                            >
                              <BsCheckLg
                                style={{
                                  color: "white",
                                  fontSize: 10,
                                  display: "inline",
                                }}
                              />
                              &emsp;
                              {"4 Dedication Logo Designers"}
                            </p>
                          </li>
                          <li
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "flex-start",
                              alignItems: "center",
                              margin: "5px 0",
                              fontFamily:"Poppins", fontSize:15
                            }}
                          >
                            <p
                              style={{
                                fontSize: 14,
                                color: "black",
                                // display: "inline-block",
                                margin: 0,
                              }}
                            >
                              <BsCheckLg
                                style={{
                                  color: "white",
                                  fontSize: 10,
                                  display: "inline",
                                }}
                              />
                              &emsp;
                              {"Turn Arround 48-72 hours"}
                            </p>
                          </li>
                        </ul>
                      </Col>
                      <Col xs={24} md={8}>
                        <Typography.Title
                          level={4}
                          style={{
                            color: "black",
                            fontSize: 18,
                            fontWeight: 600,
                            marginBottom: 5,
                            marginLeft: 35,
                          }}
                        >
                          {"STATIONARY"}
                        </Typography.Title>
                        <ul
                          style={{
                            listStyleType: "none",
                            paddingLeft: 10,
                          }}
                        >
                          <li
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "flex-start",
                              alignItems: "center",
                              margin: "5px 0",
                              fontFamily:"Poppins", fontSize:15
                            }}
                          >
                            <p
                              style={{
                                fontSize: 14,
                                color: "black",
                                // display: "inline-block",
                                margin: 0,
                              }}
                            >
                              <BsCheckLg
                                style={{
                                  color: "white",
                                  fontSize: 10,
                                  display: "inline",
                                }}
                              />
                              &emsp;
                              {"Business Card Design"}
                            </p>
                          </li>
                          <li
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "flex-start",
                              alignItems: "center",
                              margin: "5px 0",
                              fontFamily:"Poppins", fontSize:15
                            }}
                          >
                            <p
                              style={{
                                fontSize: 14,
                                color: "black",
                                // display: "inline-block",
                                margin: 0,
                              }}
                            >
                              <BsCheckLg
                                style={{
                                  color: "white",
                                  fontSize: 10,
                                  display: "inline",
                                }}
                              />
                              &emsp;
                              {"Letterhead Design"}
                            </p>
                          </li>
                          <li
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "flex-start",
                              alignItems: "center",
                              margin: "5px 0",
                              fontFamily:"Poppins", fontSize:15
                            }}
                          >
                            <p
                              style={{
                                fontSize: 14,
                                color: "black",
                                // display: "inline-block",
                                margin: 0,
                              }}
                            >
                              <BsCheckLg
                                style={{
                                  color: "white",
                                  fontSize: 10,
                                  display: "inline",
                                }}
                              />
                              &emsp;
                              {"Envelope Design"}
                            </p>
                          </li>
                          <li
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "flex-start",
                              alignItems: "center",
                              margin: "5px 0",
                              fontFamily:"Poppins", fontSize:15
                            }}
                          >
                            <p
                              style={{
                                fontSize: 14,
                                color: "black",
                                // display: "inline-block",
                                margin: 0,
                              }}
                            >
                              <BsCheckLg
                                style={{
                                  color: "white",
                                  fontSize: 10,
                                  display: "inline",
                                }}
                              />
                              &emsp;
                              {"Broucher Design"}
                            </p>
                          </li>
                        </ul>
                        </Col>
                        <Col xs={24} md={8}>
                        <Typography.Title
                          level={4}
                          style={{
                            color: "black",
                            fontSize: 18,
                            fontWeight: 600,
                            marginBottom: 5,
                            marginLeft: 35,
                          }}
                        >
                          {"SOCIAL MEDIA DESIGN"}
                        </Typography.Title>
                        <ul
                          style={{
                            listStyleType: "none",
                            paddingLeft: 10,
                          }}
                        >
                          <li
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "flex-start",
                              alignItems: "center",
                              margin: "5px 0",
                              fontFamily:"Poppins", fontSize:15
                            }}
                          >
                            <p
                              style={{
                                fontSize: 14,
                                color: "black",
                                // display: "inline-block",
                                margin: 0,
                              }}
                            >
                              <BsCheckLg
                                style={{
                                  color: "white",
                                  fontSize: 10,
                                  display: "inline",
                                }}
                              />
                              &emsp;
                              {"Any 3 of your choice"}
                            </p>
                          </li>
                          <li
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "flex-start",
                              alignItems: "center",
                              margin: "5px 0",
                              fontFamily:"Poppins", fontSize:15
                            }}
                          >
                            <p
                              style={{
                                fontSize: 14,
                                color: "black",
                                // display: "inline-block",
                                margin: 0,
                              }}
                            >
                              <BsCheckLg
                                style={{
                                  color: "white",
                                  fontSize: 10,
                                  display: "inline",
                                }}
                              />
                              &emsp;
                              {"(Facebook , LInkedin , Twitter, Youtube)"}
                            </p>
                          </li>
                        </ul>
                        </Col>
                      
                    </Row>
                    <br />

                    <Row gutter={20}>
                      <Col xs={24} md={8}>
                        <Typography.Title
                          level={4}
                          style={{
                            color: "black",
                            fontSize: 18,
                            fontWeight: 600,
                            marginBottom: 5,
                            marginLeft: 35,
                          }}
                        >
                          {"WEBSITE"}
                        </Typography.Title>
                        <ul
                          style={{
                            listStyleType: "none",
                            paddingLeft: 10,
                          }}
                        >
                          <li
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "flex-start",
                              alignItems: "center",
                              margin: "5px 0",
                              fontFamily:"Poppins", fontSize:15
                            }}
                          >
                            <p
                              style={{
                                fontSize: 14,
                                color: "black",
                                // display: "inline-block",
                                margin: 0,
                              }}
                            >
                              <BsCheckLg
                                style={{
                                  color: "white",
                                  fontSize: 10,
                                  display: "inline",
                                }}
                              />
                              &emsp;
                              {"1 Custom Design Concept"}
                            </p>
                          </li>
                          <li
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "flex-start",
                              alignItems: "center",
                              margin: "5px 0",
                              fontFamily:"Poppins", fontSize:15
                            }}

                          >
                            <p
                              style={{
                                fontSize: 14,
                                color: "black",
                                // display: "inline-block",
                                margin: 0,
                              }}
                            >
                              <BsCheckLg
                                style={{
                                  color: "white",
                                  fontSize: 10,
                                  display: "inline",
                                }}
                              />
                              &emsp;
                              {"1 Blog Theme Design"}
                            </p>
                          </li>
                          <li
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "flex-start",
                              alignItems: "center",
                              margin: "5px 0",
                              fontFamily:"Poppins", fontSize:15
                            }}
                          >
                            <p
                              style={{
                                fontSize: 14,
                                color: "black",
                                // display: "inline-block",
                                margin: 0,
                              }}
                            >
                              <BsCheckLg
                                style={{
                                  color: "white",
                                  fontSize: 10,
                                  display: "inline",
                                }}
                              />
                              &emsp;
                              {"Unlimited Pages"}
                            </p>
                          </li>
                          <li
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "flex-start",
                              alignItems: "center",
                              margin: "5px 0",
                              fontFamily:"Poppins", fontSize:15
                            }}
                          >
                            <p
                              style={{
                                fontSize: 14,
                                color: "black",
                                // display: "inline-block",
                                margin: 0,
                              }}
                            >
                              <BsCheckLg
                                style={{
                                  color: "white",
                                  fontSize: 10,
                                  display: "inline",
                                }}
                              />
                              &emsp;
                              {"Unlimited Revisions"}
                            </p>
                          </li>
                        
                        </ul>
                      </Col>
                      <Col xs={24} md={8}>
                        <Typography.Title
                          level={4}
                          style={{
                            color: "black",
                            fontSize: 18,
                            fontWeight: 600,
                            marginBottom: 5,
                            marginLeft: 35,
                          }}
                        >
                          {""}
                        </Typography.Title>
                        <ul
                          style={{
                            listStyleType: "none",
                            paddingLeft: 10,
                          }}
                        >
                          <li
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "flex-start",
                              alignItems: "center",
                              margin: "5px 0",
                              fontFamily:"Poppins", fontSize:15
                            }}
                          >
                            <p
                              style={{
                                fontSize: 14,
                                color: "black",
                                // display: "inline-block",
                                margin: 0,
                              }}
                            >
                              <BsCheckLg
                                style={{
                                  color: "white",
                                  fontSize: 10,
                                  display: "inline",
                                }}
                              />
                              &emsp;
                              {"1 Year FREE Domain"}
                            </p>
                          </li>
                          <li
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "flex-start",
                              alignItems: "center",
                              margin: "5px 0",
                              fontFamily:"Poppins", fontSize:15
                            }}
                          >
                            <p
                              style={{
                                fontSize: 14,
                                color: "black",
                                // display: "inline-block",
                                margin: 0,
                              }}
                            >
                              <BsCheckLg
                                style={{
                                  color: "white",
                                  fontSize: 10,
                                  display: "inline",
                                }}
                              />
                              &emsp;
                              {"1 Year FREE Hoisting"}
                            </p>
                          </li>
                          <li
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "flex-start",
                              alignItems: "center",
                              margin: "5px 0",
                              fontFamily:"Poppins", fontSize:15
                            }}
                          >
                            <p
                              style={{
                                fontSize: 14,
                                color: "black",
                                // display: "inline-block",
                                margin: 0,
                              }}
                            >
                              <BsCheckLg
                                style={{
                                  color: "white",
                                  fontSize: 10,
                                  display: "inline",
                                }}
                              />
                              &emsp;
                              {"Content Management System"}
                            </p>
                          </li>
                          <li
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "flex-start",
                              alignItems: "center",
                              margin: "5px 0",
                              fontFamily:"Poppins", fontSize:15
                            }}
                          >
                            <p
                              style={{
                                fontSize: 14,
                                color: "black",
                                // display: "inline-block",
                                margin: 0,
                              }}
                            >
                              <BsCheckLg
                                style={{
                                  color: "white",
                                  fontSize: 10,
                                  display: "inline",
                                }}
                              />
                              &emsp;
                              {"Search Engine Submission"}
                            </p>
                          </li>
                        </ul>
                      </Col>
                      <Col xs={24} md={8}>
                     
                        <Typography.Title
                          level={4}
                          style={{
                            color: "black",
                            fontSize: 18,
                            fontWeight: 600,
                            marginBottom: 5,
                            marginLeft: 35,
                          }}
                        >
                          {"VALUE ADDED SERVICE"}
                        </Typography.Title>
                        <ul
                          style={{
                            listStyleType: "none",
                            paddingLeft: 10,
                          }}
                        >
                          <li
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "flex-start",
                              alignItems: "center",
                              margin: "5px 0",
                              fontFamily:"Poppins", fontSize:15
                            }}
                          >
                            <p
                              style={{
                                fontSize: 14,
                                color: "black",
                                // display: "inline-block",
                                margin: 0,
                              }}
                            >
                              <BsCheckLg
                                style={{
                                  color: "white",
                                  fontSize: 10,
                                  display: "inline",
                                }}
                              />
                              &emsp;
                              {"Dedicated Account Manager"}
                            </p>
                          </li>
                          <li
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "flex-start",
                              alignItems: "center",
                              margin: "5px 0",
                              fontFamily:"Poppins", fontSize:15
                            }}
                          >
                            <p
                              style={{
                                fontSize: 14,
                                color: "black",
                                // display: "inline-block",
                                margin: 0,
                              }}
                            >
                              <BsCheckLg
                                style={{
                                  color: "white",
                                  fontSize: 10,
                                  display: "inline",
                                }}
                              />
                              &emsp;
                              {"100% Ownership Rights"}
                            </p>
                          </li>
                          <li
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "flex-start",
                              alignItems: "center",
                              margin: "5px 0",
                              fontFamily:"Poppins", fontSize:15
                            }}
                          >
                            <p
                              style={{
                                fontSize: 14,
                                color: "black",
                                // display: "inline-block",
                                margin: 0,
                              }}
                            >
                              <BsCheckLg
                                style={{
                                  color: "white",
                                  fontSize: 10,
                                  display: "inline",
                                }}
                              />
                              &emsp;
                              {"100% Money Back Gurantee"}
                            </p>
                          </li>
                          <li
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "flex-start",
                              alignItems: "center",
                              margin: "5px 0",
                              fontFamily:"Poppins", fontSize:15
                            }}
                          >
                            <p
                              style={{
                                fontSize: 14,
                                color: "black",
                                // display: "inline-block",
                                margin: 0,
                              }}
                            >
                              <BsCheckLg
                                style={{
                                  color: "white",
                                  fontSize: 10,
                                  display: "inline",
                                }}
                              />
                              &emsp;
                              {"Complete Development"}
                            </p>
                          </li>
                        </ul>
                  </Col>
                    </Row>
                  </Col>
                  <Col
                    xs={24}
                    md={6}
                    style={{
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div>
                    <Typography.Title
                        level={4}
                        style={{
                          color: "black",
                          fontSize: 25,
                          fontWeight: "bold",
                          marginBottom: 10,
                        }}
                      >
                      <>
                      <span style={{ fontSize: 20, fontWeight: "bold"}}>ITS TIME TO<br></br>
                        BUILD YOUR BRAND</span><br></br>
                        <span style={{ color: "#fe1f07", fontSize: 35, fontWeight: "bold",}}> GET 70% OFF <br></br>
                        $1,299
                        </span>{" "}<span style={{textDecoration: "line-through"}}>$4,330</span><br></br>
                        <span style={{ fontSize: 20, fontWeight: 900}}>LIMITED TIME OFFER</span>
                      </>
                      </Typography.Title>
                    </div>
                    <div
                      style={{
                        padding: "10px 30px",
                        background: "#fe1f07",
                        display: "flex",
                        width: "max-content",
                        borderRadius:5,
                      }}
                    >
                      <Typography.Title
                        level={4}
                        style={{
                          color: "white",
                          fontSize: 20,
                          fontWeight: "bold",
                          marginBottom: 0,
                          cursor:"pointer"
                        }}
                      >
                        {"Order Now"}
                      </Typography.Title>
                    </div>
                    <br />
                    <div
                      style={{
                        padding: "5px 30px",
                        background: "black",
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "center",
                        width: "max-content",
                        borderRadius:5,
                        cursor:"pointer"
                      }}
                    >
                      <Typography.Title
                        level={4}
                        style={{
                          color: "white",
                          fontSize: 20,
                          fontWeight: "bold",
                          margin: 0,
                          cursor:"pointer"
                        }}
                        onClick={() => router.push('/contact')}
                      >
                        {"Want To Discuss?"}
                      </Typography.Title>
                      <Typography.Title
                        level={4}
                        style={{
                          color: "white",
                          fontSize: 16,
                          fontWeight: "bold",
                          margin: 0,
                          
                        }}
                      >
                        {"Live Chat Now"}
                      </Typography.Title>
                    </div>
                    {/* <br />
                    <button
                      className="ant-btn"
                      style={{
                        background: "#061a61",
                        color: "#fff",
                        borderColor: "#061a61",
                        borderRadius: "5px",
                        height: "40px",
                        marginBottom: "0px",
                        fontWeight: 500,
                        marginTop: "5px",
                      }}
                    >
                      PreOrder Now
                    </button> */}
                  </Col>
                </Row>
              </div>
            </Row>

            <Row style={{ paddingLeft: 20 }}>{buttons}</Row>
          </Col>

          {others}
        </Row>
      </Col>
    </Row>
  );
};

export default ComboPackage;
