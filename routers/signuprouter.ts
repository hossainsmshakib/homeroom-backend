import express from 'express';
import { getAllSignupInfo, postNewSignupUser } from '../controllers/signupController';

const router = express.Router();

//router.get('/signup', getAllSignupInfo);
router.post('/signup', postNewSignupUser);

export default router;
