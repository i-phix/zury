/* ═══════════════════════════════════════════════════════════════
   Contact Us — Routes
   server/src/modules/contact-us/routes/contact-us.routes.js
═══════════════════════════════════════════════════════════════ */
import express               from "express";
import { submitContactForm } from "../controllers/contact-us.controller.js";

const router = express.Router();

router.post("/", submitContactForm);

export default router;