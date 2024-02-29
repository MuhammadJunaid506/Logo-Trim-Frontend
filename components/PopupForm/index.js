import { useState, useEffect } from "react";
import {
  Col,
  Row,
  Typography,
  Form,
  Input,
  message,
  Spin,
  List,
  Select,
  Upload,
  Image,
  Button,
} from "antd";
const { Dragger } = Upload;
import { InboxOutlined, UnderlineOutlined } from "@ant-design/icons";
import {  UserOutlined ,MailOutlined} from '@ant-design/icons';
import Link from "next/link";
import { CONTACTS } from "../../config/constants/api";
import { Post } from "../../config/api";
import { LoadingOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import { FaPhoneAlt } from "react-icons/fa";
import { BiDollar } from "react-icons/bi";
import { TiMessages } from "react-icons/ti";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { AiOutlineYoutube } from "react-icons/ai";
import { IoIosChatboxes } from "react-icons/io";
import { MdMail } from "react-icons/md";
const { Option } = Select;
const { TextArea } = Input;
import { useInView } from "react-intersection-observer";

const PopupForm = ({ title, subtitle }) => {
  const router = useRouter();
  const [contactForm] = Form.useForm();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
    image: "",
  });
  const [categories, setCategories] = useState([
    "Logo Design",
    "Web Design",
    "Mobile Apps",
    "Animation",
    "Branding",
    "Digital Marketing",
    "General Inquiry",
  ]);
  const [loading, setLoading] = useState(false);

  const saveForm = () => {
    setLoading(true);
    // create a formdata object
    const data = new FormData();
    // add the form data to the object
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("serviceType", formData.serviceType);
    data.append("message", formData.message);
    data.append("image", formData.image);

    try {
      Post(CONTACTS.save, data).then((response) => {
        setLoading(false);
        if (response.status) {
          message.success("Your message has been sent successfully");
          setFormData({
            name: "",
            email: "",
            phone: "",
            serviceType: "",
            message: "",
            image: "",
          });
          contactForm.setFieldsValue({
            name: "",
            email: "",
            phone: "",
            serviceType: "",
            message: "",
            image: "",
          });
          router.push("/thankyou-message");
        } else {
          message.error(
            response.message ? response.message : "Something went wrong"
          );
        }
      });
    } catch (error) {
      message.error(error.message ? error.message : "Something went wrong");
    }
  };

  const antIcon = (
    <LoadingOutlined
      style={{
        color: "#1e292f",
        fontSize: 24,
      }}
      spin
    />
  );
  const [loadCount, setLoadCount] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0,
  });
  useEffect(() => {
    setLoadCount(loadCount + 1);
  }, [inView]);

  return (
            <Form
              form={contactForm}
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={() => saveForm()}
            >
              <Row gutter={[20, 0]} style={{width:"375px" ,padding:"30px 30px 0px 30px"}}>
                <Col xs={24} md={24}>
                  <Form.Item
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: "This field is required!",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Name"
                      value={formData?.name}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          name: e.target.value,
                        })
                      }
                      prefix={<UserOutlined className="site-form-item-icon" />}
                      style={{
                        borderRadius: 5,
                        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
                        borderColor: "transparent",
                        fontSize:'18px'
                      }}
                    />
                  </Form.Item>
                </Col>
                {/* <Col xs={24} md={24}>
                  <Form.Item
                    name="lastName"
                    rules={[
                      {
                        required: true,
                        message: "This field is required!",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Last Name*"
                      value={formData?.lastName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          lastName: e.target.value,
                        })
                      }
                      prefix={<UserOutlined className="site-form-item-icon" />}
                      
                    />
                  </Form.Item>
                </Col> */}
                <Col xs={24} md={24}>
                  <Form.Item
                    name="phone"
                    rules={[
                      {
                        required: true,
                        message: "This field is required!",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Your Phone"
                      value={formData?.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      prefix={<FaPhoneAlt className="site-form-item-icon" />}
                      style={{
                        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
                        borderColor: "transparent",
                        fontSize:'18px'
                      }}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={24}>
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "This field is required!",
                      },
                    ]}
                  >
                    <Input
                      type={"email"}
                      value={formData?.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="Email Address"
                      prefix={<MailOutlined className="site-form-item-icon" />}
                      style={{
                        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
                        borderColor: "transparent",
                        fontSize:'18px'
                      }}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={24}>
                  <Form.Item
                    name="serviceType"
                    rules={[
                      {
                        required: true,
                        message: "This field is required!",
                      },
                    ]}
                  >
                    <Input
                      type={"number"}
                      value={formData?.serviceType}
                      onChange={(e) =>
                        setFormData({ ...formData, serviceType: e.target.value })
                      }
                      placeholder="Your Budget"
                      prefix={<BiDollar className="site-form-item-icon" />}
                      style={{
                        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
                        borderColor: "transparent",
                        fontSize:'18px'
                      }}
                    />
                  </Form.Item>
                </Col>

                <Col span={24}>
                  <Form.Item
                    name="message"
                    rules={[
                      {
                        required: true,
                        message: "This field is required!",
                      },
                    ]}
                  >
                    <TextArea
                      value={formData?.message}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          message: e.target.value,
                        })
                      }
                      placeholder="your message in detail"
                      rows={6}
                      prefix={<TiMessages className="site-form-item-icon"/>}
                      style={{
                        fontSize: "14px",
                        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
                        borderColor: "transparent",
                      }}
                    />
                  </Form.Item>
                </Col>
              
                <Col span={24}>
                <Form.Item
                  style={{
                    textAlign: "center",
                    textAlignLast: "center",
                    marginTop: 0,
                  }}
                >
                  <button
                    className="ant-btn"
                    type="submit"
                    style={{
                      background: loading ? "#f97526bf" : "black",
                      color: "#fff",
                      borderColor: loading ? "#f97526bf" : "black",
                      borderRadius: "5px",
                      height: "40px",
                      fontSize: "12px",
                      padding: "0px 40px",
                      float: "left",
                      fontWeight: 500,
                      marginTop: "5px",
                    }}
                  >
                    Send Message
                  </button>
                </Form.Item>
                </Col>
              </Row>
            </Form>
  );
};

export default PopupForm;
