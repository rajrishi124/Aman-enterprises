// Import the core express networking module to handle HTTP requests
const express = require("express");

// Import and configure DNS settings to use external resolution 
// This is often required to securely resolve clustered MongoDB connections (like MongoDB Atlas)
const dns = require('dns');
dns.setServers([
    '1.1.1.1', // Cloudflare DNS
    '8.8.8.8'  // Google DNS
]);

// Initialize the core Express application instance
const app = express();

// Middleware Registration: 
// Automatically parse incoming JSON request payloads so they can be accessed via req.body
app.use(express.json());

// Export the configured app instance so the main server.js entry point can launch it
module.exports = app;
