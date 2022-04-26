import React from 'react';
import ServicesImage from "../../images/services.png";


const Services = () => {
  return (
    <>
      <div style={{ margin: "10rem", paddingLeft: "30rem" }}></div>

      {/* services section start */}
      <div style={{ display: "flex" }}>
        <div style={{ margin: "10px" }}>
          <h4 style={{ color: "orange", paddingLeft: "50px", marginTop: "10px", fontSize:"1rem" }}> Our Featured Services</h4>
          <div style={{ padding: "40px", fontSize:"1rem", color:"blue" }}>
            <p>
              • Enterprise Web and Mobile application Development
              <br /> <br />
              • UI/UX design, AR & VR
              <br /> <br />
              • Enterprise Web and API’s
              <br /> <br />
              • Blockchain , IOT , AI & ML , Metaverse
              <br /> <br />
              • QA Testing ( Automation & Manual)
              <br /> <br />
              • Implementation and support services
              <br /> <br />
              • Manpower outsourcing
              <br /> <br />
              • Management Consulting services
              <br /> <br />
            </p>

          </div>
        </div>
        <div>
          <img src={ServicesImage} alt="logo" style={{ height: "350px", width: "450px", marginLeft: "10px" }} className="" />
        </div>
      </div>

          {/* product service section */}

          <div style={{ margin: "10px", textAlign: "center" }}>
                <h4 style={{ color: "blue", fontSize:"1.5rem", margin:"1rem" }}> Our Services</h4>
                <div style={{marginBottom:"1rem", color:"orange"}}>
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
                        <p style={{ fontSize: "16px", paddingTop: "10px" }}>Over the past decade,
                            our customers succeeded by leveraging Intellectsoft’s process of building, motivating.</p>
                    </div>

                </div>
            </div>

      {/* product service section end */}

    </>
  )
}

export default Services