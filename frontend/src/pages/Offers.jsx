import React from 'react';
import './Offers.css';

// Offers Component - Displays current active promotions
const Offers = () => {
    return (
        // Main wrapper for offers page using standard industrial padding
        <div className="offers-page-container">
            
            {/* Header section explaining the page */}
            <div className="offers-header">
                <h1>Exclusive <span>Offers</span></h1>
                <p>Limited-time deals on premium construction materials. Build more, spend less.</p>
            </div>
            
            {/* CSS Grid layout for displaying the offer cards */}
            <div className="offers-grid">
                
                {/* Offer Card 1 */}
                <div className="offer-card">
                    <div className="offer-badge">10% OFF</div>
                    <h3>Bulk Cement Orders</h3>
                    <p>Order 500+ bags of Portland Cement (OPC 53) and immediately receive a flat 10% discount on the total material cost.</p>
                    <button className="claim-btn">Claim Offer</button>
                </div>
                
                {/* Offer Card 2 */}
                <div className="offer-card">
                    <div className="offer-badge highlight">FREE DELIVERY</div>
                    <h3>TMT Rebar Transport</h3>
                    <p>Secured free trucking and site delivery on all TMT Steel Rod orders exceeding 10 Metric Tons within city limits.</p>
                    <button className="claim-btn">Claim Offer</button>
                </div>
                
                {/* Offer Card 3 */}
                <div className="offer-card">
                    <div className="offer-badge">COMBO DEAL</div>
                    <h3>Foundation Pack</h3>
                    <p>Purchase Cement, Sand, and Crushed Aggregates together in bulk, and receive complimentary Waterproofing Compound buckets.</p>
                    <button className="claim-btn">Claim Offer</button>
                </div>

            </div>
        </div>
    );
};

export default Offers;
