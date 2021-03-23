import React from 'react';

const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer-area container-xl">
        <ul className="footer-list">
          <p className='footer_title'>Shop and Learn</p>
          <li><a href="#">Mac</a></li>
          <li><a href="#">iPad</a></li>
          <li><a href="#">iPhone</a></li>
          <li><a href="#">Watch</a></li>
          <li><a href="#">TV</a></li>
          <li><a href="#">Music</a></li>
          <li><a href="#">AirPods</a></li>
          <li><a href="#">HomePod</a></li>
          <li><a href="#">iPod touch</a></li>
          <li><a href="#">Accessories</a></li>
          <li><a href="#">Gift Cards</a></li>
        </ul>
        <ul className="footer-list">
          <p className='footer_title'>Services</p>
          <li><a href="#">Apple Music</a></li>
          <li><a href="#">Apple TV+</a></li>
          <li><a href="#">Apple Fitness+</a></li>
          <li><a href="#">Apple News+</a></li>
          <li><a href="#">Apple Arcade</a></li>
          <li><a href="#">iCloud</a></li>
          <li><a href="#">Apple One</a></li>
          <li><a href="#">Apple Card</a></li>
          <li><a href="#">Apple Books</a></li>
          <li><a href="#">App Store</a></li>
          <p className="footer_title margin-top_20">Account</p>
          <li><a href="#">Manage Your Apple ID</a></li>
          <li><a href="#">Apple Store Account</a></li>
          <li><a href="#">iCloud.com</a></li>
        </ul>
        <ul className='footer-list'>
          <p className='footer_title'>Apple Store</p>
          <li><a href="#">Find a Store</a></li>
          <li><a href="#">Shop Online</a></li>
          <li><a href="#">Genius Bar</a></li>
          <li><a href="#">Today on Apple</a></li>
          <li><a href="#">Apple Camp</a></li>
          <li><a href="#">Apple Store App</a></li>
          <li><a href="#">Refurbished and Clearance</a></li>
          <li><a href="#">Financing</a></li>
          <li><a href="#">Apple Trade In</a></li>
          <li><a href="#">Order Status</a></li>
          <li><a href="#">Shopping Help</a></li>
        </ul>
        <ul className='footer-list'>
          <p className='footer_title'>For Business</p>
          <li><a href="#">Apple and Business</a></li>
          <li><a href="#">Shop for Business</a></li>

          <p className='footer-title margin-top_20'></p>
          <li><a href="#">Apple and Education</a></li>
          <li><a href="#">Shop for K-12</a></li>
          <li><a href="#">Shop for College</a></li>

          <p className='footer-title margin-top_20'>For Healthcare</p>
          <li><a href="#">Apple in Healthcare</a></li>
          <li><a href="#">Health on Apple Watch</a></li>
          <li><a href="#">Health Records on iPhone</a></li>

          <p className='footer-title margin-top_20'>For Government</p>
          <li><a href="#">Shop for Government</a></li>
          <li><a href="#">Shop for Veterans and Military</a></li>
        </ul>
        <ul className='footer-list'>
          <p className='footer-title margin-top_20'>Apple Values</p>
          <li><a href="#">Accesibility</a></li>
          <li><a href="#">Education</a></li>
          <li><a href="#">Environment</a></li>
          <li><a href="#">Inclusion and Diversity</a></li>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Racial Equity and Justice</a></li>
          <li><a href="#">Supplier Responsibility</a></li>

          <p className='footer-title margin-top_20'>About Apple</p>
          <li><a href="#">Newsroom</a></li>
          <li><a href="#">Apple Leadership</a></li>
          <li><a href="#">Job Opportunities</a></li>
          <li><a href="#">Investors</a></li>
          <li><a href="#">Ethics and Compliance</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Contact Apple</a></li>
        </ul>
      </div>
        <div className="copyright_section container-xl">
            <div className="copyright_text">
            <p className="copyright_text-p">More ways to shop: <a href="#"> Find an Apple Store </a> or <a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.</p>
            </div>
            <div className='copyright_area'>
                <ul className="copyright_menu">
                  <li className='copyright'>Copyright © 2021 Apple Inc. All rights reserved.</li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms of Use</a></li>
                  <li><a href="#">Sales and Refunds</a></li>
                  <li><a href="#">Legal</a></li>
                  <li><a href="#">Site Map</a></li>
                  <li><a href="#" className="footer_city">United States</a></li>
                </ul>
            </div>
        </div>
    </div>
  );
};
export default Footer;
