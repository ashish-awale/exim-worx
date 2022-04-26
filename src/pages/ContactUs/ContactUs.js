import React from 'react';
import ContactUsImage from "../../images/contactus.jpg";
import ContactMessageImage from "../../images/contactmessage.png"


const ContactUs = () => {
  return (
    <>
      <div style={{ margin: "1rem", paddingLeft: "30rem", paddingTop: "5rem" }}></div>

      <div style={{ display: "flex", backgroundColor: "white" }}>

        <div>
          <img src={ContactUsImage} alt="logo" style={{ height: "280px", width: "450px", marginLeft: "10px" }} className="" />
        </div>
        <div style={{ margin: "1rem", paddingLeft: "1rem" }}>
          <h1 style={{ borderBottom: " 5px solid brown", padding: "1rem", color: "orange" }}>CONTACTS</h1>

          <div style={{ padding: "1rem", fontSize: "1rem", color: "blue" }}>EXIMWORX PTE. LTD.</div>

          <div style={{ padding: "1rem", fontSize: "1rem", color: "blue" }}>10 ANSON ROAD, #27-15, INTERNATIONAL PLAZA, Singapore 079903</div>

          {/* <div>Office#810 , Floor No:8 Westport, Pan Card Club Road,</div>
        <div> Baner, Pune-411045( Maharashtra )</div> */}
          <div style={{ padding: "1rem", fontSize: "1rem", color: "blue" }}>Phone# +91-8788334917/7774077340</div>

          <div style={{ padding: "1rem", fontSize: "1rem", color: "blue" }}>www.eximworx.com</div>

        </div>
      </div>
      {/* contact message section start */}
      <div style={{display:"flex"}}>


        <div style={{margin:"40px 20px"}}>
          <form>
            <div style={{display:"flex", padding:"10px", boxSizing:"border-box"}}>
            <label>
              <input style={{height:"40px", textAlign:"center", borderRadius:"8px", border: "2px solid orange"}} type="text" name="name" placeholder="Name" />
            </label>
            <div style={{paddingLeft:"10px"}}>
            <label>
              <input style={{height:"40px", textAlign:"center", borderRadius:"8px", border: "2px solid orange"}} type="email" name="email" placeholder="Email" />
            </label>
            </div>
            </div>
            <div style={{display:"flex", padding:"10px"}}>
            <label>
              <input style={{height:"40px", textAlign:"center", borderRadius:"8px", border: "2px solid orange"}} type="number" name="number" placeholder="Phone" />
            </label>
            <div style={{paddingLeft:"10px"}}>
            <label>
              <input style={{height:"40px", textAlign:"center", borderRadius:"8px", border: "2px solid orange"}} type="text" name="subject" placeholder="Subject" />
            </label>
            </div>
            </div>

            <div style={{paddingLeft:"10px", paddingBottom:"10px"}}>
            <label>
              <input style={{height:"120px", textAlign:"center", borderRadius:"8px", width:"96.5%", border: "2px solid orange"}} type="text" name="" placeholder="Your Message" />
            </label>
            </div>
            <div>
            <button style={{backgroundColor:"blue", justifyContent:"center", textAlign:"center", border:"none", color:"white", padding:"10px 22px", textDecoration:"none", fontSize:"16px", width:"100%",}} type="submit" value="Submit" > Send Message </button>
            </div>
          </form>
        </div>

        <div>
          <img src={ContactMessageImage} alt="logo" style={{ height: "280px", width: "450px", marginLeft:"90px", marginRight: "20px", marginTop:"40px" }} className="" />
        </div>
      </div>
      {/* contact message section start */}

    </>
  )
}

export default ContactUs