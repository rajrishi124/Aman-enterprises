// Import React and Link component for fast client-side navigation without page reloads
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Import the specific CSS file for header styling

// Header component - responsible for global top navigation bar
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    // Semantic navigation container with CSS class for glassmorphism styling
    <nav className="glass-nav">
      
      {/* Brand logo container linking back to the Home page */}
      <div className="logo">
        <Link to="/">Aman Enterprises</Link>
      </div>

      {/* Hamburger Menu Icon */}
      <div className={`hamburger ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      {/* Container for standard navigation links */}
      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
        <li><Link to="/products" onClick={() => setIsMenuOpen(false)}>Products</Link></li>
        <li><a href="#bulk-orders" onClick={() => setIsMenuOpen(false)}>Bulk Orders</a></li>
        
        {/* Blinking navigational link to attract attention to deals */}
        <li className="blinking-nav"><Link to="/offers" onClick={() => setIsMenuOpen(false)}>🔥 Offers!</Link></li>
        
        {/* Call-to-action button styled differently from normal links */}
        <li><a href="#quote" className="nav-cta" onClick={() => setIsMenuOpen(false)}>Get a Quote</a></li>
      </ul>
    </nav>
  );
};

export default Header;
