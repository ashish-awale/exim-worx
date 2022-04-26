import React from 'react';
import ProdcutsImage from "../../images/products.png"

const Products = () => {
  return (
    <>
      <div style={{ margin: "10rem", paddingLeft: "30rem" }}></div>

      <div style={{ display: "flex" }}>
        <div style={{ margin: "10px" }}>
          <h4 style={{ color: "orange", paddingLeft: "20px", marginTop: "10px", fontSize:"2rem" }}> Products</h4>
          <div style={{ padding: "10px", fontSize:"1.2rem" }}>
            <p>
              <div style={{ display: 'flex', paddingRight:"10px", color:"blue" }}>
                <div>
                  Fintech and Banking
                  Products (Mobile based
                  digital banking, Payment
                  gateway)
                </div>
                <div>
                  Sports and gaming
                  (Enterprise applications
                  for leagues, Mobile
                  Games)
                  <br /> <br />
                </div>
              </div>

              <div style={{ display: 'flex', paddingRight:"10px", color:"blue" }}>
                <div>
                  B2B E-COM solutions
                  for small and medium
                  players
                </div>
                <div>
                  Blockchain based
                  financial and logistic
                  products
                  <br /> <br />
                </div>
              </div>
            </p>

          </div>
        </div>
        <div>
          <img src={ProdcutsImage} alt="logo" style={{ height: "250px", width: "450px", marginLeft: "1px", marginRight:"10px" }} className="" />
        </div>
      </div>
    </>

  )
}

export default Products