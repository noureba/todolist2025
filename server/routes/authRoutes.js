import express from "express";
import { register, login } from "../controllers/authconroller.js";

const router = express.Router()

//router.post('/login')
router.post('/register',register)
router.post('/login', login)



export default router;