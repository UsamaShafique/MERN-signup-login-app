import express from "express";
import { SignupUsers /*, loginUser*/ } from "../controllers/controllerAPIs.js";

const router = express.Router();

//router.post('/', loginUser);
router.post('/', SignupUsers);

export default router;