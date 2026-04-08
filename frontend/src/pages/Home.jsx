import React from "react";
// Import global Home-specific stylesheet
import "./Home.css";

// Home Page Component - Serves as the landing page of the application
const Home = () => {
  return (
    // Main wrapper matching the exact width and positioning for the home content
    <div className="home-container">
      
      {/* Hero Section - The massive banner at the top of the page */}
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Build with <span>Strength & Reliability</span>
          </h1>
          <p className="hero-subtitle">
            Aman Enterprises provides premium grade Cement, TMT Steel Rebars, and heavy-duty construction materials for your toughest projects.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">View Our Products</button>
            <button className="btn-secondary">Request a Quote</button>
          </div>
        </div>
        
        {/* Decorative Industrial Background Elements */}
        <div className="industrial-accent top-right"></div>
        <div className="industrial-accent bottom-left"></div>
      </header>

      {/* Products Highlights Section - Displays 3 core business values/cards */}
      <section id="products" className="features-section">
        
        {/* Individual highlight card for Cement */}
        <div className="feature-card">
          <h3>High-Grade Cement</h3>
          <p>Top quality Portland Cement ensuring durable foundations and long-lasting strength for any structural requirement.</p>
        </div>
        <div className="feature-card">
          <h3>TMT Steel Rods</h3>
          <p>Earthquake-resistant Thermo Mechanically Treated (TMT) bars providing maximum tensile strength and flexibility.</p>
        </div>
        <div className="feature-card">
          <h3>Construction Aggregates</h3>
          <p>Premium grade sand, crushed stone, and gravel meticulously sourced for all your raw concrete blending needs.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
