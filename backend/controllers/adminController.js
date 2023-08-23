//? ===================================================== User Controller =====================================================


// ===================== Importing necessary modules/files =====================
import asyncHandler from 'express-async-handler';
import AdminModel from '../models/adminModel.js';
import generateToken from '../utils/jwtConfig/generateToken.js';
import destroyToken from '../utils/jwtConfig/destroyToken.js';



const authAdmin = asyncHandler ( async (req, res) => {

    /*
     # Desc: Auth user/set token
     # Route: POST /api/admin/auth
     # Access: PUBLIC
    */

    const { email, password } = req.body;

    if ( !email || !password ) {

        // If email or password is empty, return error

        res.status(401);

        throw new Error('Email or Password is missing in the request, Admin authentication failed.');

    }

    // Find the user in Db with the email and password
    const admin = await AdminModel.findOne({ email: email});

    let passwordValid = false;
    
    if (admin) {

        passwordValid = await admin.matchPassword(password);

    }

    if ( passwordValid ) {

        // If user is created, send response back with jwt token

        generateToken(res, admin._id); // Middleware to Generate token and send it back in response object

        const registeredAdminData = {
            name: admin.name,
            email: admin.email
        }

        res.status(201).json(registeredAdminData);

    } 
    
    if( !user || !passwordValid ) {

        // If user or user password is not valid, send error back

        res.status(401);

        throw new Error('Invalid Email or Password, Admin authentication failed.');
    
    }

});

const registerAdmin = asyncHandler ( async (req, res) => {

    /*
     # Desc: Register new user
     # Route: POST /api/admin/auth
     # Access: PUBLIC
    */

    const { name, email, password } = req.body;

    // Check if user already exist
    const userExists = await AdminModel.findOne({ email });

    // If the user already exists, throw an error
    if (userExists) {

        res.status(400);
        
        throw new Error('Admin already exists.');

    }

    // Store the user data to DB if the user dosen't exist already.
    const user = await AdminModel.create({
        name: name,
        email: email,
        password: password
    });

    
    if (user) {

        // If user is created, send response back with jwt token

        generateToken(res, user._id); // Middleware to Generate token and send it back in response object

        const registeredUserData = {
            name: user.name,
            email: user.email
        }

        res.status(201).json(registeredUserData);

    }else {

        // If user was NOT Created, send error back

        res.status(400);

        throw new Error('Invalid user data, User registration failed.');
    
    }


});

const logoutAdmin = asyncHandler ( async (req, res) => {

    /*
     # Desc: Logout user / clear cookie
     # Route: POST /api/admin/logout
     # Access: PUBLIC
    */

    destroyToken(res);

    res.status(200).json({message: 'Admin Logged Out'});

});

const getAdminProfile = asyncHandler ( async (req, res) => {

    /*
     # Desc: Get user profile
     # Route: GET /api/admin/profile
     # Access: PRIVATE
    */

    const user = {

        name: req.user.name,
        email: req.user.email

    }

    res.status(200).json({user});

});

const updateAdminProfile = asyncHandler ( async (req, res) => {

    /*
     # Desc: Update user profile
     # Route: PUT /api/admin/profile
     # Access: PRIVATE
    */

    // Find the user data with user id in the request object
    const admin = await AdminModel.findById(req.user._id);

    if (admin) {
    
        // Update the user with new data if found or keep the old data itself.
        admin.name = req.body.name || admin.name;
        admin.email = req.body.email || admin.email;

        // If request has new password, update the user with the new password
        if (req.body.password) {

            admin.password = req.body.password
        
        }

        const updatedAdminData = await admin.save();

        // Send the response with updated user data
        res.status(200).json({

            name: updatedAdminData.name,
            email: updatedAdminData.email

        });

    } else {

        res.status(404);

        throw new Error("Requested Admin not found.");

    };

});



export {

    authAdmin,
    registerAdmin,
    logoutAdmin,
    getAdminProfile,
    updateAdminProfile

};