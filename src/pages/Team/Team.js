import React from 'react';
import './Team.css';
import ShaileshImage from "../../images/shailesh.jpg";
import SmrutiImage from "../../images/smruti.jpeg";
import BlankImage from "../../images/blank.png";




const Team = () => {
  return (
    <>
      <div style={{ margin: "7rem", paddingLeft: "30rem" }}></div>

      {/* <h2 className="topText">Our Team</h2> */}
      <div className="backgroundImageStyle">
        <div className="pageStyle">
          <div style={{ paddingTop: "7rem", fontSize: "21px", color: "orange" }}>
            <h2 className="">Our Team</h2>
          </div>



          {/* Define border line */}
          <div className='borderLine' />
          <div style={{ padding: "1rem", color: "blue" }}>
            <div style={{ padding: "2px" }}>
              <h2>Management Team:</h2>
            </div>
            <div style={{ padding: "7px" }}>
              <h3>Shailesh Singh, Director & CEO</h3>
            </div>
            <div style={{ padding: "7px" }}>
              <h3>Smruti Pattnaik, Director & CRO</h3>
            </div>

            <div style={{ padding: "7px" }}>
              <h2>Technical & Delivery Team:</h2>
            </div>
            <div style={{ padding: "7px" }}>
              <h3>Debasish Das, Principal Architect (Enterprise Solutions)</h3>
            </div>

            <div style={{ padding: "7px" }}>
              <h2>HR and Administration:</h2>
            </div>
            <div style={{ padding: "7px" }}>
              <h3>M Bhide , Head HR and Administration</h3>
            </div>
          </div>
        </div>
      </div>



      {/* Team Demo Template start */}

      <div style={{justifyContent:"center", marginLeft:"450px", textAlign:"center", borderBottom: " 5px solid orange", width:"180px", color:"blue"}}>
        <h2> Our Team</h2>
      </div>
      <div className="container">

        <div className="team">
          <div className="member">
            <img src={ShaileshImage} alt="teama" />

            {/* <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="member_image"> */}
            <h3>Shailesh Singh, Director & CEO</h3>
            <span>shailesh.singh@conlistech.com</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.amet consecteturamet consecteturamet Laboriosam voluptatum fuga iure. Est, dicta voluptatum.</p>
            <div className="btn">
              <a href="#">Contact</a>
            </div>
          </div>
          <div className="member">
            <img src={SmrutiImage} alt="teama" />

            {/* <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="member_image"> */}
            <h3>Smruti Pattnaik, Director & CRO</h3>
            <span>smruti.p@conlistech.com</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.amet consecteturamet consecteturamet Laboriosam voluptatum fuga iure. Est, dicta voluptatum.</p>
            <div className="btn">
              <a href="#">Contact</a>
            </div>
          </div>
          <div className="member">
            <img src={BlankImage} alt="teama" />

            {/* <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="member_image"> */}
            <h3>Debasish Das, Principal Architect (Enterprise Solutions)</h3>
            <span>debasish@conlistech.com</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam voluptatum fuga iure. Est, dicta voluptatum.</p>
            <div className="btn">
              <a href="#">Contact</a>
            </div>
          </div>
          <div className="member">
            <img src={BlankImage} alt="teama" />

            {/* <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="member_image"> */}
            <h3>M Bhide, Head HR and Administration</h3>
            <span>bhide@conlistech.com</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.amet consecteturamet consecteturamet Laboriosam voluptatum fuga iure. Est, dicta voluptatum.</p>
            <div className="btn">
              <a href="#">Contact</a>
            </div>
          </div>
        </div>
      </div>
      {/* Team Demo Template end */}



    </>

  )
}

export default Team