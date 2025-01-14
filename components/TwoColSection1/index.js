import { useState, useEffect } from 'react';
import { useInView } from "react-intersection-observer";
import { Image } from "antd"
import { Row, Col, Typography, List } from 'antd'
import {AiOutlineRightCircle} from 'react-icons/ai'

const TwoColSection1 = ({ image, title, subtitle,textColor="#6A6A6A", subtitleStyles,imageStyles, text, list, opposeColumns, buttons, background, titleColor, customTitle, multitext, listItemPadding, otherSections,containerStyles,titleStyles }) => {
    const [loadCount, setLoadCount] = useState(0);
    const { ref, inView } = useInView({
        threshold: 0
    });
    useEffect(() => {
        setLoadCount(loadCount + 1);
    }, [inView])

    return opposeColumns ? (
        <Row
            ref={ref}
            gutter={[15, 15]}
            style={{
                height: "auto",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                padding: "50px 10px",
                margin: 0,
                marginBottom:'50px',
                background: background ? background : "white",
                ...containerStyles
            }}>
            <Col xs={24} md={11} className={(inView && loadCount < 3) ? "flip-in-horizontal" : ""}>
                <Row>
                    <Col span={24} style={{textAlign:'left'}}>

                        {customTitle && customTitle}
                        {title && (

                            <Typography.Title
                                level={2}
                                style={{ color: titleColor ? titleColor : "black", fontSize: 40, fontWeight: 600, marginBottom: 5, lineHeight:1.1,  ...titleStyles}}
                            >
                                {title}
                            </Typography.Title>
                        )}
                       {subtitle && <Typography.Title
                        level={2}
                            style={{ fontSize: 15, fontWeight: 400, color: "#ad", fontWeight: text ? 500 : "normal", marginTop: 15, ...subtitleStyles }}
                        >
                            {subtitle}
                        </Typography.Title>}

                        {multitext && multitext?.map((item, index) =>
                            <p
                            
                                key={index}
                
                                style={{ color: textColor, fontSize: "14px", fontWeight: "normal" ,textAlign: "justify"}}
                            >
                                {item}
                            </p>
                        )}
                        <p
                            style={{  color:textColor , fontSize: "14px", fontWeight: "normal" ,textAlign: "justify" }}
                        >
                            {text}
                        </p>
                        {list && (
                            <div style={{ marginTop: 15 }}>
                                <List
                                    dataSource={list}
                                    renderItem={item => (
                                        <List.Item style={{ display: "flex", justifyContent: "unset", padding: listItemPadding, borderBottom: "none" }}>
                                            <Image preview={false} alt={"Failed to load image"} width={18} height={18} src={"/images/icon_check_03.jpg"} />
                                            <Typography.Text style={{ marginLeft: 5, color: "#777", fontSize: 17 }}>
                                                {item}
                                            </Typography.Text>
                                        </List.Item>
                                    )}
                                />
                            </div>
                        )}
                        {otherSections}
                        {buttons}
                    </Col>
                </Row>
            </Col>
            {image && <Col className='TwoColSec' xs={24} md={11} style={{padding:20,display:'flex', alignitems:'center',justifyContent:'center'}}>
                            <Image preview={false} alt={"Failed to load image"}  src={image} style={{...imageStyles }} />
                        </Col>}

        </Row>
    ) : (
        <Row
            ref={ref}
            gutter={[15, 15]}
            style={{
                height: "auto",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                padding: "20px 10px",
                marginBottom:'50px',
                background: background ? background : "white",
                ...containerStyles
            }}>
           {image && <Col xs={24} md={11} style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <Image preview={false} alt={"Failed to load image"}  src={image} style={{...imageStyles}} />
            </Col>}
            <Col xs={24} md={image ? 11 : 24} className={(inView && loadCount < 3) ? "flip-in-horizontal" : ""}>
                <Row>
                    <Col span={24}>
                       {title && <Typography.Title
                       className='tekoFont'
                            level={3}
                            style={{ color: titleColor ? titleColor : "black", fontSize: 40, fontWeight: 550, marginBottom: 0,textAlign:'left' }}
                        >
                            {title}
                        </Typography.Title>}
                       {subtitle && <Typography.Title
                            level={3}
                            style={{ fontSize: 15, fontWeight: 400, color: "#414141", fontWeight: text ? 500 : "normal", marginTop: 15, ...subtitleStyles }}
                        >
                            {subtitle}
                        </Typography.Title>}
                        {multitext && multitext?.map((item, index) =>
                            <p
                                key={index}
                                marginTop={index > 0 ? 0 : 15}
                                                              style={{ color:textColor, fontSize: "14px", fontWeight: "normal",color: "#777" ,textAlign: "justify"}}
                            >
                                {item}
                            </p>
                        )}
                        <p
                            style={{color:textColor, fontSize: "14px", fontWeight: "normal" ,textAlign: "justify",color: "#777" }}
                        >
                            {text}
                        </p>
                        {list && (
                            <div style={{ marginTop: 15 }}>
                                <List
                                    dataSource={list}
                                    renderItem={item => (
                                        <List.Item style={{ display: "flex", justifyContent: "flex-start",alignItems:'center', padding: 5, borderBottom: "none" }}>
                                            <AiOutlineRightCircle style={{color:"#fe1f07", fontSize:'18px'}}/>
                                            <Typography.Text style={{ marginLeft: 5, marginBottom:0, color: "#777", fontSize: 14 }}>
                                                {item}
                                            </Typography.Text>
                                        </List.Item>
                                    )}
                                />
                            </div>
                        )}
                        {otherSections}
                        <div style={{display:'flex', justifyContent:'start', width:'100%'}}>
                        {buttons}
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>

    )
}

export default TwoColSection1