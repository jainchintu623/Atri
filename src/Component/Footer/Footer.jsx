import IonIcon from "@reacticons/ionicons";
import React from "react";
import CopyWrite from "./CopyWrite";

export default function Footer() {
  return (
    <>
    <section className="footer-section">
      <div className="row m-0 footer-details">
        <div className="col-lg-6">
          <div className="footer-logo">
            <img src="\src\assets\Logo\Logo.png" alt="" />
          </div>
        </div>

        <div className="col-lg-6">
            <div className="row ">
            <div className="col-lg-4 footer-details-Menu">
          <h3>Menu</h3>
          <ul >
            <li>
              <a href="home">Home</a>
            </li>
            <li>
              <a href="about">About</a>
            </li>
            <li>
              <a href="#">Catlogue</a>
            </li>
            <li>
              <a href="#">Shop Presonalised</a>
            </li>
            <li>
              <a href="customorder">Custom Order</a>
            </li>
          </ul>
        </div>

        <div className="col-lg-4 footer-details-Menu">
          <h3>Contact</h3>
          <ul>
            <li>
              <a href="#">jainchintu623@gmail.com</a>
            </li>
            <li>
              <a href="#">+91 8000707585</a>
            </li>
          </ul>
        </div>

        <div className="col-lg-4 footer-details-Menu footer-details-social-icon">
          <h3>Social</h3>
          <a href="#">
            <IonIcon name="logo-facebook" className="Social-logos"/>
          </a>
          <a href="#">
            <IonIcon name="logo-instagram" className="Social-logos" />
          </a>
          <a href="#">
            <IonIcon name="logo-twitter" className="Social-logos" />
          </a>
        </div>
            </div>
        </div>
       
      </div>
      <div>
      </div>
    </section>
    <div className="CopyWrite">
         <CopyWrite/>
    </div>
    </>
  );
  
}
