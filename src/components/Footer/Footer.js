import React from 'react';
import "./Footer.css"

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div style={{marginTop:"40px"}}>
          <h3>About Us</h3>
          <p style={{ paddingRight: "112px", marginTop:"10px" }}>
            Conlis Solutions Pvt. Ltd. ,Formerly Conlis Technology is a tech
            start-up, led by software industry veterans with individual
            experience spanning decades in the field of fin-tech, Web
            3.0,cloud solutions, devOps, SaaS, Automation, Big Data to name
            a few. Conlis was shaped one year back in Pune, with a belief
            that individual experience placed strategically in the team will be
            a collective strength. Strength – to provide cutting edge
            solutions to our clientele and assist them improve their
            businesses drastically. And we were right! Conlis has grown
            rapidly with a plethora of software products and services to
            target the IT-enabled market. .
          </p>
        </div>

        <div style={{marginLeft:"10px", marginRight:"25px", display:"flex", marginTop:"40px"}}>
          <div style={{paddingRight:"70px"}}>
            <h3>Important<span style={{paddingLeft:"5px"}}>Links</span></h3>
            <div style={{paddingTop:"10px"}}>
              <ul style={{ listStyleType: "none" }}>
                <li>About Us</li>
                <li style={{paddingTop:"10px"}}>Products</li>
                <li style={{paddingTop:"10px"}}>Services</li>
                <li style={{paddingTop:"10px"}}>Team</li>
                <li style={{paddingTop:"10px"}}>Contact</li>
              </ul>
            </div>
          </div>

          <div>
            <h3>Contact Info</h3>
            <div>
              <ul style={{ listStyleType: "none" }}>
                <li style={{paddingTop:"10px"}}>Phone No.</li>
                <li style={{paddingTop:"10px"}}>+91 8788334917</li>
                <li style={{paddingTop:"10px"}}>Email </li>
                <li style={{paddingTop:"10px"}}>contact@conlistech.com</li>
                <li style={{paddingTop:"10px"}}>Address</li>
                <li style={{paddingTop:"10px"}}>Office 810, WestPort, Baner, Pune, 411021</li>
              </ul>
            </div>
          </div>

        </div>

      </div>

      <div style={{backgroundColor:"blue", padding:"20px", color:"white", fontSize:"12px", paddingLeft:"100px"}}>
        <h3>
          © 2022 EW. All Rights Reserved by Exim Worx
          <span style={{paddingLeft:"350px"}}>Terms & Conditions | Privacy Policy </span>
        </h3>
      </div>
    </>
  )
}

export default Footer