//? ===================================================== User Routes =====================================================

// ===================== Importing necessary modules/files =====================
import express from 'express';
import authenticateUser from '../middlewares/userAuthMiddleware.js';
import {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
} from '../controllers/userController.js';

// ===================== Configuring Express Router =====================
const router = express.Router();



//? =============================== Routes ===============================
router.post('/register', registerUser);

router.post('/auth', authUser);

router.post('/logout', logoutUser);

//* ==================== Authentication Routes ====================

//JWT token added to every request object in the form of cookie and checked using authenticateUser middleware

router.route('/profile').get( authenticateUser, getUserProfile ).put( authenticateUser,updateUserProfile );
// In the above line, the route is same, above line will use the specified controller according to the type of the request















export default router;