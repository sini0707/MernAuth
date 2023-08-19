//* ===================================================== Server Configuration =====================================================

// ===================== Importing necessary modules =====================
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

// Server port configuration
const PORT = process.env.PORT || 5000;

// Express app configuration
const app = express();


// ===================== Importing necessary files =====================
import userRoutes from './routes/userRoutes.js';


// ===================== Express app middleware configuration =====================
app.use('/api/users', userRoutes);






app.get('/', (req, res)=> {
    
    res.status(200).send("Application is running");

});



// Starting Server
app.listen(PORT, ()=> {

    console.log(`SERVER is LIVE & Listening on PORT ${PORT}.........`);

}); 
