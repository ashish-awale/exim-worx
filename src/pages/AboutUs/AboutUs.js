import React from 'react';
import AboutImage from "../../images/about.png";
import ValuePropositionImage from "../../images/valueproposition.png";
import BusinessModelImage from "../../images/businessmodel.jpg";
import CompetitiveAdvantageImage from "../../images/competitiveadvantage.jpg";
import MarketAndDomainsImage from "../../images/marketanddomains.png"


const AboutUs = () => {
  return (
    <>
      <div style={{ margin: "10rem", paddingLeft: "30rem" }}></div>
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
            <b style={{fontSize:"1rem", color: "orange"}}>• Vision :</b> Our Vison is become the market leader in
              technology service and solution provider and pioneer in
              implementing products in various domain to serve wide
              range of problems across the horizon. <br /> <br />
              <b style={{fontSize:"1rem", color: "orange"}}>• Mission: </b> Our mission is to deliver world-class product
              and services solution to our clients and customers ,
              support their business goals and enable them to transform
              their various need.<br /> <br />
              <b style={{fontSize:"1rem", color: "orange"}}>• Objective: </b> Deliver high quality product or services for
              clients across the globe.<br /> <br />
            </p>
          </div>
        </div>

      </div>

      {/* Business Model start */}
      <div style={{ display: "flex" }}>
        <div style={{ margin: "20px" }}>
          <h4 style={{ color: "orange", paddingLeft: "50px", marginTop: "30px", fontSize:"1rem" }}> Business Model</h4>
          <div style={{ padding: "4px", fontSize:"1rem", color:"blue" }}>
            <p>
              • Software as Services
              based on the subscription
              model
              <br /> <br />
              • BOT model development
              for the customers
              <br /> <br />
              • Product as services
              <br /> <br />
              • Product licensing based
              on ASP model
              <br /> <br />
            </p>

          </div>
        </div>
        <div>
          <img src={BusinessModelImage} alt="logo" style={{ height: "250px", width: "450px", marginLeft: "10px" }} className="" />
        </div>
      </div>

      {/* Business Model end */}

      {/* Value Proposition section start */}
      <div style={{ display: "flex", paddingLeft: "50px", marginTop: "20px" }}>
        <div>
          <img src={ValuePropositionImage} alt="logo" style={{ height: "300px", width: "350px", marginTop:"30px" }} className="" />
        </div>
        <div style={{ margin: "5px" }}>
          <h4 style={{ color: "blue", paddingLeft: "250px", marginTop: "10px", fontSize:"1rem" }}> Value Proposition</h4>

          <div style={{ padding: "10px", fontSize:"1rem" }}>
            <h5 style={{ margin: "5px", color:"orange" }}>we establish ourselves as a fast-emerging diversified tech
              solutions company that provides solution in the following fields:
            </h5>
            <p style={{color:"blue"}}>
              • Fin-tech services( Retail Payment Solutions )
              <br /> <br />
              • Hospitality Management
              <br /> <br />
              • E-commerce and Enterprise applications
              <br /> <br />
              • Cloud-based solutions
              <br /> <br />
              • Big data
              <br /> <br />
              • DevOps
              <br /> <br />
              • IoT
              <br /> <br />
            </p>

          </div>

        </div>
      </div>
      {/* Value Proposition section end */}

      {/*  competitive advantage section start */}
      <div style={{ display: "flex" }}>
        <div style={{ margin: "20px" }}>
          <h4 style={{ color: "orange", paddingLeft: "50px", marginTop: "10px", fontSize:"1rem" }}> Competitive Advantage</h4>
          <div style={{ padding: "40px", fontSize:"1rem" }}>
            <p style={{color:"blue"}}>
              • We have state of art software development facility in
              multiple locations in India with a diversified team to
              deliver world class product and software for clients and
              consumers.
              <br /> <br />
              • Widely experience team with vast knowledge with
              diversified domains.
              <br /> <br />
              • Global presence in multiple countries.
              <br /> <br />
              • Uphold expertise in Fintech & Banking , Sprots and
              Gaming , Supply chain & Logistic , Blockchain, AI /ML, AR ,
              VR and Metaverse
              <br /> <br />
            </p>

          </div>
        </div>
        <div>
          <img src={CompetitiveAdvantageImage} alt="logo" style={{ height: "350px", width: "450px", marginLeft: "30px", marginRight:"40px" }} className="" />
        </div>
      </div>

      {/* competitive advantage section end */}


      {/* Market And Domains section start */}
      <div style={{ display: "flex", paddingLeft: "10px", marginTop: "10px" }}>
        <div>
          <img src={MarketAndDomainsImage} alt="logo" style={{ height: "300px", width: "450px" }} className="" />
        </div>
        <div style={{ margin: "10px" }}>
          <h4 style={{ color: "blue", paddingLeft: "100px", marginTop: "10px", fontSize:"1rem" }}> Market And Domains</h4>

          <div style={{ padding: "10px", fontSize:"1rem" }}>
            <h5 style={{ margin: "10px", color:"orange" }}>we establish ourselves as a fast-emerging diversified tech solutions
              company that provides solution in the following Domains:
            </h5>
            <div style={{display:"flex"}}>
            <p style={{color:"blue"}}>
              • Fin-tech services( Retail Payment Solutions )
              <br /> <br />
              • Blockchain
              <br /> <br />
              • Hospitality Management
              <br /> <br />
              • E-commerce and Enterprise applications
              <br /> <br />
              • Cloud-based solutions
              <br /> <br />
              • Big data
              <br /> <br />
              • DevOps
              <br /> <br />
              • IoT
              <br /> <br />
              • Infra and security management
              <br /> <br />
              • PaaS & SaaS
              <br /> <br />
            </p>
            </div>

          </div>

        </div>
      </div>
      {/* Market And Domains section end */}


      {/* About section end */}
    </>
  )
}

export default AboutUs