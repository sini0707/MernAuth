//? ===================================================== User Controller =====================================================


// ===================== Importing necessary modules/files =====================
import asyncHandler from 'express-async-handler';



const authUser = asyncHandler ( async (req, res) => {

    // @desc Auth user/set token
    // route POST /api/users/auth
    // @access PUBLIC

    res.status(200).json({message: 'Authenticated user'});

});




export {authUser};