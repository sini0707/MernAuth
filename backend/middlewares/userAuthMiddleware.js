//? ===================================================== User Authentication Middleware =====================================================

import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';



const authenticateUser = asyncHandler( async (req, res, next) => {

    const tokenFromRequest = req.cookies.jwt;

    if (tokenFromRequest) {
    
        try {
            
            const decodedTokenData = jwt.verify( tokenFromRequest, process.env.JWT_SECRET_KEY);

            const requestUser = await User.findById(decodedTokenData.userId).select('-password');

            if (requestUser) {
            
                req.user = requestUser;

                next();

            }

        } catch (error) {
            
            res.status(401);

            throw new Error(`Authentication Failed. Invalid token found`);

        }

    } else {

        res.status(401);

        throw new Error(`Authentication Failed. No token found`);

    }

});


export default authenticateUser;

