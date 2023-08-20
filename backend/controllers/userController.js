//? ===================================================== User Controller =====================================================


// ===================== Importing necessary modules/files =====================
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';



const authUser = asyncHandler ( async (req, res) => {

    // @desc Auth user/set token
    // route POST /api/users/auth
    // @access PUBLIC

    res.status(200).json({message: 'Authenticated user'});

});

const registerUser = asyncHandler ( async (req, res) => {

    // @desc Register new user
    // route POST /api/users/auth
    // @access PUBLIC

    res.status(200).json({message: 'Register user'});

});

const logoutUser = asyncHandler ( async (req, res) => {

    // @desc Logout user / clear cookie
    // route POST /api/users/logout
    // @access PUBLIC

    res.status(200).json({message: 'Logout user'});

});

const getUserProfile = asyncHandler ( async (req, res) => {

    // @desc Get user profile
    // route GET /api/users/profile
    // @access PRIVATE

    res.status(200).json({message: 'User profile'});

});

const updateUserProfile = asyncHandler ( async (req, res) => {

    // @desc Update user profile
    // route PUT /api/users/profile
    // @access PRIVATE

    res.status(200).json({message: 'Update user profile'});

});



export {

    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile

};