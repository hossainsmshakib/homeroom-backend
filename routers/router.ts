import { Router } from "express";
import {
  getAllSignupInfo,
  postNewSignupUser,
} from "../controllers/signupController";
const router = Router();

router.get("/getAll", getAllSignupInfo);
router.post("/postUser", postNewSignupUser);
/* router.get('/restaurant/:id', getAllFoodOfRestaurant);
router.post('/restaurant/:id', postFoodToRestaurant);
router.get('/search', searchFood); */

export default router;
