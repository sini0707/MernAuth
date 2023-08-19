//? ===================================================== User Routes =====================================================

// ===================== Importing necessary modules/files =====================
import express from 'express';
const router = express.Router();

import { authUser } from '../controllers/userController.js';




//? =============================== Routes ===============================


//* ==================== Authentication Routes ====================

router.post('/auth', authUser);







export default router;