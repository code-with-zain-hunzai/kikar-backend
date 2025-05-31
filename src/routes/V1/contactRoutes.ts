import express from "express";
import { submitContactForm } from "../../controller/V1/contactController";
const router = express.Router();

router.post("/contact", submitContactForm);

export default router;
