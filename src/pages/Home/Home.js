import React from 'react';
import "./Home.css"
import HomeImage from "../../images/home.png";
import AboutImage from "../../images/about.png";
import ServicesImage from "../../images/services.png";

const Home = () => {
    return (
        <>

            {/* Home section */}

            <div style={{ margin: "4rem", paddingLeft: "30rem" }}></div>

            <div style={{ display: "flex", background: "linear-gradient(blue, orange)", color:"white" }}>

                <div>
                    <img src={HomeImage} alt="logo" style={{ height: "350px", width: "550px", margin: "30px" }} className="" />
                </div>

                <div style={{ margin: "2px", paddingTop:"45px", fontSize:"1.2rem" }}>
                    <p>
                        Conlis Solutions Pvt. Ltd. ,Formerly Conlis Technology is a tech
                        start-up, led by software industry veterans with individual
                        experience spanning decades in the field of fin-tech, Web
                        3.0,cloud solutions, devOps, SaaS, Automation, Big Data to name
                        a few. Conlis was shaped one year back in Pune, with a belief
                        that individual experience placed strategically in the team will be
                        a collective strength. Strength – to provide cutting edge
                        solutions to our clientele and assist them improve their
                        businesses drastically. And we were right! Conlis has grown
                        rapidly with a plethora of software  products and services to
                        target the IT-enabled market. .
                    </p>
                </div>

            </div>

            {/* Service section */}

            <div style={{ margin: "10px", textAlign: "center" }}>
                <h4 style={{ color: "orange", fontSize:"1.5rem", margin:"1rem" }}> Our Services</h4>
                <div style={{ marginBottom:"1rem", color:"blue" }}>
                    <h2>Explore Our Product Services</h2>
                </div>
                <div className="flexContainer flexContainerOverlay">
                    <div>
                        <h3>Web Development</h3>
                        <p style={{ fontSize: "16px", paddingTop: "10px" }}>We carry more than just good coding skills.
                            Our experience makes us stand out from other web development.</p>
                    </div>
                    <div>
                        <h3>Mobile Development</h3>
                        <p style={{ fontSize: "16px", paddingTop: "10px" }}>Create complex enterprise software,
                            ensure reliable software integration, modernise your legacy system.</p>
                    </div>
                    <div>
                        <h3>UI/UX Design</h3>
                        <p style={{ fontSize: "16px", paddingTop: "10px" }}>Build the product you need on time with
                            an experienced team that uses a clear and effective design process.</p>
                    </div>

                    <div>
                        <h3>QA & Testing</h3>
                        <p style={{ fontSize: "16px", paddingTop: "10px" }}>Turn to our experts to perform comprehensive,
                            multi-stage testing and auditing of your software.</p>
                    </div>

                    <div>
                        <h3>IT Counsultancy</h3>
                        <p style={{ fontSize: "16px", paddingTop: "10px" }}>Trust our top minds to eliminate workflow pain points,
                            implement new tech, and consolidate app portfolios.</p>
                    </div>

                    <div>
                        <h3>Dedicated Team</h3>
                        <p style={{ fontSize: "18px", paddingTop: "10px" }}>Over the past decade,
                            our customers succeeded by leveraging Intellectsoft’s process of building, motivating.</p>
                    </div>

                </div>
            </div>

            {/* About section start */}

            <div style={{ margin: "1rem", paddingLeft: "30rem" }}></div>

            <div style={{ display: "flex", backgroundColor: "white" }}>

                <div>
                    <img src={AboutImage} alt="logo" style={{ height: "250px", width: "350px", marginLeft: "40px" }} className="" />
                </div>

                <div style={{ margin: "10px" }}>
                    <h4 style={{ color: "blue", paddingLeft: "150px", marginTop: "10px", fontSize:"1rem" }}> About Us</h4>
                    <div style={{ paddingLeft: "150px", marginTop: "20px", color: "orange" }}>
                        <h2>Focused On Actionable Insights</h2>
                    </div>
                    <div style={{ padding: "10px", fontSize:"0.9rem", color:"blue" }}>
                        <p>
                        <b style={{fontSize:"1rem", color:"orange"}}>• Vision :</b> Our Vision is become the market leader in
                            technology service and solution provider and pioneer in
                            implementing products in various domain to serve wide
                            range of problems across the horizon. <br /> <br />
                            <b style={{fontSize:"1rem", color:"orange"}}>• Mission: </b> Our mission is to deliver world-class product
                            and services solution to our clients and customers ,
                            support their business goals and enable them to transform
                            their various need.<br /> <br />
                            <b style={{fontSize:"1rem", color:"orange"}}>• Objective: </b> Deliver high quality product or services for
                            clients across the globe.<br /> <br />
                        </p>
                    </div>
                </div>

            </div>

            {/* About section end */}

            {/* Services section start */}

            <div style={{ margin: "1rem", paddingLeft: "30rem" }}></div>

            <div>
                <h4 style={{ color: "blue", paddingLeft: "450px", marginTop: "30px", fontSize:"1rem" }}> Our Featured Services</h4>
            </div>

            <div style={{ paddingLeft: "450px", marginTop: "10px" }}>
                <h2 style={{paddingBottom:"1rem", color:"orange"}}>Software Developement Services</h2>
            </div>

            <div style={{ display: "flex", fontSize: "10px", marginLeft:"0px", backgroundColor:"skyblue", paddingTop:"4rem"}} >
                <div className="servicesBox">
                    <ul style={{ listStyleType: "none" }}>
                        <li style={{ width: "120px", padding: "5px", border: "1px solid white", margin: "10px" }}>Enterprise Web and Mobile application Development</li>
                        <li style={{ width: "120px", padding: "5px", border: "1px solid white", margin: "10px" }}>UI/UX design, AR & VR</li>
                        <li style={{ width: "120px", padding: "5px", border: "1px solid white", margin: "10px" }}>Enterprise Web and API’s</li>
                        <li style={{ width: "120px", padding: "5px", border: "1px solid white", margin: "10px" }}>Blockchain , IOT , AI & ML , Metaverse</li>
                    </ul>
                </div>
                <div style={{ display: "flex", fontSize: "15px", marginLeft:"40px", backgroundColor:"skyblue"}} >
                <div className="servicesBox">
                    <ul style={{ listStyleType: "none" }}>
                        <li style={{ width: "120px", padding: "5px", border: "1px solid white", margin: "10px" }}>QA Testing ( Automation & Manual)</li>
                        <li style={{ width: "120px", padding: "5px", border: "1px solid white", margin: "10px" }}>Implementation and support services</li>
                        <li style={{ width: "120px", padding: "5px", border: "1px solid white", margin: "10px" }}>Manpower outsourcing</li>
                        <li style={{ width: "120px", padding: "5px", border: "1px solid white", margin: "10px" }}>Management Consulting services</li>
                    </ul>
                </div>
                </div>
                
                <div>
                    <img src={ServicesImage} alt="logo" style={{ height: "250px", width: "350px", marginLeft: "240px" }} className="" />
                </div>

            </div>

            {/* Services section end */}


        </>
    )
}

export default Home