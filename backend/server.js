// Load environment variables (.env files) into process.env to ensure secrets/config aren't hardcoded
require("dotenv").config();

// Import the configured Express application
const app = require("./src/app");

// Import the database connection utility function
const connectDB = require("./src/db/db");

// Establish connection to MongoDB database before starting the server
connectDB();

// Start the Express web server listening on the PORT defined in environment variables
app.listen(process.env.PORT,()=>{
    console.log(`✅Server is running on port ${process.env.PORT}`);
});