import React from "react";
import './FooterStyles.css';
import logo from '/module 3/ReactJS/ebs/src/assests/logo1.jpg';
/*
function Footer() {
  return (
    <div>
      <footer class="footer">
        <div class="footer-left col-md-4 col-sm-6">
          <div class="icons">
            <a href="#" class="fa fa-facebook"></a>
            <a href="#" class="fa fa-instagram"></a>
            <a href="#" class="fa fa-twitter"></a>
            <a href="#" class="fa fa-linkedin"></a>
            <a href="#" class="fa fa-youtube"></a>
            
          </div>
          <div>
          <p class="name"> Electricity Billing System &copy; 2021</p>
          </div>
        </div>
        
        <div class="footer-right col-md-4 col-sm-6">
          <h2><img alt="" src={logo} width="30" height="30"/>EBS</h2>
          <p class="menu">
            <a href="#"> Home</a> |
            <a href="#"> About</a> |
            <a href="#"> Contact</a>
          </p>
          
        </div>
      </footer>
    </div>
  );
}*/

function Footer() {
  return (
    <div>
      <section class="footer">
        <div class="social">
          <a href="#"><i class="fa fa-facebook"></i></a>
          <a href="#"><i class="fa fa-instagram"></i></a>
          <a href="#"><i class="fa fa-twitter"></i></a>
          <a href="#"><i class="fa fa-linkedin"></i></a>
          <a href="#"><i class="fa fa-youtube"></i></a>
        </div>

        <ul className= "list">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
        <p className = "copyright">
          Electricity Billing System @ 2021
        </p>
      </section>
    </div>
  )
}
export default Footer;
