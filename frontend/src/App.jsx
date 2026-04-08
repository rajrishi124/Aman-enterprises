// Import React library and routing components for Single Page Application navigation
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import individual page and component views
import Home from "./pages/Home";
import Product from "./pages/product";
import Offers from "./pages/Offers";
import Footer from "./components/Footer";
import Header from "./components/Header";

// Main App component that acts as the root layout of the application
const App = () => {
    return (
        // BrowserRouter wrapper to enable URL routing
        <BrowserRouter>
            {/* Main Application Wrapper with flex layout to create a "Sticky Footer" */}
            <div className="app-shell" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
                
                {/* Global Header Navigation - stays fixed at top across all routes */}
                <Header />
                
                {/* Dynamic Main Content Area - changes based on the current URL route */}
                <main style={{ flex: 1 }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/products" element={<Product />} />
                        <Route path="/offers" element={<Offers />} />
                    </Routes>
                </main>
                
                {/* Global Footer - stays fixed at the bottom across all routes */}
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;