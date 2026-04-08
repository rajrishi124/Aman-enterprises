// Import mongoose object modeling tool to interact with the MongoDB database
const mongoose = require("mongoose");

// Asynchronous utility function to establish the database connection securely
const connectDB = async ()=>{
    try{
        // Await the connection using the MONGO_URI string mapped from environment variables
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to DB🚀");
    }
    catch(error){
        // Log the error message visibly in the console if the connection fails
        console.log("Error connecting to DB:", error);
    }
}

// Export the connection utility for use when the main server process starts
module.exports = connectDB;