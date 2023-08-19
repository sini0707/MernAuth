//? ===================================================== User Controller =====================================================




const authUser = (req, res) => {

    // @desc Auth user/set token
    // route POST /api/users/auth
    // @access PUBLIC

    res.status(200).json({message: 'Authenticated user'});

}




export {authUser};