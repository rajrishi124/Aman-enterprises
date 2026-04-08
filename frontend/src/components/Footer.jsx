// Import React and component-specific stylesheet
import React from "react";
import "./Footer.css";

// Footer component - displays global company links, contact details, and copyright at the bottom of the page
const Footer = () => {
  return (
    // Semantic footer container with class for dark industrial styling
    <footer className="glass-footer">

      {/* Main Container for aligning all the distinct columns of the footer */}
      <div className="footer-content">

        {/* Brand Information Section - displays company name and brief summary */}
        <div className="footer-brand">
          <h2>Aman Enterprises</h2>
          <p>Your trusted partner in building the future. Providing premium grade cement, steel, and construction aggregates.</p>
          
          {/* Container for social media links */}
          <div className="social-links">
            <a href="mailto:info@amanenterprises.com" aria-label="Gmail">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            </a>
            <a href="https://www.facebook.com/share/1FkGQQSugf/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5c0-2.03 1.25-3.15 3.1-3.15.86 0 1.6.06 1.81.09v2.1l-1.25.01c-1 0-1.2.47-1.2 1.18V12h2.4l-.4 3h-2v6.8c4.56-.93 8-4.96 8-9.8z"/></svg>
            </a>
            <a href="https://www.instagram.com/amanenterprises.bgs?igsh=dmF2MjhrYWJkaG14" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5A3.75 3.75 0 0020 16.25v-8.5A3.75 3.75 0 0016.25 4h-8.5zM12 7.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 2a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm5.25-3a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z"/></svg>
            </a>
            <a href="#twitter" aria-label="Twitter">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>

        {/* Container for grouping all the navigation lists side-by-side */}
        <div className="footer-links">

          {/* First column: External/Internal Product links */}
          <div className="link-column">
            <h3>Products</h3>
            <ul>
              <li><a href="#cement">Portland Cement</a></li>
              <li><a href="#tmt">TMT Steel Rods</a></li>
              <li><a href="#granite">Aggregates & Stone</a></li>
            </ul>
          </div>

          {/* Second column: General Company links */}
          <div className="link-column">
            <h3>Company</h3>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#logistics">Logistics & Delivery</a></li>
              <li><a href="#projects">Project Gallery</a></li>
            </ul>
          </div>

          {/* Third column: Direct Contact Information */}
          <div className="link-column">
            <h3>Contact Us</h3>
            <ul>
              <li>📞 +91 7250840206</li>
              <li>✉️ amankumarroy079@gmail.com</li>
              <li>📍 Teghra, Begusarai, Bihar - 851133</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom strip for copyright notice */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Aman Enterprises. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
