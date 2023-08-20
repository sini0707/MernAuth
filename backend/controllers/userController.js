//? ===================================================== User Controller =====================================================


// ===================== Importing necessary modules/files =====================
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import generateToken from '../utils/jwtConfig/generateToken.js';



const authUser = asyncHandler ( async (req, res) => {

    /*
     # Desc: Auth user/set token
     # Route: POST /api/users/auth
     # Access: PUBLIC
    */

    res.status(200).json({message: 'Authenticated user'});

});

const registerUser = asyncHandler ( async (req, res) => {

    /*
     # Desc: Register new user
     # Route: POST /api/users/auth
     # Access: PUBLIC
    */

    const { name, email, password } = req.body;

    // Check if user already exist
    const userExists = await User.findOne({ email });

    // If the user already exists, throw an error
    if (userExists) {

        res.status(400);
        
        throw new Error('User already exists');

    }

    // Store the user data to DB if the user dosen't exist already.
    const user = await User.create({
        name: name,
        email: email,
        password: password
    });

    
    if (user) {

        // If user is created, send response back with jwt token

        generateToken(res, user._id); // Middleware to Generate token and send it back in response object

        const registeredUserData = {
            id: user._id,
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

const logoutUser = asyncHandler ( async (req, res) => {

    /*
     # Desc: Logout user / clear cookie
     # Route: POST /api/users/logout
     # Access: PUBLIC
    */

    res.status(200).json({message: 'Logout user'});

});

const getUserProfile = asyncHandler ( async (req, res) => {

    /*
     # Desc: Get user profile
     # Route: GET /api/users/profile
     # Access: PRIVATE
    */

    res.status(200).json({message: 'User profile'});

});

const updateUserProfile = asyncHandler ( async (req, res) => {

    /*
     # Desc: Update user profile
     # Route: PUT /api/users/profile
     # Access: PRIVATE
    */

    res.status(200).json({message: 'Update user profile'});

});



export {

    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile

};