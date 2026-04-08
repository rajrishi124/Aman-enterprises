import React, { useState } from 'react';
import './product.css';

const Product = () => {
  const [activeCategory, setActiveCategory] = useState('Cement');

  const categories = ['Cement', 'TMT', 'Sand', 'Stone', 'Bricks', 'Accessories'];

  const productsData = {
    Cement: [
      { title: "Portland Cement (OPC 53)", desc: "High-strength cement suitable for heavy-duty construction foundations and pillars." },
      { title: "Portland Pozzolana Cement (PPC)", desc: "Perfect for brick masonry, plastering, and general construction work." }
    ],
    TMT: [
      { title: "Fe 500D TMT Rebars", desc: "Durable, high-tensile earthquake resistant bars for structural reinforcement." },
      { title: "Fe 550 TMT Rebars", desc: "High tensile strength rebars for heavy-load industrial infrastructure." }
    ],
    Sand: [
      { title: "River Sand", desc: "Fine river sand thoroughly filtered for pure, crack-free binding in concrete." },
      { title: "M-Sand (Manufactured)", desc: "Eco-friendly alternative to river sand, perfect for tight brickwork." }
    ],
    Stone: [
      { title: "Crushed Blue Metal (20mm)", desc: "High-grade crushed stone aggregates perfect for RCC concrete mixing and slab casting." },
      { title: "Granite Stone Dust", desc: "Eco-friendly fine stone dust ideal for block manufacturing, paving, and levelling." }
    ],
    Bricks: [
      { title: "Red Clay Bricks", desc: "Classic kiln-fired red bricks for strong load-bearing walls." },
      { title: "Fly Ash Bricks", desc: "Lightweight, uniform fly ash bricks perfect for multi-story buildings." },
      { title: "Concrete Blocks", desc: "High masonry strength hollow and solid cement blocks." }
    ],
    Accessories: [
      { title: "Binding Wire", desc: "Galvanized soft iron binding wire designed to securely tie TMT rebars together." },
      { title: "Waterproofing Compound", desc: "Advanced liquid waterproofing additive to protect roofs and basements from moisture." }
    ]
  };

  return (
    // Main products container applying specific page margins and theming
    <div className="product-page-container">
      
      {/* Top Introductory Header describing what this page is about */}
      <div className="product-header">
        <h1>Our Core <span>Products</span></h1>
        <p>Select a category to view the premium grade materials available.</p>
      </div>

      {/* Master-Detail Layout Wrapper: Flex container splitting screen into left sidebar and right content */}
      <div className="product-layout">
        
        {/* Left Sidebar Navigation - Iterates through all available product categories */}
        <div className="product-sidebar">
          {categories.map((category) => (
            <div 
              key={category} 
              className={`sidebar-item ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </div>
          ))}
        </div>

        {/* Right Content Area - Dynamically displays items based on the activeCategory state variable */}
        <div className="product-content-area">
          {/* Header identifying the currently selected category */}
          <h2 className="category-title">{activeCategory}</h2>
          
          {/* CSS Grid grouping the mapped product items together into structured cards */}
          <div className="product-grid">
            {productsData[activeCategory].map((prod, index) => (
              <div className="product-card" key={index}>
                <div className="product-image-placeholder">
                  {/* Image gets placed here */}
                  <span>[Image Placeholder]</span>
                </div>
                <div className="product-card-body">
                  <h3 className="product-name">{prod.title}</h3>
                  <p className="product-desc">{prod.desc}</p>
                  <button className="view-more-btn">View More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
