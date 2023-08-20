//* ===================================================== Server Configuration =====================================================

// ===================== Importing necessary modules =====================
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

// Server port configuration
const PORT = process.env.PORT || 5000;

// Express app configuration
const app = express();

// ===================== Database Configuration =====================
import connectDB from './config/db.js';

connectDB();


// ===================== Importing necessary files =====================
import userRoutes from './routes/userRoutes.js';
import { notFoundErrorHandler, errorHandler } from './middlewares/errorMiddleware.js';


//? ===================== Routes Configuration =====================
app.use('/api/users', userRoutes);






app.get('/', (req, res)=> {
    
    res.status(200).send("Application is running");

});


// ===================== Error handler middleware configuration =====================
app.use(notFoundErrorHandler);
app.use(errorHandler);



// ===================== Starting Server =====================
app.listen(PORT, ()=> {

    console.log(`SERVER is LIVE & Listening on PORT ${PORT}.........`);

}); 
