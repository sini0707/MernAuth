//? ===================================================== User Routes =====================================================

// ===================== Importing necessary modules/files =====================
import express from 'express';
const router = express.Router();

import {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
} from '../controllers/userController.js';




//? =============================== Routes ===============================


//* ==================== Authentication Routes ====================

router.post('/', registerUser);

router.post('/auth', authUser);

router.post('/logout', logoutUser);

router.route('/profile').get(getUserProfile).put(updateUserProfile);
// In the above line, the route is same, above line will use the specified controller according to the type of the request

router.post('/auth', authUser);







export default router;