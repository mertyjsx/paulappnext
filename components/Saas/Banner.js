import React from 'react';
import Link from 'next/link';
import { Button } from "@material-ui/core"
import { FaWindows, FaApple, FaCheck, FaAndroid } from "react-icons/fa"
import logo2 from "../../images/LGlogo.svg"
import { FcLinux } from "react-icons/fc"
import { Row, Col } from "react-bootstrap"
import img1 from "../../images/1.png"
import img2 from "../../images/2.png"
import img3 from "../../images/3.png"
import img4 from "../../images/4.png"
import img5 from "../../images/5.png"
import img6 from "../../images/6.png"
import mainimg from "../../images/banner.png"
const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wowjs') : null

class Banner extends React.Component {
    componentDidMount() {
        new WOW.WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 20,
            mobile: true,
            live: true,
        }).init();
    }

    render() {
        return (
           
                <div className=" bigscreen2" >
                    <div >
                        <div >
                            <div className="container bigscreen">
                                <Row className="television">


                                    <Col sm={12} md={12} lg={6} style={{paddingTop:50}}>
                                        <div className="hero-content pl-4 ">
                                            <h1 className="response2 " style={{ fontSize: 50 }}>Anything Is Possible With <span style={{ color: "#FB6520" }}>Imagine</span> Digital Signage </h1>

                                            <p style={{ fontSize: 20 ,marginBottom:10}}>Take control of your screens! It’s easy to install and even easier to manage. Try Imagine for free today.</p>
                                            <div className="flexcontainerrow" style={{ justifyContent: "start" }}>
                                            <div style={{ margin:"20px 10px", padding: "auto", fontSize: 40,color:"rgb(0,173,239)" }}><FaWindows ></FaWindows></div>
                                                <div style={{ margin: 20, padding: "auto", fontSize: 40 }}><FcLinux ></FcLinux></div>
                                                <img src={logo2} style={{ width: 80,marginLeft:5,marginRight:5 }}></img>
                                                <div style={{ margin: 20, padding: "auto", fontSize: 40, alignItems: "center", display: "flex", color: "#32DE84" }}><FaAndroid></FaAndroid></div>


                                            </div>

                                            <div className={"flexcontainerrow"} style={{ justifyContent: "start", marginTop: 20, marginBottom: 20 }}>


                                            <Link href="/signup/">
                                                    <Button variant="contained" style={{ backgroundColor: "#FB6520", color: "white", marginRight: 30 }} size="large" component="a"> 
                                                        <div style={{ display: "flex", flexDirection: "column", textTransform: "none" }} >
                                                       
                                                            <div>Start Trial</div>
                                                            

                                                        </div>

                                                    </Button>
                                                    </Link>

                                               
                                                <Link href="/contact/">
                                                    <Button variant="contained" style={{ backgroundColor: "#FB6520", color: "white" }} size="large" component="a">
                                                        <div style={{ display: "flex", flexDirection: "column", textTransform: "none" }}>

                                                            <div >Book Trial</div>


                                                        </div>

                                                    </Button>


                                                </Link>

                                            </div>
                                            <div className="flexcontainerrow" style={{ justifyContent: "start",width:"90%" }}>
                                                <div className="flexcontainerrow " style={{ justifyContent: "start", marginTop: 40 }}> <FaCheck style={{ margin: 4, alignItems: "center", fontSize: 15 }}></FaCheck>

                                                    <div style={{ fontSize: 15 }}>14-day free trial</div>
                                                </div>
                                                <div className="flexcontainerrow freeres" style={{ justifyContent: "start", marginTop: 40 ,paddingLeft:5}}> <FaCheck style={{ margin: 4, alignItems: "center", fontSize: 15 }}></FaCheck>

                                                    <div style={{ fontSize: 15 }}>No credit card</div>
                                                </div>
                                                <div className="flexcontainerrow " style={{ justifyContent: "start", marginTop: 40 }}> <FaCheck style={{ margin: 4, alignItems: "center", fontSize: 15 }}></FaCheck>

                                                    <div style={{ fontSize: 15 }}>No contracts</div>
                                                </div>
                                
                                            </div>

                                        </div>
                                    </Col>
                                    <Col sm={12} md={12} lg={6} style={{ marginBottom: 50 }}>
                                        <div style={{ paddingTop: 50 }}>
                                            <img
                                                src={mainimg}
                                                className="wow zoomIn"
                                                data-wow-delay="0.6s"
                                                alt="home hero"

                                            />
                                        </div>
                                    </Col>
                                </Row>
                                <Row style={{ marginTop: 120, marginBottom: 100 }} style={{ width: "100%", margin: "0 auto", textAlign: "center", marginTop: 50 }}>
                                    <Col lg={2} md={4} sm={4} xs={4}>
                                        <div style={{ margin: 10, padding: "auto", fontSize: 50 }}><img src={img1} alt=""></img></div>


                                    </Col>

                                    <Col lg={2} md={4} sm={4} xs={4}>
                                        <div style={{ margin: 10, padding: "auto", fontSize: 50 }}><img src={img2} alt=""></img></div>

                                    </Col>

                                    <Col lg={2} md={4} sm={4} xs={4}>
                                        <div style={{ margin: 10, padding: "auto", fontSize: 50 }}><img src={img3} alt=""></img></div>

                                    </Col>

                                    <Col lg={2} md={4} sm={4} xs={4}>

                                        <div style={{ margin: 10, padding: "auto", fontSize: 50 }}><img src={img4} alt=""></img></div>
                                    </Col>
                                    <Col lg={2} md={4} sm={4} xs={4} >

                                        <div style={{ margin: 10, padding: "auto", fontSize: 50 }}><img src={img5} alt=""></img></div>
                                    </Col>
                                    <Col lg={2} md={4} sm={4} xs={4}>

                                        <div style={{ margin: 10, padding: "auto", fontSize: 50 }}><img src={img6} alt=""></img></div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div >
                </div >
           
        );
    }
}

export default Banner;
