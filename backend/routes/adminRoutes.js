//? ===================================================== User Routes =====================================================

// ===================== Importing necessary modules/files =====================
import express from 'express';
import authenticateAdmin from '../middlewares/adminAuthMiddleware.js';



// ===================== Configuring Express Router =====================
const router = express.Router();

import {
    authAdmin,
    registerAdmin,
    logoutAdmin,
    getAdminProfile,
    updateAdminProfile,
    getAllUsers
} from '../controllers/adminController.js';




//? =============================== Routes ===============================


//* ==================== Authentication Routes ====================

router.post('/', registerAdmin);

router.post('/auth', authAdmin);

router.post('/logout', logoutAdmin);

router.route('/profile').get( authenticateAdmin, getAdminProfile ).put( authenticateAdmin, updateAdminProfile );
// In the above line, the route is same, above line will use the specified controller according to the type of the request

router.get('/get-users', getAllUsers);







export default router;