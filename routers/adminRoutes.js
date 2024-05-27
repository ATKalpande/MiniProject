import express  from 'express';

import { adminController, loginController } from '../controller/adminController.js';

const adminRoutes = express.Router();

adminRoutes.post('/',adminController);
adminRoutes.post('/login',loginController)

export default adminRoutes;